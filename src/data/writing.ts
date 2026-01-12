export interface WritingEntry {
  name: string;
  date: string;
  tagline: string;
  slug: string;
}

const writingList: WritingEntry[] = [
  // Add writing entries here with the following structure:
  // {
  //   name: "Article Title",
  //   date: "2024",
  //   tagline: "A brief description of the article",
  //   slug: "article-slug",
  // },
];

export const WritingData = {
  writingList,
};
