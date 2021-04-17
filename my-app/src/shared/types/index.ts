export type WithStyle<T = {}> = T & {
  style?: any;
};

export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;
