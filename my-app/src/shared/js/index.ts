// Takes a function 'f' and returns a function that unwraps value from
// 'EventHandler', then passes that to f.
export const unwrapValueThen = (f: (v: any) => void) => ({
  target: { value },
}: {
  target: { value: any };
}) => f(value);
