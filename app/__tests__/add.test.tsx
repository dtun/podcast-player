import * as React from 'react';
import { http, HttpResponse } from 'msw';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { server } from '../../mocks/server';
import { podcastResultBuilder } from '../../builders/podcastResult';
import { client, render, screen, userEvent } from '../../test-utils';
import { baseUrl } from '../../constants/PodcastsApi';
import Add from '../add';
import { followingKey } from '../../state/following';

afterEach(() => {
  client.clear();
});

test('renders no podcasts', async () => {
  server.use(
    http.get(`${baseUrl}/podcasts/:feed/50/podcasts.json`, () =>
      HttpResponse.json({ feed: { results: [] } })
    )
  );

  render(<Add />);

  expect(await screen.findByText('No Podcasts')).toBeTruthy();
}, 10_000);

test('renders podcasts', async () => {
  const podcasts = [
    podcastResultBuilder(),
    podcastResultBuilder(),
    podcastResultBuilder(),
  ];

  server.use(
    http.get(`${baseUrl}/podcasts/:feed/50/podcasts.json`, () =>
      HttpResponse.json({ feed: { results: podcasts } })
    )
  );

  render(<Add />);

  for (const podcast of podcasts) {
    expect(await screen.findByText(podcast.name)).toBeTruthy();
  }
}, 10_000);

test('can follow and stop following podcasts', async () => {
  const podcasts = [podcastResultBuilder(), podcastResultBuilder()];

  server.use(
    http.get(`${baseUrl}/podcasts/:feed/50/podcasts.json`, () =>
      HttpResponse.json({ feed: { results: podcasts } })
    )
  );

  render(<Add />);

  expect(await screen.findAllByText('Follow')).toHaveLength(podcasts.length);

  (await screen.findAllByText('Follow')).forEach((button) => {
    userEvent.press(button);
  });

  expect(await screen.findAllByText('Following')).toHaveLength(podcasts.length);

  (await screen.findAllByText('Following')).forEach((button) => {
    userEvent.press(button);
  });

  expect(await screen.findAllByText('Follow')).toHaveLength(podcasts.length);
}, 10_000);

test('can use persisted following', async () => {
  const podcasts = [podcastResultBuilder(), podcastResultBuilder()];
  const [podcast1] = podcasts;

  jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce((key) => {
    if (key !== followingKey) return Promise.resolve(null);
    return Promise.resolve(JSON.stringify([podcast1.id]));
  });

  server.use(
    http.get(`${baseUrl}/podcasts/:feed/50/podcasts.json`, () =>
      HttpResponse.json({ feed: { results: podcasts } })
    )
  );

  render(<Add />);

  expect(await screen.findAllByText('Following')).toHaveLength(1);
  expect(await screen.findAllByText('Follow')).toHaveLength(1);
}, 10_000);
