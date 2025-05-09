export function MergeInputTypes(...types: any[]) {
  class MergedClass {}

  // Loop through all the provided types and copy their static properties (i.e., GraphQL decorators) into MergedClass
  for (const type of types) {
    Object.getOwnPropertyNames(type.prototype).forEach((prop) => {
      Object.defineProperty(
        MergedClass.prototype,
        prop,
        Object.getOwnPropertyDescriptor(type.prototype, prop)!
      );
    });
  }

  return MergedClass;
}
