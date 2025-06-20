import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export function Bookshelf({ books }) {
  // State management
  const [bookIndex, setBookIndex] = useState(-1);
  const [scroll, setScroll] = useState(-200);
  const [isClient, setIsClient] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [booksInViewport, setBooksInViewport] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Refs
  const bookshelfRef = useRef(null);
  const viewportRef = useRef(null);
  const scrollRightRef = useRef(null);
  const scrollLeftRef = useRef(null);

  // Constants
  const width = 41.5;
  const height = 220;
  const spineWidth = `${width}px`;
  const coverWidth = `${width * 4}px`;
  const bookWidth = `${width * 5}px`;
  const bookHeight = `${height}px`;

  // Sort books by rating (highest first)
  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);

  // Scroll boundaries
  const minScroll = 0;
  const maxScroll = Math.max(0, 
    (width + 12) * (sortedBooks.length - booksInViewport) +
    (bookIndex > -1 ? width * 4 : 0) + 5
  );

  // Client-side rendering check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Bounded scroll function
  const boundedScroll = useCallback((scrollX) => {
    setScroll(Math.max(minScroll, Math.min(maxScroll, scrollX)));
  }, [minScroll, maxScroll]);

  // Bounded relative scroll function
  const boundedRelativeScroll = useCallback((incrementX) => {
    setScroll((prevScroll) =>
      Math.max(minScroll, Math.min(maxScroll, prevScroll + incrementX))
    );
  }, [minScroll, maxScroll]);

  // Handle viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (viewportRef.current) {
        const width = viewportRef.current.offsetWidth;
        setViewportWidth(width);
        const numberOfBooks = width / (width + 11);
        setBooksInViewport(numberOfBooks);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle book index changes
  useEffect(() => {
    if (bookIndex === -1) {
      boundedRelativeScroll(0);
    } else {
      boundedScroll((bookIndex - (booksInViewport - 4.5) / 2) * (width + 11));
    }
  }, [bookIndex, boundedRelativeScroll, boundedScroll, booksInViewport]);

  // Scroll control handlers
  useEffect(() => {
    const currentScrollRightRef = scrollRightRef.current;
    const currentScrollLeftRef = scrollLeftRef.current;
    let scrollInterval = null;

    const setScrollRightInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(3);
      }, 10);
    };

    const setScrollLeftInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(-3);
      }, 10);
    };

    const clearScrollInterval = () => {
      setIsScrolling(false);
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    // Mouse events for desktop
    if (currentScrollRightRef) {
      currentScrollRightRef.addEventListener('mouseenter', setScrollRightInterval);
      currentScrollRightRef.addEventListener('mouseleave', clearScrollInterval);
    }

    if (currentScrollLeftRef) {
      currentScrollLeftRef.addEventListener('mouseenter', setScrollLeftInterval);
      currentScrollLeftRef.addEventListener('mouseleave', clearScrollInterval);
    }

    return () => {
      clearScrollInterval();
      if (currentScrollRightRef) {
        currentScrollRightRef.removeEventListener('mouseenter', setScrollRightInterval);
        currentScrollRightRef.removeEventListener('mouseleave', clearScrollInterval);
      }
      if (currentScrollLeftRef) {
        currentScrollLeftRef.removeEventListener('mouseenter', setScrollLeftInterval);
        currentScrollLeftRef.removeEventListener('mouseleave', clearScrollInterval);
      }
    };
  }, [boundedRelativeScroll]);

  // Book click handler
  const handleBookClick = (index) => {
    if (index === bookIndex) {
      setBookIndex(-1);
    } else {
      setBookIndex(index);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full mb-8">
      {/* Paper texture filter SVG */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          visibility: 'hidden',
        }}
      >
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      <div className="relative" ref={bookshelfRef}>
        {/* Left scroll button */}
        {scroll > minScroll && (
          <div className="absolute left-[-28px] md:left-[-36px] h-full z-10">
            <div
              ref={scrollLeftRef}
              className="flex items-center justify-center h-full w-7 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
            >
              <ChevronLeft size={12} className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        )}

        {/* Main bookshelf container */}
        <div
          ref={viewportRef}
          className="flex items-center gap-1 overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ height: bookHeight }}
        >
          {sortedBooks.map((book, index) => (
            <button
              key={book.title}
              onClick={() => handleBookClick(index)}
              className="flex flex-row items-center justify-start outline-none flex-shrink-0 gap-0"
              style={{
                transform: `translateX(-${scroll}px)`,
                width: bookIndex === index ? bookWidth : spineWidth,
                perspective: '1000px',
                WebkitPerspective: '1000px',
                transition: isScrolling
                  ? 'transform 100ms linear'
                  : 'all 500ms ease',
                willChange: 'auto',
              }}
            >
              {/* Book Spine */}
              <div
                className="flex items-start justify-center flex-shrink-0"
                style={{
                  width: spineWidth,
                  height: bookHeight,
                  transformOrigin: 'right',
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    bookIndex === index ? '-60deg' : '0deg'
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                  transition: 'all 500ms ease',
                  willChange: 'auto',
                  filter: 'brightness(0.8) contrast(2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Paper texture overlay */}
                <span
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 50,
                    height: bookHeight,
                    width: spineWidth,
                    opacity: 0.4,
                    filter: 'url(#paper)',
                  }}
                />
                
                {/* Book title */}
                <h2
                  className="mt-3 text-xs font-medium select-none overflow-hidden whitespace-nowrap text-ellipsis font-source-serif-4"
                  style={{
                    writingMode: 'vertical-rl',
                    maxHeight: `${height - 24}px`,
                  }}
                >
                  {book.title}
                </h2>
              </div>

              {/* Book Cover */}
              <div
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                  transformOrigin: 'left',
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    bookIndex === index ? '30deg' : '88.8deg'
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                  transition: 'all 500ms ease',
                  willChange: 'auto',
                  filter: 'brightness(0.8) contrast(2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Paper texture overlay */}
                <span
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 50,
                    height: bookHeight,
                    width: coverWidth,
                    opacity: 0.4,
                    filter: 'url(#paper)',
                  }}
                />
                
                {/* Binding effect */}
                <span
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 50,
                    height: bookHeight,
                    width: coverWidth,
                    background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
                  }}
                />
                
                {/* Book cover image */}
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover"
                    style={{
                      width: coverWidth,
                      height: bookHeight,
                      transition: 'all 500ms ease',
                      willChange: 'auto',
                    }}
                    onError={(e) => {
                      // Fallback to colored rectangle if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                
                {/* Fallback colored cover */}
                <div
                  className="flex items-center justify-center text-center p-2"
                  style={{
                    width: coverWidth,
                    height: bookHeight,
                    backgroundColor: book.spineColor,
                    color: book.textColor,
                    display: book.coverImage ? 'none' : 'flex',
                    transition: 'all 500ms ease',
                    willChange: 'auto',
                  }}
                >
                  <div className="font-source-serif-4">
                    <div className="text-sm font-bold mb-1 leading-tight">{book.title}</div>
                    <div className="text-xs opacity-80 leading-tight">{book.author}</div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right scroll button */}
        {scroll < maxScroll && (
          <div className="absolute right-[-28px] md:right-[-36px] h-full top-0 z-10">
            <div
              ref={scrollRightRef}
              className="flex items-center justify-center h-full w-7 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
            >
              <ChevronRight size={12} className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
