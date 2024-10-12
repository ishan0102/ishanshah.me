const projectsList = [
  {
    name: "engblogs",
    date: "August 2023",
    tools: ["GPT-3.5", "Postgres", "Cron"],
    tagline: "Learn from your favorite tech companies",
    description: `
      This site aggregates blog posts from dozens of tech companies and startups and summarizes them. This project went briefly viral and has 130 stars on GitHub.
    `,
    tag: "Personal",
    links: {
      Website: "https://engblogs.dev",
      GitHub: "https://github.com/ishan0102/engblogs",
    },
  },
  {
    name: "Hermes Mail",
    date: "May 2023",
    tools: ["Python", "PyPI"],
    tagline: "Email alerts for Python scripts",
    description: `
      Hermes Mail is a Python package that lets you get an email when your Python jobs are done
      instead of having to check your terminal.
    `,
    tag: "Personal",
    links: {
      GitHub: "https://github.com/ishan0102/hermes-mail",
      PyPI: "https://pypi.org/project/hermes-mail/",
    },
  },
  {
    name: "Countdowns",
    date: "May 2023",
    tools: ["Next.js", "Vercel"],
    tagline: "Beautiful countdown timers",
    description: `
      Countdowns is a simple web app that lets you build your own countdowns and share them with
      your friends. I implemented a shareable link system, multiple high-res backgrounds, and
      support for all timezones. In one week I reached 2k+ users, 70 countries, and 650+ countdowns
      created for everything from NBA games to baby due dates.
    `,
    tag: "Personal",
    links: {
      Website: "https://countdowns.live",
      GitHub: "https://github.com/ishan0102/countdowns",
    },
  },
  {
    name: "Do LLMs Know Grammar?",
    date: "October 2022 - May 2023",
    tools: ["PyTorch", "Hugging Face", "CUDA"],
    tagline: "Probing LLMs for syntactic knowledge",
    description: `
      This study investigates whether large language models use internal representations of grammatical
      subjecthood and objecthood to solve downstream NLP tasks. I benchmarked a RoBERTa model with and
      without a syntactic representation on a variety of tasks on a cluster of 4 Nvidia A40 GPUs.
    `,
    tag: "Research",
    links: {
      Paper: "/static/pdf/llm-grammar.pdf",
      Poster: "/static/pdf/llm-grammar-poster.pdf",
    },
  },
  {
    name: "Re:Form",
    date: "August 2022 - April 2023",
    tools: ["PoseNet", "Swift", "Velostat"],
    tagline: "A smart exercise app",
    description: `
    We built Re:Form, a personal trainer that uses PoseNet for form correction, gyroscopes to 
    analyze movement imbalances, and a pressure pad to measure weight distribution during a lift. 
    This is our capstone project for ECE at UT Austin.
    `,
    tag: "School",
    links: {
      YouTube: "https://www.youtube.com/watch?v=ir3zXi55mm4",
      Poster: "/static/pdf/reform.pdf",
    },
  },
  {
    name: "rsrch",
    date: "January 2023 - April 2023",
    tools: ["Python", "PyPI", "arxiv.py", "Notion"],
    tagline: "A Python package to manage arXiv papers",
    description: `
      rsrch is a Python package that lets you manage your arXiv papers directly from Python.
      It's built on top of arxiv.py, a Python wrapper for the arXiv API. I built this package
      to make it easier to manage my research papers on Notion and have extended it to work
      via a Discord bot.
    `,
    tag: "Personal",
    links: {
      GitHub: "https://github.com/ishan0102/rsrch",
      PyPI: "https://pypi.org/project/rsrch/",
    },
  },
  {
    name: "Video QA",
    date: "March 2023",
    tools: ["Sieve Data", "GPT-4", "CLIP", "Pinecone", "ViT-GPT2"],
    tagline: "Ask questions about videos",
    description: `
      This is a video question answering pipeline built on the Sieve Data platform that takes
      an input video and a question and returns an answer while citing the frames that were
      used to generate the answer. Video frames and queries are embedded using CLIP and stored
      in Pinecone, and ViT-GPT2 captions are passed to GPT-4 to generate answers in natural language.
    `,
    tag: "Work",
    links: {
      GitHub: "https://github.com/ishan0102/video-qa",
    },
  },
  {
    name: "Audio Wiki",
    date: "October 2022 - December 2022",
    tools: ["FastAPI", "Next.js", "BeautifulSoup", "Railway"],
    tagline: "Listen to Wikipedia",
    description: `
      Audio Wiki is an Unreal Speech project that uses our in-house text-to-speech engine to
      let you listen to Wikipedia articles. I built the entire backend for this project,
      including the Wikipedia scraper and parser and our FastAPI server. We're working on more
      apps that use our text-to-speech engine, so stay tuned!
    `,
    tag: "Work",
    links: {
      Website: "https://audio.wiki",
    },
  },
  {
    name: "Real Analysis Textbook",
    date: "August 2022 - December 2022",
    tools: ["LaTeX"],
    tagline: "A real analysis textbook",
    description: `
      I decided to take notes for Real Analysis (M 361K) in the form of a typeset textbook. 
      Writing this in real time during lectures was really hard at first, but after a few 
      classes I noticed I was getting way faster. Having a 140 WPM typing speed also helped quite a bit 😄.
    `,
    tag: "School",
    links: {
      Textbook: "/static/pdf/real-analysis.pdf",
      GitHub: "https://github.com/ishan0102/real-analysis",
    },
  },
  {
    name: "Pictionary",
    date: "March 2022 - May 2022",
    tools: ["TensorFlow", "GANs", "Computer Vision"],
    tagline: "Play Pictionary against a computer",
    description: `
        This is my final project for Computer Vision (EE 379V). This project uses computer vision 
        to recreate a computer-based game of Pictionary, in which a human player draws an image 
        and the computer attempts to guess the drawing. The model was trained on Google's Quick, 
        Draw! dataset, which contains over 50 million sketches. This recurrent neural network
        was then implemented in a React app that can efficiently classify sketches of common
        objects with ~40% accuracy.
      `,
    tag: "School",
    links: {
      Paper: "/static/pdf/pictionary.pdf",
      GitHub: "https://github.com/ishan0102/pictionary",
    },
  },
  {
    name: "Commentary",
    date: "April 2022 - May 2022",
    tools: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "XGBoost",
      "Twitter API",
      "FastAPI",
    ],
    tagline: "Predicting the sentiment of a tweet's replies",
    description: `
        For my final project in Data Science Principles (EE 461P), I trained a model to
        predict what the sentiment of a tweet's replies would look like given a tweet.
        I got to explore natural language processing tools like NLTK and TF-IDF and
        learned how to script API requests that follow rate limits. I also created and
        deployed a website using Google Cloud Platform to demo the app.
      `,
    tag: "School",
    links: {
      GitHub: "https://github.com/ishan0102/commentary",
      Poster: "/static/pdf/commentary.pdf",
    },
  },
  {
    name: "Exploring Bias in GPT-3",
    date: "December 2021",
    tools: ["GPT-3", "NLP"],
    tagline: "Critique on OpenAI's latest model",
    description: `
        I wrote this paper for Computational Linguistics (LIN 313).
        In it, I explore potential biases of a popular language model, GPT-3.
        I experimented by feeding the model input like "The doctor was a..."
        and analyzing the probability distribution of the output (male, female, etc.).
      `,
    tag: "Research",
    links: {
      Paper: "/static/pdf/gpt3.pdf",
    },
  },
  {
    name: "PintOS",
    date: "August 2021 - November 2021",
    tools: ["C", "Makefile", "Operating Systems"],
    tagline: "An operating system built from scratch",
    description: `
        Pintos is a semester-long project for Operating Systems (EE 461S) adopted from Stanford.
        Over the semester, I developed architecture to run programs (argument parsing,
        system calls, user memory), a virtual memory system (paging, swapping, stack growth,
        eviction, synchronization), and a file system (file growth, indexed files, subdirectories).
      `,
    tag: "School",
    links: {
      Website:
        "https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html",
    },
  },
  {
    name: "Yash",
    date: "August 2021",
    tools: ["C", "Operating Systems"],
    tagline: "Yet Another Shell",
    description: `
        Yash is a rudimentary shell written entirely from scratch in C for Operating Systems (EE 461S).
        I implemented all standard shell features like file redirection, pipes, signals, and job control.
        It was a challenge designing the software from scratch but it was a great introduction to
        deeply understanding low-level computing.
      `,
    tag: "School",
    links: {},
  },
  {
    name: "PeerNet",
    date: "February 2021 - May 2021",
    tools: ["React", "Node.js", "Firebase", "Twilio", "Material UI", "Sass"],
    tagline: "Peer-to-peer tutoring",
    description: `
        PeerNet is a tutoring initiative I co-led for the Roden Leadership Program.
        The platform allows university students to give and receive class-specific help.
        This project taught me a lot about full-stack web development and how to interface
        with Firebase.
      `,
    tag: "Work",
    links: {},
  },
  {
    name: "Longhorn Computing Services",
    date: "January 2021 - May 2021",
    tools: ["Flask", "React"],
    tagline: "Cloud computing manager",
    description: `
        This was a semester-long project for Software Engineering Lab (EE 461L).
        I worked on the APIs for a service that allows users to manage their cloud
        computing resources.
      `,
    tag: "School",
    links: {
      GitHub: "https://github.com/JimothyGreene/EE461L-Group2-FinalProject",
    },
  },
  {
    name: "Day in Review",
    date: "July 2020 - August 2020",
    tools: ["Scikit-learn", "NLP", "Electron JS", "Node.js", "React"],
    tagline: "Email summarizer",
    description: `
        This is a desktop/web app that shows summaries of your inbox using BERT,
        a neural network that uses extractive summarization and language modeling.
        It was created out of frustration with unnecessarily long emails.
      `,
    tag: "Personal",
    links: {
      GitHub: "https://github.com/DayInReview/day-in-review",
    },
  },
  {
    name: "Silk Road",
    date: "November 2020 - December 2020",
    tools: ["Java", "Apache Derby", "JavaFX", "Gson"],
    tagline: "Multithreaded auction server",
    description: `
        This was my final project for Data Structures (EE 422C). It allowed multiple
        clients to bid on auction items simultaneously. I learned how to interface
        client threads with a server using the observer pattern and experienced writing
        a full-stack app with a database from scratch.
      `,
    tag: "School",
    links: {},
  },
  {
    name: "Speech Analysis with NLP",
    date: "October 2020",
    tools: ["Google Cloud", "NLP", "Node.js", "React"],
    tagline: "Hack Texas 2020 submission",
    description: `
        HackTX 2020 challenged us to use Google Cloud Platform to create something
        unique. We decided to use GCP's NLP services to improve users' speaking
        skills by providing feedback on tone and speech style.
      `,
    tag: "Personal",
    links: {
      DevPost: "https://devpost.com/software/nlp-speech-analysis",
      GitHub: "https://github.com/ishan0102/hacktx-20",
    },
  },
  {
    name: "Runkeeper",
    date: "May 2020 - June 2020",
    tools: ["Python", "Tkinter", "OpenPyXL"],
    tagline: "Track running statistics",
    description: `
        During quarantine, I wanted an easy way to track my running statistics. Not knowing 
        how databases worked, I wrote everything using a simple Python GUI library and Excel. 
        This was a great way to introduce myself to Python and understand what goes into 
        making an app.
      `,
    tag: "Personal",
    links: {
      GitHub: "https://github.com/ishan0102/runkeeper",
    },
  },
  {
    name: "T-Rex Run",
    date: "May 2020",
    tools: ["C++", "C", "ARM Assembly"],
    tagline: "Google's dinosaur game",
    description: `
        This was my final project for Embedded Systems (EE 319H). I implemented Google's
        dinosaur running game on the TM4C microcontroller. The game featured multiple LEDs,
        a slide potentiometer for controls, an LCD, and a DAC for sound.
      `,
    tag: "School",
    links: {
      YouTube: "https://www.youtube.com/watch?v=mLqsLVLjyEE",
      GitHub: "https://github.com/ishan0102/t-rex-run",
    },
  },
];

export const ProjectData = {
  projectsList,
};
