import { useAtomValue } from 'jotai';

import { favoritesAtom } from '../state/favorites';

function Preloader() {
  useAtomValue(favoritesAtom); // Trigger the "onMount" function that will load the data from the store

  return null;
}

export { Preloader };
