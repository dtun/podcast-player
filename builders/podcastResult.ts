import { build, perBuild, oneOf } from '@jackfranklin/test-data-bot';
import { faker } from '@faker-js/faker';

import { PodcastResult } from '../types';

export const podcastResultBuilder = build<PodcastResult>({
  fields: {
    artistName: perBuild(faker.person.fullName),
    artworkUrl100: perBuild(faker.internet.url),
    contentAdvisoryRating: oneOf('Explicit', 'Clean'),
    id: perBuild(() => faker.number.int().toString()),
    name: perBuild(() => faker.word.words(6)),
  },
});

export const podcastResults = {
  50: [...new Array(50)].map(podcastResultBuilder),
};
