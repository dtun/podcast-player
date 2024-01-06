import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { favoritesAtom } from '../state/favorites';

function useFavorites() {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const toggleFavorite = useCallback(
    (id: string) => {
      const update = favorites.includes(id)
        ? [...favorites.filter((item) => item !== id)]
        : [...favorites, id];

      setFavorites([...update]);
    },
    [favorites, setFavorites]
  );

  return { favorites, toggleFavorite };
}

export { useFavorites };
