// Constrain S so it can be used as a key in a Record
export function mapEnum<S extends string | number | symbol, D>(
  enumMap: Record<S, D>,
  value: S
): D {
  if (value in enumMap) return enumMap[value];
  throw new Error(`Enum value ${String(value)} not mapped`);
}

export function mapEnumOptional<S extends string | number | symbol, D>(
  enumMap: Record<S, D>,
  value?: S
): D | undefined {
  if (value === undefined) return undefined;
  return mapEnum(enumMap, value);
}
