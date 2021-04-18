export type WithStyle<T = {}> = T & {
  style?: any;
};

export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type WithId<TObj = {}, TId = string> = TObj & { id: TId };

export type Dict<V> = Record<string, V>;
