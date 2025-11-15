/**
 * Generic enum mapper with fallback
 */
export function mapEnum<T extends string | number, U>(
  map: Record<T, U>,
  value: T | undefined,
  fallback: U
): U {
  if (value !== undefined && value in map) return map[value];
  console.warn(` Unmapped enum value: ${String(value)}`);
  return fallback;
}

/**
 * Optional enum mapper
 */
export function mapEnumOptional<S extends string | number, D>(
  enumMap: Record<S, D>,
  value?: S,
  fallback?: D
): D | undefined {
  if (value === undefined) return fallback;
  return mapEnum(enumMap, value, fallback!);
}
