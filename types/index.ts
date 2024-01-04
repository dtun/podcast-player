export type PodcastResult = {
  artistName: string;
  artworkUrl100: string;
  contentAdvisoryRating: string;
  name: string;
  id: string;
};

export type PodcastsResult = {
  feed: {
    results: PodcastResult[];
  };
};

export type PodcastsParams = {
  feed: 'top' | 'top-subscriber';
};
