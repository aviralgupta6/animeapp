export type AnimeCardType = {
  animeId: string;
  episodeId: string;
  animeTitle: string;
  episodeNum: string;
  subOrDub: string;
  animeImg: string;
  episodeUrl: string;
};

export type EpisodeDetailsType = {
  episodeId?: string;
  episodeNum?: number | string;
  episodeUrl?: string;
};

export type AnimeDetailsType = {
  [key: string]: any;
  animeId?: string;
  type?: string;
  animeTitle?: string;
  animeImg: string;
  status?: string;
  genres?: string[];
  otherNames?: string[] | string;
  synopsis?: string;
  totalEpisodes?: number | string;
  episodesList: EpisodeDetailsType[];
};
