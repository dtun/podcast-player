import { http, HttpResponse } from 'msw';

import { podcastResults } from '../builders/podcastResult';

export const handlers = [
  http.get(
    'https://rss.applemarketingtools.com/api/v2/us/podcasts/:feed/50/podcasts.json',
    () => HttpResponse.json({ feed: { results: podcastResults[50] } })
  ),
];
