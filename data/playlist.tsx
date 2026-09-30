export type PlaylistSong = {
  id: string;
  title: string;
  friend: string;
  file: string;
};

export const playlist: PlaylistSong[] = [
  {
    id: "song-1",
    title: "Souper Trouper",
    friend: "Sakshi",
    file: "/music/souper-trouper.mp3",
  },
  {
    id: "song-2",
    title: "Birds of a Feather",
    friend: "Akansha",
    file: "/music/birds-of-a-feather.mp3",
  },
  {
    id: "song-3",
    title: "Here I Am — Princesses Just Wanna Have Fun",
    friend: "Akansha",
    file: "/music/here-i-am.mp3",
  },
  {
    id: "song-4",
    title: "I Like Me Better",
    friend: "Sakshi",
    file: "/music/i-like-me-better.mp3",
  },
  {
    id: "song-5",
    title: "You Belong with Me",
    friend: "Ishitha",
    file: "/music/you-belong-with-me.mp3",
  },
  {
    id: "song-6",
    title: "Baby Now That I've Found You",
    friend: "Manaswini",
    file: "/music/baby-now-that-i-have-found-you.mp3",
  },
  {
    id: "song-7",
    title: "Pata",
    friend: "Shashank",
    file: "/music/pata.mp3",
  },
  {
    id: "song-8",
    title: "Wake Up Sid",
    friend: "Akansha",
    file: "/music/wake-up-sid.mp3",
  },
];