"use client";

import { RefObject, useCallback, useEffect } from "react";

/**
 * A custom hook that contains logic for close a modal if we click outside
 * @param {(param: T) => void} set - setter
 * @param {RefObject<HTMLDivElement>} ref - reference to div modal element
 */
export function useClickOutside<T>(
  set: (param: T) => void,
  ref: RefObject<HTMLDivElement>,
  value: T
): void {
  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        set(value);
      }
    },
    [ref, set, value]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}
