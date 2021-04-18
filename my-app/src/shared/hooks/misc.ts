import { WithId, Dict } from "../../shared/types";
import { useMemo } from "react";
import keyBy from "lodash/keyBy";

export function useKeyBy<T>(toKey: T[] | undefined, getKey: (t: T) => string) {
  const keyed: Dict<T> | undefined = useMemo(
    () => toKey && keyBy(toKey, getKey),
    [JSON.stringify(toKey)]
  );

  return keyed;
}

export function useKeyById<T>(toKey?: WithId<T>[]) {
  return useKeyBy(toKey, (x) => x.id);
}
