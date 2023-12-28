export const guard = {
  notNull<T>(value: T, name: string): T {
    if (value == null) throw new Error(`${name} should not be null`);

    return value;
  },
};
