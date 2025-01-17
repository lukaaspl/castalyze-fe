import { useCallback, useState } from "react";

export const getStorageItem = <TItem>(
  key: string,
  storage: Storage = localStorage
): TItem | undefined => {
  const rawItem = storage.getItem(key);

  if (!rawItem) {
    return undefined;
  }

  try {
    return JSON.parse(rawItem) as TItem;
  } catch {
    return undefined;
  }
};

export const getStorageItemWithFallback = <TItem>(
  key: string,
  fallback: TItem,
  storage: Storage = localStorage
): TItem => getStorageItem<TItem>(key, storage) ?? fallback;

export const saveItemToStorage = <TItem>(
  key: string,
  item: TItem,
  storage: Storage = localStorage
) => {
  try {
    storage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.warn(`Failed to save item to storage: ${error}`);
  }
};

const produceUseStorage =
  (storageGetter: () => Storage) =>
  <TValue>(key: string, initialValue: TValue) => {
    const storage = storageGetter();

    const [storedValue, setStoredValue] = useState(() =>
      getStorageItemWithFallback(key, initialValue, storage)
    );

    const setValue = useCallback(
      (value: TValue | ((previousValue: TValue) => TValue)) => {
        setStoredValue((previousStoredValue) => {
          const resolvedValue =
            value instanceof Function ? value(previousStoredValue) : value;

          saveItemToStorage(key, resolvedValue, storage);

          return resolvedValue;
        });
      },
      [key, storage]
    );

    return [storedValue, setValue] as const;
  };

export const useLocalStorage = produceUseStorage(() => localStorage);
export const useSessionStorage = produceUseStorage(() => sessionStorage);
