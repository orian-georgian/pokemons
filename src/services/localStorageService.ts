export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  try {
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error parsing JSON from localStorage key "${key}":`, error);
    return null;
  }
};

export const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(
      `Error stringifying JSON to localStorage key "${key}":`,
      error
    );
  }
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const clear = (): void => {
  localStorage.clear();
};

export const hasItem = (key: string): boolean => {
  return localStorage.getItem(key) !== null;
};
