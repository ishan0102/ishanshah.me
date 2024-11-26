// import Link from 'next/link';
// import Image from 'next/image';

// export function Blogs() {
//   return (
//     <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8">
//       <div className="mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32">
//         <div className="prose mb-2 sm:mb-6">
//           <h2 className="text-2xl font-bold mb-4">my blogs :) </h2>
//           <p>
//             i write about stuff that i find interesting or anything about ml. i also want to post most of the stuff that i write here lol. some of my blogs : </p>
//           <ul className="space-y-2">
//             <li>
//               <Link href="/blogs/Attention">
//                 <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
//                   Attention Is All You Need
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }


export function Blogs() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8">
      <div className="mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32">
        <div className="prose mb-2 sm:mb-6">
          <h2 className="text-2xl font-bold mb-4">my blogs :)</h2>
          <p>
            i write about stuff that i find interesting or anything about deep learning, neural nets or insights on papers.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://marmiks.notion.site/mathematical-intuition-for-transformers-11e6feef359d80fb85bbf1996a2b5f10?pvs=4"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                mathematical intuition for transformers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}