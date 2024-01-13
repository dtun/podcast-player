import { useQuery } from '@tanstack/react-query';

import { baseUrl } from '../constants/PodcastsApi';
import type { PodcastsParams, PodcastsResult } from '../types';

export function usePodcasts(params: PodcastsParams = { feed: 'top' }) {
  return useQuery<PodcastsResult>({
    queryKey: ['podcasts', params],
    queryFn: async () => {
      const res = await fetch(
        `${baseUrl}/podcasts/${params.feed}/50/podcasts.json`
      );

      return await res.json();
    },
  });
}
