import { useAtomValue } from 'jotai';

import { followingAtom } from '../state/following';

function Preloader() {
  useAtomValue(followingAtom); // Trigger the "onMount" function that will load the data from the store

  return null;
}

export { Preloader };
