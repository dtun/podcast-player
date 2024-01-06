import { http, HttpResponse } from 'msw';

import { podcastResults } from '../builders/podcastResult';
import { baseUrl } from '../constants/PodcastsApi';

export const handlers = [
  http.get(`${baseUrl}/podcasts/:feed/50/podcasts.json`, () =>
    HttpResponse.json({ feed: { results: podcastResults[50] } })
  ),
];
