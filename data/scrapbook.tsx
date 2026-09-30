export type ScrapbookPage = {
  id: string;
  name: string;
  photos: string[];
  note?: string;
};

export const scrapbookPages: ScrapbookPage[] = [
  {
    id: "shashank",
    name: "Shashank",
    photos: [
      "/photos/shashank.jpeg",
    ],
    note: "one of my favourite people EVER♡",
  },
  {
    id: "manaswini",
    name: "Manaswini",
    photos: [
      "/photos/Manas.jpeg",
    ],
    note: "Love you ANNIEE♡",
  },
  {
    id: "ishitha",
    name: "Ishitha",
    photos: [
      "/photos/ishitha_1.jpeg",
      "/photos/ishitha_2.jpeg",
    ],
    note: "Then and Now, we might just be the CUTEST♡",
  },
  {
    id: "akansha",
    name: "Akansha",
    photos: [
      "/photos/Akansha_1.jpeg",
      "/photos/Akansha_2.jpeg",
    ],
    note: "We are adorable broo ♡",
  },
  {
    id: "mazin",
    name: "Mazin",
    photos: [
      "/photos/mazin.jpeg",
    ],
    note: "This pretty much sums up our friendship♡",
  },
  {
    id: "sakshi",
    name: "Sakshi",
    photos: [
      "/photos/sakshi_1.jpg",
      "/photos/sakshi_2.jpg",
    ],
    note: "Love ya bbg♡",
  },
];