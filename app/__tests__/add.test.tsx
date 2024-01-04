import * as React from 'react';
import { http, HttpResponse } from 'msw';

import Add from '../add';
import { server } from '../../mocks/server';
import { podcastResultBuilder } from '../../builders/podcastResult';
import { render, screen } from '../../test-utils';

test('renders no podcasts', async () => {
  server.use(
    http.get(
      'https://rss.applemarketingtools.com/api/v2/us/podcasts/:feed/50/podcasts.json',
      () => HttpResponse.json({ feed: { results: [] } })
    )
  );

  render(<Add />);

  expect(await screen.findByText('No Podcasts')).toBeTruthy();
}, 10_000);

test('renders podcasts', async () => {
  const [podcast1, podcast2] = [podcastResultBuilder(), podcastResultBuilder()];

  server.use(
    http.get(
      'https://rss.applemarketingtools.com/api/v2/us/podcasts/:feed/50/podcasts.json',
      () => HttpResponse.json({ feed: { results: [podcast1, podcast2] } })
    )
  );

  render(<Add />);

  for (const podcast of [podcast1, podcast2]) {
    expect(await screen.findByText(podcast.name)).toBeTruthy();
  }
}, 10_000);
