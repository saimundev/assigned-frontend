import { useCallback } from "react";

export function useLocalStorage() {
  const setItem = useCallback((key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }, []);

  const getItem = useCallback(<T = unknown>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error("Error getting localStorage item:", error);
      return null;
    }
  }, []);

  const removeItem = useCallback((key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage item:", error);
    }
  }, []);

  return { setItem, getItem, removeItem };
}
