import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { followingAtom } from '../state/following';

function useFollowing() {
  const [following, setFollowing] = useAtom(followingAtom);
  const toggleFollowing = useCallback(
    (id: string) => {
      const update = following.includes(id)
        ? [...following.filter((item) => item !== id)]
        : [...following, id];

      setFollowing([...update]);
    },
    [following, setFollowing]
  );

  return { following, toggleFollowing };
}

export { useFollowing };
