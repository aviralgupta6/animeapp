export type AnimeCardType = {
  animeId: string;
  episodeId: string;
  animeTitle: string;
  episodeNum: string;
  subOrDub: string;
  animeImg: string;
  episodeUrl: string;
};

export type AnimeDetailsType = {
  animeTitle?: string;
  type: string;
  releasedDate: string;
  status: string;
  genres: number[];
  otherNames: string;
  synopsis: string;
  animeImg?: string;
  episodesAvaliable: string;
  episodesList: number[];
};
