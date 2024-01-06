import { atom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

const favoritesInitialValue: string[] = [];

const favoritesKey = 'favoritesKey';

const atomWithAsyncStorage = (
  key = favoritesKey,
  initialValue = favoritesInitialValue
) => {
  const baseAtom = atom(initialValue);

  baseAtom.onMount = (setValue) => {
    (async () => {
      const item = await AsyncStorage.getItem(key);

      setValue(item ? JSON.parse(item) : []);
    })();
  };

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;

      set(baseAtom, nextValue);

      AsyncStorage.setItem(key, JSON.stringify(nextValue));
    }
  );

  return derivedAtom;
};

const favoritesAtom = atomWithAsyncStorage();

export { favoritesAtom, favoritesKey };
