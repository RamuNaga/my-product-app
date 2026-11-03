
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemCodeSequence
 * 
 */
export type ItemCodeSequence = $Result.DefaultSelection<Prisma.$ItemCodeSequencePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model RecipeRevision
 * 
 */
export type RecipeRevision = $Result.DefaultSelection<Prisma.$RecipeRevisionPayload>
/**
 * Model RecipeLine
 * 
 */
export type RecipeLine = $Result.DefaultSelection<Prisma.$RecipeLinePayload>
/**
 * Model ProductRecipeAssignment
 * 
 */
export type ProductRecipeAssignment = $Result.DefaultSelection<Prisma.$ProductRecipeAssignmentPayload>
/**
 * Model ProductPackagingLine
 * 
 */
export type ProductPackagingLine = $Result.DefaultSelection<Prisma.$ProductPackagingLinePayload>
/**
 * Model Tray
 * 
 */
export type Tray = $Result.DefaultSelection<Prisma.$TrayPayload>
/**
 * Model Garnish
 * 
 */
export type Garnish = $Result.DefaultSelection<Prisma.$GarnishPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model NutritionalInfo
 * 
 */
export type NutritionalInfo = $Result.DefaultSelection<Prisma.$NutritionalInfoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnitOfMeasure: {
  G: 'G',
  KG: 'KG',
  ML: 'ML',
  L: 'L',
  EACH: 'EACH'
};

export type UnitOfMeasure = (typeof UnitOfMeasure)[keyof typeof UnitOfMeasure]


export const ItemKind: {
  RAW_MATERIAL: 'RAW_MATERIAL',
  PURCHASED_PREPARED: 'PURCHASED_PREPARED',
  MANUFACTURED_COMPONENT: 'MANUFACTURED_COMPONENT',
  SAUCE: 'SAUCE',
  GARNISH: 'GARNISH',
  PACKAGING: 'PACKAGING',
  OTHER: 'OTHER'
};

export type ItemKind = (typeof ItemKind)[keyof typeof ItemKind]


export const SupplyType: {
  PURCHASED: 'PURCHASED',
  MANUFACTURED: 'MANUFACTURED',
  BOTH: 'BOTH'
};

export type SupplyType = (typeof SupplyType)[keyof typeof SupplyType]


export const ProcessType: {
  NONE: 'NONE',
  OVEN: 'OVEN',
  STEAM: 'STEAM',
  SAUCE_PREPARATION: 'SAUCE_PREPARATION',
  MIXING: 'MIXING',
  OTHER: 'OTHER'
};

export type ProcessType = (typeof ProcessType)[keyof typeof ProcessType]


export const RecipeStatus: {
  DRAFT: 'DRAFT',
  APPROVED: 'APPROVED',
  RETIRED: 'RETIRED'
};

export type RecipeStatus = (typeof RecipeStatus)[keyof typeof RecipeStatus]


export const RecipePurpose: {
  FINISHED_FOOD: 'FINISHED_FOOD',
  INTERMEDIATE: 'INTERMEDIATE'
};

export type RecipePurpose = (typeof RecipePurpose)[keyof typeof RecipePurpose]

}

export type UnitOfMeasure = $Enums.UnitOfMeasure

export const UnitOfMeasure: typeof $Enums.UnitOfMeasure

export type ItemKind = $Enums.ItemKind

export const ItemKind: typeof $Enums.ItemKind

export type SupplyType = $Enums.SupplyType

export const SupplyType: typeof $Enums.SupplyType

export type ProcessType = $Enums.ProcessType

export const ProcessType: typeof $Enums.ProcessType

export type RecipeStatus = $Enums.RecipeStatus

export const RecipeStatus: typeof $Enums.RecipeStatus

export type RecipePurpose = $Enums.RecipePurpose

export const RecipePurpose: typeof $Enums.RecipePurpose

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemCodeSequence`: Exposes CRUD operations for the **ItemCodeSequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCodeSequences
    * const itemCodeSequences = await prisma.itemCodeSequence.findMany()
    * ```
    */
  get itemCodeSequence(): Prisma.ItemCodeSequenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeRevision`: Exposes CRUD operations for the **RecipeRevision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeRevisions
    * const recipeRevisions = await prisma.recipeRevision.findMany()
    * ```
    */
  get recipeRevision(): Prisma.RecipeRevisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeLine`: Exposes CRUD operations for the **RecipeLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeLines
    * const recipeLines = await prisma.recipeLine.findMany()
    * ```
    */
  get recipeLine(): Prisma.RecipeLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productRecipeAssignment`: Exposes CRUD operations for the **ProductRecipeAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRecipeAssignments
    * const productRecipeAssignments = await prisma.productRecipeAssignment.findMany()
    * ```
    */
  get productRecipeAssignment(): Prisma.ProductRecipeAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPackagingLine`: Exposes CRUD operations for the **ProductPackagingLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPackagingLines
    * const productPackagingLines = await prisma.productPackagingLine.findMany()
    * ```
    */
  get productPackagingLine(): Prisma.ProductPackagingLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tray`: Exposes CRUD operations for the **Tray** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trays
    * const trays = await prisma.tray.findMany()
    * ```
    */
  get tray(): Prisma.TrayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.garnish`: Exposes CRUD operations for the **Garnish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Garnishes
    * const garnishes = await prisma.garnish.findMany()
    * ```
    */
  get garnish(): Prisma.GarnishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutritionalInfo`: Exposes CRUD operations for the **NutritionalInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NutritionalInfos
    * const nutritionalInfos = await prisma.nutritionalInfo.findMany()
    * ```
    */
  get nutritionalInfo(): Prisma.NutritionalInfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    ItemCodeSequence: 'ItemCodeSequence',
    Product: 'Product',
    Recipe: 'Recipe',
    RecipeRevision: 'RecipeRevision',
    RecipeLine: 'RecipeLine',
    ProductRecipeAssignment: 'ProductRecipeAssignment',
    ProductPackagingLine: 'ProductPackagingLine',
    Tray: 'Tray',
    Garnish: 'Garnish',
    Unit: 'Unit',
    NutritionalInfo: 'NutritionalInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "item" | "itemCodeSequence" | "product" | "recipe" | "recipeRevision" | "recipeLine" | "productRecipeAssignment" | "productPackagingLine" | "tray" | "garnish" | "unit" | "nutritionalInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemCodeSequence: {
        payload: Prisma.$ItemCodeSequencePayload<ExtArgs>
        fields: Prisma.ItemCodeSequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCodeSequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCodeSequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          findFirst: {
            args: Prisma.ItemCodeSequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCodeSequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          findMany: {
            args: Prisma.ItemCodeSequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>[]
          }
          create: {
            args: Prisma.ItemCodeSequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          createMany: {
            args: Prisma.ItemCodeSequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCodeSequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>[]
          }
          delete: {
            args: Prisma.ItemCodeSequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          update: {
            args: Prisma.ItemCodeSequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          deleteMany: {
            args: Prisma.ItemCodeSequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCodeSequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemCodeSequenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>[]
          }
          upsert: {
            args: Prisma.ItemCodeSequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCodeSequencePayload>
          }
          aggregate: {
            args: Prisma.ItemCodeSequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCodeSequence>
          }
          groupBy: {
            args: Prisma.ItemCodeSequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCodeSequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCodeSequenceCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCodeSequenceCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      RecipeRevision: {
        payload: Prisma.$RecipeRevisionPayload<ExtArgs>
        fields: Prisma.RecipeRevisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeRevisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeRevisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          findFirst: {
            args: Prisma.RecipeRevisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeRevisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          findMany: {
            args: Prisma.RecipeRevisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>[]
          }
          create: {
            args: Prisma.RecipeRevisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          createMany: {
            args: Prisma.RecipeRevisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeRevisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>[]
          }
          delete: {
            args: Prisma.RecipeRevisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          update: {
            args: Prisma.RecipeRevisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          deleteMany: {
            args: Prisma.RecipeRevisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeRevisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeRevisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>[]
          }
          upsert: {
            args: Prisma.RecipeRevisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeRevisionPayload>
          }
          aggregate: {
            args: Prisma.RecipeRevisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeRevision>
          }
          groupBy: {
            args: Prisma.RecipeRevisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeRevisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeRevisionCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeRevisionCountAggregateOutputType> | number
          }
        }
      }
      RecipeLine: {
        payload: Prisma.$RecipeLinePayload<ExtArgs>
        fields: Prisma.RecipeLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          findFirst: {
            args: Prisma.RecipeLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          findMany: {
            args: Prisma.RecipeLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>[]
          }
          create: {
            args: Prisma.RecipeLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          createMany: {
            args: Prisma.RecipeLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>[]
          }
          delete: {
            args: Prisma.RecipeLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          update: {
            args: Prisma.RecipeLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          deleteMany: {
            args: Prisma.RecipeLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>[]
          }
          upsert: {
            args: Prisma.RecipeLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeLinePayload>
          }
          aggregate: {
            args: Prisma.RecipeLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeLine>
          }
          groupBy: {
            args: Prisma.RecipeLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeLineCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeLineCountAggregateOutputType> | number
          }
        }
      }
      ProductRecipeAssignment: {
        payload: Prisma.$ProductRecipeAssignmentPayload<ExtArgs>
        fields: Prisma.ProductRecipeAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRecipeAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRecipeAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ProductRecipeAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRecipeAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          findMany: {
            args: Prisma.ProductRecipeAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>[]
          }
          create: {
            args: Prisma.ProductRecipeAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          createMany: {
            args: Prisma.ProductRecipeAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductRecipeAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ProductRecipeAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          update: {
            args: Prisma.ProductRecipeAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ProductRecipeAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRecipeAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductRecipeAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ProductRecipeAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRecipeAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ProductRecipeAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductRecipeAssignment>
          }
          groupBy: {
            args: Prisma.ProductRecipeAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductRecipeAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRecipeAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ProductRecipeAssignmentCountAggregateOutputType> | number
          }
        }
      }
      ProductPackagingLine: {
        payload: Prisma.$ProductPackagingLinePayload<ExtArgs>
        fields: Prisma.ProductPackagingLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPackagingLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPackagingLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          findFirst: {
            args: Prisma.ProductPackagingLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPackagingLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          findMany: {
            args: Prisma.ProductPackagingLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>[]
          }
          create: {
            args: Prisma.ProductPackagingLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          createMany: {
            args: Prisma.ProductPackagingLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPackagingLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>[]
          }
          delete: {
            args: Prisma.ProductPackagingLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          update: {
            args: Prisma.ProductPackagingLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          deleteMany: {
            args: Prisma.ProductPackagingLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPackagingLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPackagingLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>[]
          }
          upsert: {
            args: Prisma.ProductPackagingLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPackagingLinePayload>
          }
          aggregate: {
            args: Prisma.ProductPackagingLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPackagingLine>
          }
          groupBy: {
            args: Prisma.ProductPackagingLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPackagingLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPackagingLineCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPackagingLineCountAggregateOutputType> | number
          }
        }
      }
      Tray: {
        payload: Prisma.$TrayPayload<ExtArgs>
        fields: Prisma.TrayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          findFirst: {
            args: Prisma.TrayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          findMany: {
            args: Prisma.TrayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>[]
          }
          create: {
            args: Prisma.TrayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          createMany: {
            args: Prisma.TrayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>[]
          }
          delete: {
            args: Prisma.TrayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          update: {
            args: Prisma.TrayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          deleteMany: {
            args: Prisma.TrayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>[]
          }
          upsert: {
            args: Prisma.TrayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrayPayload>
          }
          aggregate: {
            args: Prisma.TrayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTray>
          }
          groupBy: {
            args: Prisma.TrayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrayCountArgs<ExtArgs>
            result: $Utils.Optional<TrayCountAggregateOutputType> | number
          }
        }
      }
      Garnish: {
        payload: Prisma.$GarnishPayload<ExtArgs>
        fields: Prisma.GarnishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GarnishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GarnishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          findFirst: {
            args: Prisma.GarnishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GarnishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          findMany: {
            args: Prisma.GarnishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>[]
          }
          create: {
            args: Prisma.GarnishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          createMany: {
            args: Prisma.GarnishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GarnishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>[]
          }
          delete: {
            args: Prisma.GarnishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          update: {
            args: Prisma.GarnishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          deleteMany: {
            args: Prisma.GarnishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GarnishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GarnishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>[]
          }
          upsert: {
            args: Prisma.GarnishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarnishPayload>
          }
          aggregate: {
            args: Prisma.GarnishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarnish>
          }
          groupBy: {
            args: Prisma.GarnishGroupByArgs<ExtArgs>
            result: $Utils.Optional<GarnishGroupByOutputType>[]
          }
          count: {
            args: Prisma.GarnishCountArgs<ExtArgs>
            result: $Utils.Optional<GarnishCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      NutritionalInfo: {
        payload: Prisma.$NutritionalInfoPayload<ExtArgs>
        fields: Prisma.NutritionalInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionalInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionalInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          findFirst: {
            args: Prisma.NutritionalInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionalInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          findMany: {
            args: Prisma.NutritionalInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>[]
          }
          create: {
            args: Prisma.NutritionalInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          createMany: {
            args: Prisma.NutritionalInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionalInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>[]
          }
          delete: {
            args: Prisma.NutritionalInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          update: {
            args: Prisma.NutritionalInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          deleteMany: {
            args: Prisma.NutritionalInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionalInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionalInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>[]
          }
          upsert: {
            args: Prisma.NutritionalInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalInfoPayload>
          }
          aggregate: {
            args: Prisma.NutritionalInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutritionalInfo>
          }
          groupBy: {
            args: Prisma.NutritionalInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionalInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionalInfoCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionalInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    item?: ItemOmit
    itemCodeSequence?: ItemCodeSequenceOmit
    product?: ProductOmit
    recipe?: RecipeOmit
    recipeRevision?: RecipeRevisionOmit
    recipeLine?: RecipeLineOmit
    productRecipeAssignment?: ProductRecipeAssignmentOmit
    productPackagingLine?: ProductPackagingLineOmit
    tray?: TrayOmit
    garnish?: GarnishOmit
    unit?: UnitOmit
    nutritionalInfo?: NutritionalInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    componentLines: number
    outputRevisions: number
    packagingLines: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    componentLines?: boolean | ItemCountOutputTypeCountComponentLinesArgs
    outputRevisions?: boolean | ItemCountOutputTypeCountOutputRevisionsArgs
    packagingLines?: boolean | ItemCountOutputTypeCountPackagingLinesArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountComponentLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeLineWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOutputRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeRevisionWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPackagingLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPackagingLineWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    recipeAssignments: number
    packagingLines: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeAssignments?: boolean | ProductCountOutputTypeCountRecipeAssignmentsArgs
    packagingLines?: boolean | ProductCountOutputTypeCountPackagingLinesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecipeAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecipeAssignmentWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPackagingLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPackagingLineWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    revisions: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisions?: boolean | RecipeCountOutputTypeCountRevisionsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeRevisionWhereInput
  }


  /**
   * Count Type RecipeRevisionCountOutputType
   */

  export type RecipeRevisionCountOutputType = {
    lines: number
    productAssignments: number
  }

  export type RecipeRevisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | RecipeRevisionCountOutputTypeCountLinesArgs
    productAssignments?: boolean | RecipeRevisionCountOutputTypeCountProductAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * RecipeRevisionCountOutputType without action
   */
  export type RecipeRevisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevisionCountOutputType
     */
    select?: RecipeRevisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeRevisionCountOutputType without action
   */
  export type RecipeRevisionCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeLineWhereInput
  }

  /**
   * RecipeRevisionCountOutputType without action
   */
  export type RecipeRevisionCountOutputTypeCountProductAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecipeAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    defaultSupplierId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    defaultSupplierId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    kind: $Enums.ItemKind | null
    supplyType: $Enums.SupplyType | null
    processType: $Enums.ProcessType | null
    baseUnit: $Enums.UnitOfMeasure | null
    allergenDeclaration: string | null
    origin: string | null
    manufacturer: string | null
    defaultSupplierId: number | null
    packSizeDescription: string | null
    netContentDescription: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    kind: $Enums.ItemKind | null
    supplyType: $Enums.SupplyType | null
    processType: $Enums.ProcessType | null
    baseUnit: $Enums.UnitOfMeasure | null
    allergenDeclaration: string | null
    origin: string | null
    manufacturer: string | null
    defaultSupplierId: number | null
    packSizeDescription: string | null
    netContentDescription: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    kind: number
    supplyType: number
    processType: number
    baseUnit: number
    allergenDeclaration: number
    origin: number
    manufacturer: number
    defaultSupplierId: number
    packSizeDescription: number
    netContentDescription: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    defaultSupplierId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    defaultSupplierId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    kind?: true
    supplyType?: true
    processType?: true
    baseUnit?: true
    allergenDeclaration?: true
    origin?: true
    manufacturer?: true
    defaultSupplierId?: true
    packSizeDescription?: true
    netContentDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    kind?: true
    supplyType?: true
    processType?: true
    baseUnit?: true
    allergenDeclaration?: true
    origin?: true
    manufacturer?: true
    defaultSupplierId?: true
    packSizeDescription?: true
    netContentDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    kind?: true
    supplyType?: true
    processType?: true
    baseUnit?: true
    allergenDeclaration?: true
    origin?: true
    manufacturer?: true
    defaultSupplierId?: true
    packSizeDescription?: true
    netContentDescription?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    code: string
    name: string
    description: string | null
    kind: $Enums.ItemKind
    supplyType: $Enums.SupplyType
    processType: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration: string | null
    origin: string | null
    manufacturer: string | null
    defaultSupplierId: number | null
    packSizeDescription: string | null
    netContentDescription: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    kind?: boolean
    supplyType?: boolean
    processType?: boolean
    baseUnit?: boolean
    allergenDeclaration?: boolean
    origin?: boolean
    manufacturer?: boolean
    defaultSupplierId?: boolean
    packSizeDescription?: boolean
    netContentDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    componentLines?: boolean | Item$componentLinesArgs<ExtArgs>
    outputRevisions?: boolean | Item$outputRevisionsArgs<ExtArgs>
    packagingLines?: boolean | Item$packagingLinesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    kind?: boolean
    supplyType?: boolean
    processType?: boolean
    baseUnit?: boolean
    allergenDeclaration?: boolean
    origin?: boolean
    manufacturer?: boolean
    defaultSupplierId?: boolean
    packSizeDescription?: boolean
    netContentDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    kind?: boolean
    supplyType?: boolean
    processType?: boolean
    baseUnit?: boolean
    allergenDeclaration?: boolean
    origin?: boolean
    manufacturer?: boolean
    defaultSupplierId?: boolean
    packSizeDescription?: boolean
    netContentDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    kind?: boolean
    supplyType?: boolean
    processType?: boolean
    baseUnit?: boolean
    allergenDeclaration?: boolean
    origin?: boolean
    manufacturer?: boolean
    defaultSupplierId?: boolean
    packSizeDescription?: boolean
    netContentDescription?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "kind" | "supplyType" | "processType" | "baseUnit" | "allergenDeclaration" | "origin" | "manufacturer" | "defaultSupplierId" | "packSizeDescription" | "netContentDescription" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    componentLines?: boolean | Item$componentLinesArgs<ExtArgs>
    outputRevisions?: boolean | Item$outputRevisionsArgs<ExtArgs>
    packagingLines?: boolean | Item$packagingLinesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      componentLines: Prisma.$RecipeLinePayload<ExtArgs>[]
      outputRevisions: Prisma.$RecipeRevisionPayload<ExtArgs>[]
      packagingLines: Prisma.$ProductPackagingLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      description: string | null
      kind: $Enums.ItemKind
      supplyType: $Enums.SupplyType
      processType: $Enums.ProcessType
      baseUnit: $Enums.UnitOfMeasure
      allergenDeclaration: string | null
      origin: string | null
      manufacturer: string | null
      defaultSupplierId: number | null
      packSizeDescription: string | null
      netContentDescription: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    componentLines<T extends Item$componentLinesArgs<ExtArgs> = {}>(args?: Subset<T, Item$componentLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outputRevisions<T extends Item$outputRevisionsArgs<ExtArgs> = {}>(args?: Subset<T, Item$outputRevisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packagingLines<T extends Item$packagingLinesArgs<ExtArgs> = {}>(args?: Subset<T, Item$packagingLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly code: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly kind: FieldRef<"Item", 'ItemKind'>
    readonly supplyType: FieldRef<"Item", 'SupplyType'>
    readonly processType: FieldRef<"Item", 'ProcessType'>
    readonly baseUnit: FieldRef<"Item", 'UnitOfMeasure'>
    readonly allergenDeclaration: FieldRef<"Item", 'String'>
    readonly origin: FieldRef<"Item", 'String'>
    readonly manufacturer: FieldRef<"Item", 'String'>
    readonly defaultSupplierId: FieldRef<"Item", 'Int'>
    readonly packSizeDescription: FieldRef<"Item", 'String'>
    readonly netContentDescription: FieldRef<"Item", 'String'>
    readonly isActive: FieldRef<"Item", 'Boolean'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.componentLines
   */
  export type Item$componentLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    where?: RecipeLineWhereInput
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    cursor?: RecipeLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeLineScalarFieldEnum | RecipeLineScalarFieldEnum[]
  }

  /**
   * Item.outputRevisions
   */
  export type Item$outputRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    where?: RecipeRevisionWhereInput
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    cursor?: RecipeRevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeRevisionScalarFieldEnum | RecipeRevisionScalarFieldEnum[]
  }

  /**
   * Item.packagingLines
   */
  export type Item$packagingLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    where?: ProductPackagingLineWhereInput
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    cursor?: ProductPackagingLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPackagingLineScalarFieldEnum | ProductPackagingLineScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemCodeSequence
   */

  export type AggregateItemCodeSequence = {
    _count: ItemCodeSequenceCountAggregateOutputType | null
    _avg: ItemCodeSequenceAvgAggregateOutputType | null
    _sum: ItemCodeSequenceSumAggregateOutputType | null
    _min: ItemCodeSequenceMinAggregateOutputType | null
    _max: ItemCodeSequenceMaxAggregateOutputType | null
  }

  export type ItemCodeSequenceAvgAggregateOutputType = {
    nextNumber: number | null
  }

  export type ItemCodeSequenceSumAggregateOutputType = {
    nextNumber: number | null
  }

  export type ItemCodeSequenceMinAggregateOutputType = {
    prefix: string | null
    nextNumber: number | null
    updatedAt: Date | null
  }

  export type ItemCodeSequenceMaxAggregateOutputType = {
    prefix: string | null
    nextNumber: number | null
    updatedAt: Date | null
  }

  export type ItemCodeSequenceCountAggregateOutputType = {
    prefix: number
    nextNumber: number
    updatedAt: number
    _all: number
  }


  export type ItemCodeSequenceAvgAggregateInputType = {
    nextNumber?: true
  }

  export type ItemCodeSequenceSumAggregateInputType = {
    nextNumber?: true
  }

  export type ItemCodeSequenceMinAggregateInputType = {
    prefix?: true
    nextNumber?: true
    updatedAt?: true
  }

  export type ItemCodeSequenceMaxAggregateInputType = {
    prefix?: true
    nextNumber?: true
    updatedAt?: true
  }

  export type ItemCodeSequenceCountAggregateInputType = {
    prefix?: true
    nextNumber?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemCodeSequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCodeSequence to aggregate.
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCodeSequences to fetch.
     */
    orderBy?: ItemCodeSequenceOrderByWithRelationInput | ItemCodeSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCodeSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCodeSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCodeSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCodeSequences
    **/
    _count?: true | ItemCodeSequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemCodeSequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemCodeSequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCodeSequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCodeSequenceMaxAggregateInputType
  }

  export type GetItemCodeSequenceAggregateType<T extends ItemCodeSequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCodeSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCodeSequence[P]>
      : GetScalarType<T[P], AggregateItemCodeSequence[P]>
  }




  export type ItemCodeSequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCodeSequenceWhereInput
    orderBy?: ItemCodeSequenceOrderByWithAggregationInput | ItemCodeSequenceOrderByWithAggregationInput[]
    by: ItemCodeSequenceScalarFieldEnum[] | ItemCodeSequenceScalarFieldEnum
    having?: ItemCodeSequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCodeSequenceCountAggregateInputType | true
    _avg?: ItemCodeSequenceAvgAggregateInputType
    _sum?: ItemCodeSequenceSumAggregateInputType
    _min?: ItemCodeSequenceMinAggregateInputType
    _max?: ItemCodeSequenceMaxAggregateInputType
  }

  export type ItemCodeSequenceGroupByOutputType = {
    prefix: string
    nextNumber: number
    updatedAt: Date
    _count: ItemCodeSequenceCountAggregateOutputType | null
    _avg: ItemCodeSequenceAvgAggregateOutputType | null
    _sum: ItemCodeSequenceSumAggregateOutputType | null
    _min: ItemCodeSequenceMinAggregateOutputType | null
    _max: ItemCodeSequenceMaxAggregateOutputType | null
  }

  type GetItemCodeSequenceGroupByPayload<T extends ItemCodeSequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCodeSequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCodeSequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCodeSequenceGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCodeSequenceGroupByOutputType[P]>
        }
      >
    >


  export type ItemCodeSequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefix?: boolean
    nextNumber?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["itemCodeSequence"]>

  export type ItemCodeSequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefix?: boolean
    nextNumber?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["itemCodeSequence"]>

  export type ItemCodeSequenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefix?: boolean
    nextNumber?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["itemCodeSequence"]>

  export type ItemCodeSequenceSelectScalar = {
    prefix?: boolean
    nextNumber?: boolean
    updatedAt?: boolean
  }

  export type ItemCodeSequenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prefix" | "nextNumber" | "updatedAt", ExtArgs["result"]["itemCodeSequence"]>

  export type $ItemCodeSequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCodeSequence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      prefix: string
      nextNumber: number
      updatedAt: Date
    }, ExtArgs["result"]["itemCodeSequence"]>
    composites: {}
  }

  type ItemCodeSequenceGetPayload<S extends boolean | null | undefined | ItemCodeSequenceDefaultArgs> = $Result.GetResult<Prisma.$ItemCodeSequencePayload, S>

  type ItemCodeSequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemCodeSequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCodeSequenceCountAggregateInputType | true
    }

  export interface ItemCodeSequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCodeSequence'], meta: { name: 'ItemCodeSequence' } }
    /**
     * Find zero or one ItemCodeSequence that matches the filter.
     * @param {ItemCodeSequenceFindUniqueArgs} args - Arguments to find a ItemCodeSequence
     * @example
     * // Get one ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCodeSequenceFindUniqueArgs>(args: SelectSubset<T, ItemCodeSequenceFindUniqueArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemCodeSequence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemCodeSequenceFindUniqueOrThrowArgs} args - Arguments to find a ItemCodeSequence
     * @example
     * // Get one ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCodeSequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCodeSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCodeSequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceFindFirstArgs} args - Arguments to find a ItemCodeSequence
     * @example
     * // Get one ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCodeSequenceFindFirstArgs>(args?: SelectSubset<T, ItemCodeSequenceFindFirstArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCodeSequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceFindFirstOrThrowArgs} args - Arguments to find a ItemCodeSequence
     * @example
     * // Get one ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCodeSequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCodeSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemCodeSequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCodeSequences
     * const itemCodeSequences = await prisma.itemCodeSequence.findMany()
     * 
     * // Get first 10 ItemCodeSequences
     * const itemCodeSequences = await prisma.itemCodeSequence.findMany({ take: 10 })
     * 
     * // Only select the `prefix`
     * const itemCodeSequenceWithPrefixOnly = await prisma.itemCodeSequence.findMany({ select: { prefix: true } })
     * 
     */
    findMany<T extends ItemCodeSequenceFindManyArgs>(args?: SelectSubset<T, ItemCodeSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemCodeSequence.
     * @param {ItemCodeSequenceCreateArgs} args - Arguments to create a ItemCodeSequence.
     * @example
     * // Create one ItemCodeSequence
     * const ItemCodeSequence = await prisma.itemCodeSequence.create({
     *   data: {
     *     // ... data to create a ItemCodeSequence
     *   }
     * })
     * 
     */
    create<T extends ItemCodeSequenceCreateArgs>(args: SelectSubset<T, ItemCodeSequenceCreateArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemCodeSequences.
     * @param {ItemCodeSequenceCreateManyArgs} args - Arguments to create many ItemCodeSequences.
     * @example
     * // Create many ItemCodeSequences
     * const itemCodeSequence = await prisma.itemCodeSequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCodeSequenceCreateManyArgs>(args?: SelectSubset<T, ItemCodeSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemCodeSequences and returns the data saved in the database.
     * @param {ItemCodeSequenceCreateManyAndReturnArgs} args - Arguments to create many ItemCodeSequences.
     * @example
     * // Create many ItemCodeSequences
     * const itemCodeSequence = await prisma.itemCodeSequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemCodeSequences and only return the `prefix`
     * const itemCodeSequenceWithPrefixOnly = await prisma.itemCodeSequence.createManyAndReturn({
     *   select: { prefix: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCodeSequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCodeSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemCodeSequence.
     * @param {ItemCodeSequenceDeleteArgs} args - Arguments to delete one ItemCodeSequence.
     * @example
     * // Delete one ItemCodeSequence
     * const ItemCodeSequence = await prisma.itemCodeSequence.delete({
     *   where: {
     *     // ... filter to delete one ItemCodeSequence
     *   }
     * })
     * 
     */
    delete<T extends ItemCodeSequenceDeleteArgs>(args: SelectSubset<T, ItemCodeSequenceDeleteArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemCodeSequence.
     * @param {ItemCodeSequenceUpdateArgs} args - Arguments to update one ItemCodeSequence.
     * @example
     * // Update one ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCodeSequenceUpdateArgs>(args: SelectSubset<T, ItemCodeSequenceUpdateArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemCodeSequences.
     * @param {ItemCodeSequenceDeleteManyArgs} args - Arguments to filter ItemCodeSequences to delete.
     * @example
     * // Delete a few ItemCodeSequences
     * const { count } = await prisma.itemCodeSequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCodeSequenceDeleteManyArgs>(args?: SelectSubset<T, ItemCodeSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCodeSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCodeSequences
     * const itemCodeSequence = await prisma.itemCodeSequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCodeSequenceUpdateManyArgs>(args: SelectSubset<T, ItemCodeSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCodeSequences and returns the data updated in the database.
     * @param {ItemCodeSequenceUpdateManyAndReturnArgs} args - Arguments to update many ItemCodeSequences.
     * @example
     * // Update many ItemCodeSequences
     * const itemCodeSequence = await prisma.itemCodeSequence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemCodeSequences and only return the `prefix`
     * const itemCodeSequenceWithPrefixOnly = await prisma.itemCodeSequence.updateManyAndReturn({
     *   select: { prefix: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemCodeSequenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemCodeSequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemCodeSequence.
     * @param {ItemCodeSequenceUpsertArgs} args - Arguments to update or create a ItemCodeSequence.
     * @example
     * // Update or create a ItemCodeSequence
     * const itemCodeSequence = await prisma.itemCodeSequence.upsert({
     *   create: {
     *     // ... data to create a ItemCodeSequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCodeSequence we want to update
     *   }
     * })
     */
    upsert<T extends ItemCodeSequenceUpsertArgs>(args: SelectSubset<T, ItemCodeSequenceUpsertArgs<ExtArgs>>): Prisma__ItemCodeSequenceClient<$Result.GetResult<Prisma.$ItemCodeSequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemCodeSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceCountArgs} args - Arguments to filter ItemCodeSequences to count.
     * @example
     * // Count the number of ItemCodeSequences
     * const count = await prisma.itemCodeSequence.count({
     *   where: {
     *     // ... the filter for the ItemCodeSequences we want to count
     *   }
     * })
    **/
    count<T extends ItemCodeSequenceCountArgs>(
      args?: Subset<T, ItemCodeSequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCodeSequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCodeSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCodeSequenceAggregateArgs>(args: Subset<T, ItemCodeSequenceAggregateArgs>): Prisma.PrismaPromise<GetItemCodeSequenceAggregateType<T>>

    /**
     * Group by ItemCodeSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCodeSequenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCodeSequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCodeSequenceGroupByArgs['orderBy'] }
        : { orderBy?: ItemCodeSequenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCodeSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCodeSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCodeSequence model
   */
  readonly fields: ItemCodeSequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCodeSequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCodeSequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCodeSequence model
   */
  interface ItemCodeSequenceFieldRefs {
    readonly prefix: FieldRef<"ItemCodeSequence", 'String'>
    readonly nextNumber: FieldRef<"ItemCodeSequence", 'Int'>
    readonly updatedAt: FieldRef<"ItemCodeSequence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemCodeSequence findUnique
   */
  export type ItemCodeSequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter, which ItemCodeSequence to fetch.
     */
    where: ItemCodeSequenceWhereUniqueInput
  }

  /**
   * ItemCodeSequence findUniqueOrThrow
   */
  export type ItemCodeSequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter, which ItemCodeSequence to fetch.
     */
    where: ItemCodeSequenceWhereUniqueInput
  }

  /**
   * ItemCodeSequence findFirst
   */
  export type ItemCodeSequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter, which ItemCodeSequence to fetch.
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCodeSequences to fetch.
     */
    orderBy?: ItemCodeSequenceOrderByWithRelationInput | ItemCodeSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCodeSequences.
     */
    cursor?: ItemCodeSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCodeSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCodeSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCodeSequences.
     */
    distinct?: ItemCodeSequenceScalarFieldEnum | ItemCodeSequenceScalarFieldEnum[]
  }

  /**
   * ItemCodeSequence findFirstOrThrow
   */
  export type ItemCodeSequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter, which ItemCodeSequence to fetch.
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCodeSequences to fetch.
     */
    orderBy?: ItemCodeSequenceOrderByWithRelationInput | ItemCodeSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCodeSequences.
     */
    cursor?: ItemCodeSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCodeSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCodeSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCodeSequences.
     */
    distinct?: ItemCodeSequenceScalarFieldEnum | ItemCodeSequenceScalarFieldEnum[]
  }

  /**
   * ItemCodeSequence findMany
   */
  export type ItemCodeSequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter, which ItemCodeSequences to fetch.
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCodeSequences to fetch.
     */
    orderBy?: ItemCodeSequenceOrderByWithRelationInput | ItemCodeSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCodeSequences.
     */
    cursor?: ItemCodeSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCodeSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCodeSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCodeSequences.
     */
    distinct?: ItemCodeSequenceScalarFieldEnum | ItemCodeSequenceScalarFieldEnum[]
  }

  /**
   * ItemCodeSequence create
   */
  export type ItemCodeSequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * The data needed to create a ItemCodeSequence.
     */
    data: XOR<ItemCodeSequenceCreateInput, ItemCodeSequenceUncheckedCreateInput>
  }

  /**
   * ItemCodeSequence createMany
   */
  export type ItemCodeSequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCodeSequences.
     */
    data: ItemCodeSequenceCreateManyInput | ItemCodeSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCodeSequence createManyAndReturn
   */
  export type ItemCodeSequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * The data used to create many ItemCodeSequences.
     */
    data: ItemCodeSequenceCreateManyInput | ItemCodeSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCodeSequence update
   */
  export type ItemCodeSequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * The data needed to update a ItemCodeSequence.
     */
    data: XOR<ItemCodeSequenceUpdateInput, ItemCodeSequenceUncheckedUpdateInput>
    /**
     * Choose, which ItemCodeSequence to update.
     */
    where: ItemCodeSequenceWhereUniqueInput
  }

  /**
   * ItemCodeSequence updateMany
   */
  export type ItemCodeSequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCodeSequences.
     */
    data: XOR<ItemCodeSequenceUpdateManyMutationInput, ItemCodeSequenceUncheckedUpdateManyInput>
    /**
     * Filter which ItemCodeSequences to update
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * Limit how many ItemCodeSequences to update.
     */
    limit?: number
  }

  /**
   * ItemCodeSequence updateManyAndReturn
   */
  export type ItemCodeSequenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * The data used to update ItemCodeSequences.
     */
    data: XOR<ItemCodeSequenceUpdateManyMutationInput, ItemCodeSequenceUncheckedUpdateManyInput>
    /**
     * Filter which ItemCodeSequences to update
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * Limit how many ItemCodeSequences to update.
     */
    limit?: number
  }

  /**
   * ItemCodeSequence upsert
   */
  export type ItemCodeSequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * The filter to search for the ItemCodeSequence to update in case it exists.
     */
    where: ItemCodeSequenceWhereUniqueInput
    /**
     * In case the ItemCodeSequence found by the `where` argument doesn't exist, create a new ItemCodeSequence with this data.
     */
    create: XOR<ItemCodeSequenceCreateInput, ItemCodeSequenceUncheckedCreateInput>
    /**
     * In case the ItemCodeSequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCodeSequenceUpdateInput, ItemCodeSequenceUncheckedUpdateInput>
  }

  /**
   * ItemCodeSequence delete
   */
  export type ItemCodeSequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
    /**
     * Filter which ItemCodeSequence to delete.
     */
    where: ItemCodeSequenceWhereUniqueInput
  }

  /**
   * ItemCodeSequence deleteMany
   */
  export type ItemCodeSequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCodeSequences to delete
     */
    where?: ItemCodeSequenceWhereInput
    /**
     * Limit how many ItemCodeSequences to delete.
     */
    limit?: number
  }

  /**
   * ItemCodeSequence without action
   */
  export type ItemCodeSequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCodeSequence
     */
    select?: ItemCodeSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCodeSequence
     */
    omit?: ItemCodeSequenceOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    netWeightG: Decimal | null
    price: number | null
    companyId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    netWeightG: Decimal | null
    price: number | null
    companyId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    productCode: string | null
    name: string | null
    description: string | null
    image: string | null
    productWeight: string | null
    netWeightG: Decimal | null
    price: number | null
    companyId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    productCode: string | null
    name: string | null
    description: string | null
    image: string | null
    productWeight: string | null
    netWeightG: Decimal | null
    price: number | null
    companyId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productCode: number
    name: number
    description: number
    image: number
    productWeight: number
    netWeightG: number
    price: number
    companyId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    netWeightG?: true
    price?: true
    companyId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    netWeightG?: true
    price?: true
    companyId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    description?: true
    image?: true
    productWeight?: true
    netWeightG?: true
    price?: true
    companyId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    description?: true
    image?: true
    productWeight?: true
    netWeightG?: true
    price?: true
    companyId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productCode?: true
    name?: true
    description?: true
    image?: true
    productWeight?: true
    netWeightG?: true
    price?: true
    companyId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    productCode: string
    name: string
    description: string
    image: string | null
    productWeight: string
    netWeightG: Decimal | null
    price: number
    companyId: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    productWeight?: boolean
    netWeightG?: boolean
    price?: boolean
    companyId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipeAssignments?: boolean | Product$recipeAssignmentsArgs<ExtArgs>
    packagingLines?: boolean | Product$packagingLinesArgs<ExtArgs>
    nutritionalInfo?: boolean | Product$nutritionalInfoArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    productWeight?: boolean
    netWeightG?: boolean
    price?: boolean
    companyId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    productWeight?: boolean
    netWeightG?: boolean
    price?: boolean
    companyId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    productWeight?: boolean
    netWeightG?: boolean
    price?: boolean
    companyId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCode" | "name" | "description" | "image" | "productWeight" | "netWeightG" | "price" | "companyId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeAssignments?: boolean | Product$recipeAssignmentsArgs<ExtArgs>
    packagingLines?: boolean | Product$packagingLinesArgs<ExtArgs>
    nutritionalInfo?: boolean | Product$nutritionalInfoArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      recipeAssignments: Prisma.$ProductRecipeAssignmentPayload<ExtArgs>[]
      packagingLines: Prisma.$ProductPackagingLinePayload<ExtArgs>[]
      nutritionalInfo: Prisma.$NutritionalInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productCode: string
      name: string
      description: string
      image: string | null
      productWeight: string
      netWeightG: Prisma.Decimal | null
      price: number
      companyId: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipeAssignments<T extends Product$recipeAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$recipeAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packagingLines<T extends Product$packagingLinesArgs<ExtArgs> = {}>(args?: Subset<T, Product$packagingLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nutritionalInfo<T extends Product$nutritionalInfoArgs<ExtArgs> = {}>(args?: Subset<T, Product$nutritionalInfoArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly productCode: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly productWeight: FieldRef<"Product", 'String'>
    readonly netWeightG: FieldRef<"Product", 'Decimal'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly companyId: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.recipeAssignments
   */
  export type Product$recipeAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    where?: ProductRecipeAssignmentWhereInput
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecipeAssignmentScalarFieldEnum | ProductRecipeAssignmentScalarFieldEnum[]
  }

  /**
   * Product.packagingLines
   */
  export type Product$packagingLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    where?: ProductPackagingLineWhereInput
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    cursor?: ProductPackagingLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPackagingLineScalarFieldEnum | ProductPackagingLineScalarFieldEnum[]
  }

  /**
   * Product.nutritionalInfo
   */
  export type Product$nutritionalInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    where?: NutritionalInfoWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    purpose: $Enums.RecipePurpose | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    purpose: $Enums.RecipePurpose | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    purpose: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    purpose?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    purpose?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    purpose?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    code: string
    name: string
    description: string | null
    purpose: $Enums.RecipePurpose
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    purpose?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revisions?: boolean | Recipe$revisionsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    purpose?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    purpose?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    purpose?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "purpose" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisions?: boolean | Recipe$revisionsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      revisions: Prisma.$RecipeRevisionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      description: string | null
      purpose: $Enums.RecipePurpose
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    revisions<T extends Recipe$revisionsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly code: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly purpose: FieldRef<"Recipe", 'RecipePurpose'>
    readonly isActive: FieldRef<"Recipe", 'Boolean'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.revisions
   */
  export type Recipe$revisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    where?: RecipeRevisionWhereInput
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    cursor?: RecipeRevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeRevisionScalarFieldEnum | RecipeRevisionScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model RecipeRevision
   */

  export type AggregateRecipeRevision = {
    _count: RecipeRevisionCountAggregateOutputType | null
    _avg: RecipeRevisionAvgAggregateOutputType | null
    _sum: RecipeRevisionSumAggregateOutputType | null
    _min: RecipeRevisionMinAggregateOutputType | null
    _max: RecipeRevisionMaxAggregateOutputType | null
  }

  export type RecipeRevisionAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
    revision: number | null
    referenceQuantity: Decimal | null
    outputItemId: number | null
    approvedById: number | null
  }

  export type RecipeRevisionSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
    revision: number | null
    referenceQuantity: Decimal | null
    outputItemId: number | null
    approvedById: number | null
  }

  export type RecipeRevisionMinAggregateOutputType = {
    id: number | null
    recipeId: number | null
    revision: number | null
    status: $Enums.RecipeStatus | null
    referenceQuantity: Decimal | null
    referenceUnit: $Enums.UnitOfMeasure | null
    outputItemId: number | null
    processType: $Enums.ProcessType | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    approvedAt: Date | null
    approvedById: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeRevisionMaxAggregateOutputType = {
    id: number | null
    recipeId: number | null
    revision: number | null
    status: $Enums.RecipeStatus | null
    referenceQuantity: Decimal | null
    referenceUnit: $Enums.UnitOfMeasure | null
    outputItemId: number | null
    processType: $Enums.ProcessType | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    approvedAt: Date | null
    approvedById: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeRevisionCountAggregateOutputType = {
    id: number
    recipeId: number
    revision: number
    status: number
    referenceQuantity: number
    referenceUnit: number
    outputItemId: number
    processType: number
    effectiveFrom: number
    effectiveTo: number
    approvedAt: number
    approvedById: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecipeRevisionAvgAggregateInputType = {
    id?: true
    recipeId?: true
    revision?: true
    referenceQuantity?: true
    outputItemId?: true
    approvedById?: true
  }

  export type RecipeRevisionSumAggregateInputType = {
    id?: true
    recipeId?: true
    revision?: true
    referenceQuantity?: true
    outputItemId?: true
    approvedById?: true
  }

  export type RecipeRevisionMinAggregateInputType = {
    id?: true
    recipeId?: true
    revision?: true
    status?: true
    referenceQuantity?: true
    referenceUnit?: true
    outputItemId?: true
    processType?: true
    effectiveFrom?: true
    effectiveTo?: true
    approvedAt?: true
    approvedById?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeRevisionMaxAggregateInputType = {
    id?: true
    recipeId?: true
    revision?: true
    status?: true
    referenceQuantity?: true
    referenceUnit?: true
    outputItemId?: true
    processType?: true
    effectiveFrom?: true
    effectiveTo?: true
    approvedAt?: true
    approvedById?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeRevisionCountAggregateInputType = {
    id?: true
    recipeId?: true
    revision?: true
    status?: true
    referenceQuantity?: true
    referenceUnit?: true
    outputItemId?: true
    processType?: true
    effectiveFrom?: true
    effectiveTo?: true
    approvedAt?: true
    approvedById?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecipeRevisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeRevision to aggregate.
     */
    where?: RecipeRevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeRevisions to fetch.
     */
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeRevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeRevisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeRevisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeRevisions
    **/
    _count?: true | RecipeRevisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeRevisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeRevisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeRevisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeRevisionMaxAggregateInputType
  }

  export type GetRecipeRevisionAggregateType<T extends RecipeRevisionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeRevision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeRevision[P]>
      : GetScalarType<T[P], AggregateRecipeRevision[P]>
  }




  export type RecipeRevisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeRevisionWhereInput
    orderBy?: RecipeRevisionOrderByWithAggregationInput | RecipeRevisionOrderByWithAggregationInput[]
    by: RecipeRevisionScalarFieldEnum[] | RecipeRevisionScalarFieldEnum
    having?: RecipeRevisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeRevisionCountAggregateInputType | true
    _avg?: RecipeRevisionAvgAggregateInputType
    _sum?: RecipeRevisionSumAggregateInputType
    _min?: RecipeRevisionMinAggregateInputType
    _max?: RecipeRevisionMaxAggregateInputType
  }

  export type RecipeRevisionGroupByOutputType = {
    id: number
    recipeId: number
    revision: number
    status: $Enums.RecipeStatus
    referenceQuantity: Decimal
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId: number | null
    processType: $Enums.ProcessType
    effectiveFrom: Date | null
    effectiveTo: Date | null
    approvedAt: Date | null
    approvedById: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecipeRevisionCountAggregateOutputType | null
    _avg: RecipeRevisionAvgAggregateOutputType | null
    _sum: RecipeRevisionSumAggregateOutputType | null
    _min: RecipeRevisionMinAggregateOutputType | null
    _max: RecipeRevisionMaxAggregateOutputType | null
  }

  type GetRecipeRevisionGroupByPayload<T extends RecipeRevisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeRevisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeRevisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeRevisionGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeRevisionGroupByOutputType[P]>
        }
      >
    >


  export type RecipeRevisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    revision?: boolean
    status?: boolean
    referenceQuantity?: boolean
    referenceUnit?: boolean
    outputItemId?: boolean
    processType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
    lines?: boolean | RecipeRevision$linesArgs<ExtArgs>
    productAssignments?: boolean | RecipeRevision$productAssignmentsArgs<ExtArgs>
    _count?: boolean | RecipeRevisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeRevision"]>

  export type RecipeRevisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    revision?: boolean
    status?: boolean
    referenceQuantity?: boolean
    referenceUnit?: boolean
    outputItemId?: boolean
    processType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
  }, ExtArgs["result"]["recipeRevision"]>

  export type RecipeRevisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    revision?: boolean
    status?: boolean
    referenceQuantity?: boolean
    referenceUnit?: boolean
    outputItemId?: boolean
    processType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
  }, ExtArgs["result"]["recipeRevision"]>

  export type RecipeRevisionSelectScalar = {
    id?: boolean
    recipeId?: boolean
    revision?: boolean
    status?: boolean
    referenceQuantity?: boolean
    referenceUnit?: boolean
    outputItemId?: boolean
    processType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecipeRevisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "revision" | "status" | "referenceQuantity" | "referenceUnit" | "outputItemId" | "processType" | "effectiveFrom" | "effectiveTo" | "approvedAt" | "approvedById" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["recipeRevision"]>
  export type RecipeRevisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
    lines?: boolean | RecipeRevision$linesArgs<ExtArgs>
    productAssignments?: boolean | RecipeRevision$productAssignmentsArgs<ExtArgs>
    _count?: boolean | RecipeRevisionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeRevisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
  }
  export type RecipeRevisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    outputItem?: boolean | RecipeRevision$outputItemArgs<ExtArgs>
  }

  export type $RecipeRevisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeRevision"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      outputItem: Prisma.$ItemPayload<ExtArgs> | null
      lines: Prisma.$RecipeLinePayload<ExtArgs>[]
      productAssignments: Prisma.$ProductRecipeAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipeId: number
      revision: number
      status: $Enums.RecipeStatus
      referenceQuantity: Prisma.Decimal
      referenceUnit: $Enums.UnitOfMeasure
      outputItemId: number | null
      processType: $Enums.ProcessType
      effectiveFrom: Date | null
      effectiveTo: Date | null
      approvedAt: Date | null
      approvedById: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recipeRevision"]>
    composites: {}
  }

  type RecipeRevisionGetPayload<S extends boolean | null | undefined | RecipeRevisionDefaultArgs> = $Result.GetResult<Prisma.$RecipeRevisionPayload, S>

  type RecipeRevisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeRevisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeRevisionCountAggregateInputType | true
    }

  export interface RecipeRevisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeRevision'], meta: { name: 'RecipeRevision' } }
    /**
     * Find zero or one RecipeRevision that matches the filter.
     * @param {RecipeRevisionFindUniqueArgs} args - Arguments to find a RecipeRevision
     * @example
     * // Get one RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeRevisionFindUniqueArgs>(args: SelectSubset<T, RecipeRevisionFindUniqueArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeRevision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeRevisionFindUniqueOrThrowArgs} args - Arguments to find a RecipeRevision
     * @example
     * // Get one RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeRevisionFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeRevisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeRevision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionFindFirstArgs} args - Arguments to find a RecipeRevision
     * @example
     * // Get one RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeRevisionFindFirstArgs>(args?: SelectSubset<T, RecipeRevisionFindFirstArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeRevision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionFindFirstOrThrowArgs} args - Arguments to find a RecipeRevision
     * @example
     * // Get one RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeRevisionFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeRevisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeRevisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeRevisions
     * const recipeRevisions = await prisma.recipeRevision.findMany()
     * 
     * // Get first 10 RecipeRevisions
     * const recipeRevisions = await prisma.recipeRevision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeRevisionWithIdOnly = await prisma.recipeRevision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeRevisionFindManyArgs>(args?: SelectSubset<T, RecipeRevisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeRevision.
     * @param {RecipeRevisionCreateArgs} args - Arguments to create a RecipeRevision.
     * @example
     * // Create one RecipeRevision
     * const RecipeRevision = await prisma.recipeRevision.create({
     *   data: {
     *     // ... data to create a RecipeRevision
     *   }
     * })
     * 
     */
    create<T extends RecipeRevisionCreateArgs>(args: SelectSubset<T, RecipeRevisionCreateArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeRevisions.
     * @param {RecipeRevisionCreateManyArgs} args - Arguments to create many RecipeRevisions.
     * @example
     * // Create many RecipeRevisions
     * const recipeRevision = await prisma.recipeRevision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeRevisionCreateManyArgs>(args?: SelectSubset<T, RecipeRevisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeRevisions and returns the data saved in the database.
     * @param {RecipeRevisionCreateManyAndReturnArgs} args - Arguments to create many RecipeRevisions.
     * @example
     * // Create many RecipeRevisions
     * const recipeRevision = await prisma.recipeRevision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeRevisions and only return the `id`
     * const recipeRevisionWithIdOnly = await prisma.recipeRevision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeRevisionCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeRevisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeRevision.
     * @param {RecipeRevisionDeleteArgs} args - Arguments to delete one RecipeRevision.
     * @example
     * // Delete one RecipeRevision
     * const RecipeRevision = await prisma.recipeRevision.delete({
     *   where: {
     *     // ... filter to delete one RecipeRevision
     *   }
     * })
     * 
     */
    delete<T extends RecipeRevisionDeleteArgs>(args: SelectSubset<T, RecipeRevisionDeleteArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeRevision.
     * @param {RecipeRevisionUpdateArgs} args - Arguments to update one RecipeRevision.
     * @example
     * // Update one RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeRevisionUpdateArgs>(args: SelectSubset<T, RecipeRevisionUpdateArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeRevisions.
     * @param {RecipeRevisionDeleteManyArgs} args - Arguments to filter RecipeRevisions to delete.
     * @example
     * // Delete a few RecipeRevisions
     * const { count } = await prisma.recipeRevision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeRevisionDeleteManyArgs>(args?: SelectSubset<T, RecipeRevisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeRevisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeRevisions
     * const recipeRevision = await prisma.recipeRevision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeRevisionUpdateManyArgs>(args: SelectSubset<T, RecipeRevisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeRevisions and returns the data updated in the database.
     * @param {RecipeRevisionUpdateManyAndReturnArgs} args - Arguments to update many RecipeRevisions.
     * @example
     * // Update many RecipeRevisions
     * const recipeRevision = await prisma.recipeRevision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeRevisions and only return the `id`
     * const recipeRevisionWithIdOnly = await prisma.recipeRevision.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeRevisionUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeRevisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeRevision.
     * @param {RecipeRevisionUpsertArgs} args - Arguments to update or create a RecipeRevision.
     * @example
     * // Update or create a RecipeRevision
     * const recipeRevision = await prisma.recipeRevision.upsert({
     *   create: {
     *     // ... data to create a RecipeRevision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeRevision we want to update
     *   }
     * })
     */
    upsert<T extends RecipeRevisionUpsertArgs>(args: SelectSubset<T, RecipeRevisionUpsertArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeRevisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionCountArgs} args - Arguments to filter RecipeRevisions to count.
     * @example
     * // Count the number of RecipeRevisions
     * const count = await prisma.recipeRevision.count({
     *   where: {
     *     // ... the filter for the RecipeRevisions we want to count
     *   }
     * })
    **/
    count<T extends RecipeRevisionCountArgs>(
      args?: Subset<T, RecipeRevisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeRevisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeRevision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeRevisionAggregateArgs>(args: Subset<T, RecipeRevisionAggregateArgs>): Prisma.PrismaPromise<GetRecipeRevisionAggregateType<T>>

    /**
     * Group by RecipeRevision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeRevisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeRevisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeRevisionGroupByArgs['orderBy'] }
        : { orderBy?: RecipeRevisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeRevisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeRevisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeRevision model
   */
  readonly fields: RecipeRevisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeRevision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeRevisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outputItem<T extends RecipeRevision$outputItemArgs<ExtArgs> = {}>(args?: Subset<T, RecipeRevision$outputItemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lines<T extends RecipeRevision$linesArgs<ExtArgs> = {}>(args?: Subset<T, RecipeRevision$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productAssignments<T extends RecipeRevision$productAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, RecipeRevision$productAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeRevision model
   */
  interface RecipeRevisionFieldRefs {
    readonly id: FieldRef<"RecipeRevision", 'Int'>
    readonly recipeId: FieldRef<"RecipeRevision", 'Int'>
    readonly revision: FieldRef<"RecipeRevision", 'Int'>
    readonly status: FieldRef<"RecipeRevision", 'RecipeStatus'>
    readonly referenceQuantity: FieldRef<"RecipeRevision", 'Decimal'>
    readonly referenceUnit: FieldRef<"RecipeRevision", 'UnitOfMeasure'>
    readonly outputItemId: FieldRef<"RecipeRevision", 'Int'>
    readonly processType: FieldRef<"RecipeRevision", 'ProcessType'>
    readonly effectiveFrom: FieldRef<"RecipeRevision", 'DateTime'>
    readonly effectiveTo: FieldRef<"RecipeRevision", 'DateTime'>
    readonly approvedAt: FieldRef<"RecipeRevision", 'DateTime'>
    readonly approvedById: FieldRef<"RecipeRevision", 'Int'>
    readonly notes: FieldRef<"RecipeRevision", 'String'>
    readonly createdAt: FieldRef<"RecipeRevision", 'DateTime'>
    readonly updatedAt: FieldRef<"RecipeRevision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecipeRevision findUnique
   */
  export type RecipeRevisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeRevision to fetch.
     */
    where: RecipeRevisionWhereUniqueInput
  }

  /**
   * RecipeRevision findUniqueOrThrow
   */
  export type RecipeRevisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeRevision to fetch.
     */
    where: RecipeRevisionWhereUniqueInput
  }

  /**
   * RecipeRevision findFirst
   */
  export type RecipeRevisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeRevision to fetch.
     */
    where?: RecipeRevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeRevisions to fetch.
     */
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeRevisions.
     */
    cursor?: RecipeRevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeRevisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeRevisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeRevisions.
     */
    distinct?: RecipeRevisionScalarFieldEnum | RecipeRevisionScalarFieldEnum[]
  }

  /**
   * RecipeRevision findFirstOrThrow
   */
  export type RecipeRevisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeRevision to fetch.
     */
    where?: RecipeRevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeRevisions to fetch.
     */
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeRevisions.
     */
    cursor?: RecipeRevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeRevisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeRevisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeRevisions.
     */
    distinct?: RecipeRevisionScalarFieldEnum | RecipeRevisionScalarFieldEnum[]
  }

  /**
   * RecipeRevision findMany
   */
  export type RecipeRevisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter, which RecipeRevisions to fetch.
     */
    where?: RecipeRevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeRevisions to fetch.
     */
    orderBy?: RecipeRevisionOrderByWithRelationInput | RecipeRevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeRevisions.
     */
    cursor?: RecipeRevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeRevisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeRevisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeRevisions.
     */
    distinct?: RecipeRevisionScalarFieldEnum | RecipeRevisionScalarFieldEnum[]
  }

  /**
   * RecipeRevision create
   */
  export type RecipeRevisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeRevision.
     */
    data: XOR<RecipeRevisionCreateInput, RecipeRevisionUncheckedCreateInput>
  }

  /**
   * RecipeRevision createMany
   */
  export type RecipeRevisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeRevisions.
     */
    data: RecipeRevisionCreateManyInput | RecipeRevisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeRevision createManyAndReturn
   */
  export type RecipeRevisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeRevisions.
     */
    data: RecipeRevisionCreateManyInput | RecipeRevisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeRevision update
   */
  export type RecipeRevisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeRevision.
     */
    data: XOR<RecipeRevisionUpdateInput, RecipeRevisionUncheckedUpdateInput>
    /**
     * Choose, which RecipeRevision to update.
     */
    where: RecipeRevisionWhereUniqueInput
  }

  /**
   * RecipeRevision updateMany
   */
  export type RecipeRevisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeRevisions.
     */
    data: XOR<RecipeRevisionUpdateManyMutationInput, RecipeRevisionUncheckedUpdateManyInput>
    /**
     * Filter which RecipeRevisions to update
     */
    where?: RecipeRevisionWhereInput
    /**
     * Limit how many RecipeRevisions to update.
     */
    limit?: number
  }

  /**
   * RecipeRevision updateManyAndReturn
   */
  export type RecipeRevisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * The data used to update RecipeRevisions.
     */
    data: XOR<RecipeRevisionUpdateManyMutationInput, RecipeRevisionUncheckedUpdateManyInput>
    /**
     * Filter which RecipeRevisions to update
     */
    where?: RecipeRevisionWhereInput
    /**
     * Limit how many RecipeRevisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeRevision upsert
   */
  export type RecipeRevisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeRevision to update in case it exists.
     */
    where: RecipeRevisionWhereUniqueInput
    /**
     * In case the RecipeRevision found by the `where` argument doesn't exist, create a new RecipeRevision with this data.
     */
    create: XOR<RecipeRevisionCreateInput, RecipeRevisionUncheckedCreateInput>
    /**
     * In case the RecipeRevision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeRevisionUpdateInput, RecipeRevisionUncheckedUpdateInput>
  }

  /**
   * RecipeRevision delete
   */
  export type RecipeRevisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
    /**
     * Filter which RecipeRevision to delete.
     */
    where: RecipeRevisionWhereUniqueInput
  }

  /**
   * RecipeRevision deleteMany
   */
  export type RecipeRevisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeRevisions to delete
     */
    where?: RecipeRevisionWhereInput
    /**
     * Limit how many RecipeRevisions to delete.
     */
    limit?: number
  }

  /**
   * RecipeRevision.outputItem
   */
  export type RecipeRevision$outputItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }

  /**
   * RecipeRevision.lines
   */
  export type RecipeRevision$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    where?: RecipeLineWhereInput
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    cursor?: RecipeLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeLineScalarFieldEnum | RecipeLineScalarFieldEnum[]
  }

  /**
   * RecipeRevision.productAssignments
   */
  export type RecipeRevision$productAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    where?: ProductRecipeAssignmentWhereInput
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecipeAssignmentScalarFieldEnum | ProductRecipeAssignmentScalarFieldEnum[]
  }

  /**
   * RecipeRevision without action
   */
  export type RecipeRevisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeRevision
     */
    select?: RecipeRevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeRevision
     */
    omit?: RecipeRevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeRevisionInclude<ExtArgs> | null
  }


  /**
   * Model RecipeLine
   */

  export type AggregateRecipeLine = {
    _count: RecipeLineCountAggregateOutputType | null
    _avg: RecipeLineAvgAggregateOutputType | null
    _sum: RecipeLineSumAggregateOutputType | null
    _min: RecipeLineMinAggregateOutputType | null
    _max: RecipeLineMaxAggregateOutputType | null
  }

  export type RecipeLineAvgAggregateOutputType = {
    id: number | null
    recipeRevisionId: number | null
    lineNumber: number | null
    componentItemId: number | null
    quantity: Decimal | null
    processLossPercent: Decimal | null
  }

  export type RecipeLineSumAggregateOutputType = {
    id: number | null
    recipeRevisionId: number | null
    lineNumber: number | null
    componentItemId: number | null
    quantity: Decimal | null
    processLossPercent: Decimal | null
  }

  export type RecipeLineMinAggregateOutputType = {
    id: number | null
    recipeRevisionId: number | null
    lineNumber: number | null
    componentItemId: number | null
    quantity: Decimal | null
    unit: $Enums.UnitOfMeasure | null
    processLossPercent: Decimal | null
    notes: string | null
  }

  export type RecipeLineMaxAggregateOutputType = {
    id: number | null
    recipeRevisionId: number | null
    lineNumber: number | null
    componentItemId: number | null
    quantity: Decimal | null
    unit: $Enums.UnitOfMeasure | null
    processLossPercent: Decimal | null
    notes: string | null
  }

  export type RecipeLineCountAggregateOutputType = {
    id: number
    recipeRevisionId: number
    lineNumber: number
    componentItemId: number
    quantity: number
    unit: number
    processLossPercent: number
    notes: number
    _all: number
  }


  export type RecipeLineAvgAggregateInputType = {
    id?: true
    recipeRevisionId?: true
    lineNumber?: true
    componentItemId?: true
    quantity?: true
    processLossPercent?: true
  }

  export type RecipeLineSumAggregateInputType = {
    id?: true
    recipeRevisionId?: true
    lineNumber?: true
    componentItemId?: true
    quantity?: true
    processLossPercent?: true
  }

  export type RecipeLineMinAggregateInputType = {
    id?: true
    recipeRevisionId?: true
    lineNumber?: true
    componentItemId?: true
    quantity?: true
    unit?: true
    processLossPercent?: true
    notes?: true
  }

  export type RecipeLineMaxAggregateInputType = {
    id?: true
    recipeRevisionId?: true
    lineNumber?: true
    componentItemId?: true
    quantity?: true
    unit?: true
    processLossPercent?: true
    notes?: true
  }

  export type RecipeLineCountAggregateInputType = {
    id?: true
    recipeRevisionId?: true
    lineNumber?: true
    componentItemId?: true
    quantity?: true
    unit?: true
    processLossPercent?: true
    notes?: true
    _all?: true
  }

  export type RecipeLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeLine to aggregate.
     */
    where?: RecipeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeLines to fetch.
     */
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeLines
    **/
    _count?: true | RecipeLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeLineMaxAggregateInputType
  }

  export type GetRecipeLineAggregateType<T extends RecipeLineAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeLine[P]>
      : GetScalarType<T[P], AggregateRecipeLine[P]>
  }




  export type RecipeLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeLineWhereInput
    orderBy?: RecipeLineOrderByWithAggregationInput | RecipeLineOrderByWithAggregationInput[]
    by: RecipeLineScalarFieldEnum[] | RecipeLineScalarFieldEnum
    having?: RecipeLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeLineCountAggregateInputType | true
    _avg?: RecipeLineAvgAggregateInputType
    _sum?: RecipeLineSumAggregateInputType
    _min?: RecipeLineMinAggregateInputType
    _max?: RecipeLineMaxAggregateInputType
  }

  export type RecipeLineGroupByOutputType = {
    id: number
    recipeRevisionId: number
    lineNumber: number
    componentItemId: number
    quantity: Decimal
    unit: $Enums.UnitOfMeasure
    processLossPercent: Decimal | null
    notes: string | null
    _count: RecipeLineCountAggregateOutputType | null
    _avg: RecipeLineAvgAggregateOutputType | null
    _sum: RecipeLineSumAggregateOutputType | null
    _min: RecipeLineMinAggregateOutputType | null
    _max: RecipeLineMaxAggregateOutputType | null
  }

  type GetRecipeLineGroupByPayload<T extends RecipeLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeLineGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeLineGroupByOutputType[P]>
        }
      >
    >


  export type RecipeLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeRevisionId?: boolean
    lineNumber?: boolean
    componentItemId?: boolean
    quantity?: boolean
    unit?: boolean
    processLossPercent?: boolean
    notes?: boolean
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeLine"]>

  export type RecipeLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeRevisionId?: boolean
    lineNumber?: boolean
    componentItemId?: boolean
    quantity?: boolean
    unit?: boolean
    processLossPercent?: boolean
    notes?: boolean
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeLine"]>

  export type RecipeLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeRevisionId?: boolean
    lineNumber?: boolean
    componentItemId?: boolean
    quantity?: boolean
    unit?: boolean
    processLossPercent?: boolean
    notes?: boolean
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeLine"]>

  export type RecipeLineSelectScalar = {
    id?: boolean
    recipeRevisionId?: boolean
    lineNumber?: boolean
    componentItemId?: boolean
    quantity?: boolean
    unit?: boolean
    processLossPercent?: boolean
    notes?: boolean
  }

  export type RecipeLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeRevisionId" | "lineNumber" | "componentItemId" | "quantity" | "unit" | "processLossPercent" | "notes", ExtArgs["result"]["recipeLine"]>
  export type RecipeLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RecipeLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RecipeLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
    componentItem?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $RecipeLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeLine"
    objects: {
      recipeRevision: Prisma.$RecipeRevisionPayload<ExtArgs>
      componentItem: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipeRevisionId: number
      lineNumber: number
      componentItemId: number
      quantity: Prisma.Decimal
      unit: $Enums.UnitOfMeasure
      processLossPercent: Prisma.Decimal | null
      notes: string | null
    }, ExtArgs["result"]["recipeLine"]>
    composites: {}
  }

  type RecipeLineGetPayload<S extends boolean | null | undefined | RecipeLineDefaultArgs> = $Result.GetResult<Prisma.$RecipeLinePayload, S>

  type RecipeLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeLineCountAggregateInputType | true
    }

  export interface RecipeLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeLine'], meta: { name: 'RecipeLine' } }
    /**
     * Find zero or one RecipeLine that matches the filter.
     * @param {RecipeLineFindUniqueArgs} args - Arguments to find a RecipeLine
     * @example
     * // Get one RecipeLine
     * const recipeLine = await prisma.recipeLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeLineFindUniqueArgs>(args: SelectSubset<T, RecipeLineFindUniqueArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeLineFindUniqueOrThrowArgs} args - Arguments to find a RecipeLine
     * @example
     * // Get one RecipeLine
     * const recipeLine = await prisma.recipeLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeLineFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineFindFirstArgs} args - Arguments to find a RecipeLine
     * @example
     * // Get one RecipeLine
     * const recipeLine = await prisma.recipeLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeLineFindFirstArgs>(args?: SelectSubset<T, RecipeLineFindFirstArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineFindFirstOrThrowArgs} args - Arguments to find a RecipeLine
     * @example
     * // Get one RecipeLine
     * const recipeLine = await prisma.recipeLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeLineFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeLines
     * const recipeLines = await prisma.recipeLine.findMany()
     * 
     * // Get first 10 RecipeLines
     * const recipeLines = await prisma.recipeLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeLineWithIdOnly = await prisma.recipeLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeLineFindManyArgs>(args?: SelectSubset<T, RecipeLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeLine.
     * @param {RecipeLineCreateArgs} args - Arguments to create a RecipeLine.
     * @example
     * // Create one RecipeLine
     * const RecipeLine = await prisma.recipeLine.create({
     *   data: {
     *     // ... data to create a RecipeLine
     *   }
     * })
     * 
     */
    create<T extends RecipeLineCreateArgs>(args: SelectSubset<T, RecipeLineCreateArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeLines.
     * @param {RecipeLineCreateManyArgs} args - Arguments to create many RecipeLines.
     * @example
     * // Create many RecipeLines
     * const recipeLine = await prisma.recipeLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeLineCreateManyArgs>(args?: SelectSubset<T, RecipeLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeLines and returns the data saved in the database.
     * @param {RecipeLineCreateManyAndReturnArgs} args - Arguments to create many RecipeLines.
     * @example
     * // Create many RecipeLines
     * const recipeLine = await prisma.recipeLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeLines and only return the `id`
     * const recipeLineWithIdOnly = await prisma.recipeLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeLineCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeLine.
     * @param {RecipeLineDeleteArgs} args - Arguments to delete one RecipeLine.
     * @example
     * // Delete one RecipeLine
     * const RecipeLine = await prisma.recipeLine.delete({
     *   where: {
     *     // ... filter to delete one RecipeLine
     *   }
     * })
     * 
     */
    delete<T extends RecipeLineDeleteArgs>(args: SelectSubset<T, RecipeLineDeleteArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeLine.
     * @param {RecipeLineUpdateArgs} args - Arguments to update one RecipeLine.
     * @example
     * // Update one RecipeLine
     * const recipeLine = await prisma.recipeLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeLineUpdateArgs>(args: SelectSubset<T, RecipeLineUpdateArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeLines.
     * @param {RecipeLineDeleteManyArgs} args - Arguments to filter RecipeLines to delete.
     * @example
     * // Delete a few RecipeLines
     * const { count } = await prisma.recipeLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeLineDeleteManyArgs>(args?: SelectSubset<T, RecipeLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeLines
     * const recipeLine = await prisma.recipeLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeLineUpdateManyArgs>(args: SelectSubset<T, RecipeLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeLines and returns the data updated in the database.
     * @param {RecipeLineUpdateManyAndReturnArgs} args - Arguments to update many RecipeLines.
     * @example
     * // Update many RecipeLines
     * const recipeLine = await prisma.recipeLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeLines and only return the `id`
     * const recipeLineWithIdOnly = await prisma.recipeLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeLineUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeLine.
     * @param {RecipeLineUpsertArgs} args - Arguments to update or create a RecipeLine.
     * @example
     * // Update or create a RecipeLine
     * const recipeLine = await prisma.recipeLine.upsert({
     *   create: {
     *     // ... data to create a RecipeLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeLine we want to update
     *   }
     * })
     */
    upsert<T extends RecipeLineUpsertArgs>(args: SelectSubset<T, RecipeLineUpsertArgs<ExtArgs>>): Prisma__RecipeLineClient<$Result.GetResult<Prisma.$RecipeLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineCountArgs} args - Arguments to filter RecipeLines to count.
     * @example
     * // Count the number of RecipeLines
     * const count = await prisma.recipeLine.count({
     *   where: {
     *     // ... the filter for the RecipeLines we want to count
     *   }
     * })
    **/
    count<T extends RecipeLineCountArgs>(
      args?: Subset<T, RecipeLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeLineAggregateArgs>(args: Subset<T, RecipeLineAggregateArgs>): Prisma.PrismaPromise<GetRecipeLineAggregateType<T>>

    /**
     * Group by RecipeLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeLineGroupByArgs['orderBy'] }
        : { orderBy?: RecipeLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeLine model
   */
  readonly fields: RecipeLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipeRevision<T extends RecipeRevisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeRevisionDefaultArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    componentItem<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeLine model
   */
  interface RecipeLineFieldRefs {
    readonly id: FieldRef<"RecipeLine", 'Int'>
    readonly recipeRevisionId: FieldRef<"RecipeLine", 'Int'>
    readonly lineNumber: FieldRef<"RecipeLine", 'Int'>
    readonly componentItemId: FieldRef<"RecipeLine", 'Int'>
    readonly quantity: FieldRef<"RecipeLine", 'Decimal'>
    readonly unit: FieldRef<"RecipeLine", 'UnitOfMeasure'>
    readonly processLossPercent: FieldRef<"RecipeLine", 'Decimal'>
    readonly notes: FieldRef<"RecipeLine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeLine findUnique
   */
  export type RecipeLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter, which RecipeLine to fetch.
     */
    where: RecipeLineWhereUniqueInput
  }

  /**
   * RecipeLine findUniqueOrThrow
   */
  export type RecipeLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter, which RecipeLine to fetch.
     */
    where: RecipeLineWhereUniqueInput
  }

  /**
   * RecipeLine findFirst
   */
  export type RecipeLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter, which RecipeLine to fetch.
     */
    where?: RecipeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeLines to fetch.
     */
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeLines.
     */
    cursor?: RecipeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeLines.
     */
    distinct?: RecipeLineScalarFieldEnum | RecipeLineScalarFieldEnum[]
  }

  /**
   * RecipeLine findFirstOrThrow
   */
  export type RecipeLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter, which RecipeLine to fetch.
     */
    where?: RecipeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeLines to fetch.
     */
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeLines.
     */
    cursor?: RecipeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeLines.
     */
    distinct?: RecipeLineScalarFieldEnum | RecipeLineScalarFieldEnum[]
  }

  /**
   * RecipeLine findMany
   */
  export type RecipeLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter, which RecipeLines to fetch.
     */
    where?: RecipeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeLines to fetch.
     */
    orderBy?: RecipeLineOrderByWithRelationInput | RecipeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeLines.
     */
    cursor?: RecipeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeLines.
     */
    distinct?: RecipeLineScalarFieldEnum | RecipeLineScalarFieldEnum[]
  }

  /**
   * RecipeLine create
   */
  export type RecipeLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeLine.
     */
    data: XOR<RecipeLineCreateInput, RecipeLineUncheckedCreateInput>
  }

  /**
   * RecipeLine createMany
   */
  export type RecipeLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeLines.
     */
    data: RecipeLineCreateManyInput | RecipeLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeLine createManyAndReturn
   */
  export type RecipeLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeLines.
     */
    data: RecipeLineCreateManyInput | RecipeLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeLine update
   */
  export type RecipeLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeLine.
     */
    data: XOR<RecipeLineUpdateInput, RecipeLineUncheckedUpdateInput>
    /**
     * Choose, which RecipeLine to update.
     */
    where: RecipeLineWhereUniqueInput
  }

  /**
   * RecipeLine updateMany
   */
  export type RecipeLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeLines.
     */
    data: XOR<RecipeLineUpdateManyMutationInput, RecipeLineUncheckedUpdateManyInput>
    /**
     * Filter which RecipeLines to update
     */
    where?: RecipeLineWhereInput
    /**
     * Limit how many RecipeLines to update.
     */
    limit?: number
  }

  /**
   * RecipeLine updateManyAndReturn
   */
  export type RecipeLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * The data used to update RecipeLines.
     */
    data: XOR<RecipeLineUpdateManyMutationInput, RecipeLineUncheckedUpdateManyInput>
    /**
     * Filter which RecipeLines to update
     */
    where?: RecipeLineWhereInput
    /**
     * Limit how many RecipeLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeLine upsert
   */
  export type RecipeLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeLine to update in case it exists.
     */
    where: RecipeLineWhereUniqueInput
    /**
     * In case the RecipeLine found by the `where` argument doesn't exist, create a new RecipeLine with this data.
     */
    create: XOR<RecipeLineCreateInput, RecipeLineUncheckedCreateInput>
    /**
     * In case the RecipeLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeLineUpdateInput, RecipeLineUncheckedUpdateInput>
  }

  /**
   * RecipeLine delete
   */
  export type RecipeLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
    /**
     * Filter which RecipeLine to delete.
     */
    where: RecipeLineWhereUniqueInput
  }

  /**
   * RecipeLine deleteMany
   */
  export type RecipeLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeLines to delete
     */
    where?: RecipeLineWhereInput
    /**
     * Limit how many RecipeLines to delete.
     */
    limit?: number
  }

  /**
   * RecipeLine without action
   */
  export type RecipeLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeLine
     */
    select?: RecipeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeLine
     */
    omit?: RecipeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeLineInclude<ExtArgs> | null
  }


  /**
   * Model ProductRecipeAssignment
   */

  export type AggregateProductRecipeAssignment = {
    _count: ProductRecipeAssignmentCountAggregateOutputType | null
    _avg: ProductRecipeAssignmentAvgAggregateOutputType | null
    _sum: ProductRecipeAssignmentSumAggregateOutputType | null
    _min: ProductRecipeAssignmentMinAggregateOutputType | null
    _max: ProductRecipeAssignmentMaxAggregateOutputType | null
  }

  export type ProductRecipeAssignmentAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    recipeRevisionId: number | null
    portionQuantity: Decimal | null
  }

  export type ProductRecipeAssignmentSumAggregateOutputType = {
    id: number | null
    productId: number | null
    recipeRevisionId: number | null
    portionQuantity: Decimal | null
  }

  export type ProductRecipeAssignmentMinAggregateOutputType = {
    id: number | null
    productId: number | null
    recipeRevisionId: number | null
    portionQuantity: Decimal | null
    portionUnit: $Enums.UnitOfMeasure | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
  }

  export type ProductRecipeAssignmentMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    recipeRevisionId: number | null
    portionQuantity: Decimal | null
    portionUnit: $Enums.UnitOfMeasure | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
  }

  export type ProductRecipeAssignmentCountAggregateOutputType = {
    id: number
    productId: number
    recipeRevisionId: number
    portionQuantity: number
    portionUnit: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    _all: number
  }


  export type ProductRecipeAssignmentAvgAggregateInputType = {
    id?: true
    productId?: true
    recipeRevisionId?: true
    portionQuantity?: true
  }

  export type ProductRecipeAssignmentSumAggregateInputType = {
    id?: true
    productId?: true
    recipeRevisionId?: true
    portionQuantity?: true
  }

  export type ProductRecipeAssignmentMinAggregateInputType = {
    id?: true
    productId?: true
    recipeRevisionId?: true
    portionQuantity?: true
    portionUnit?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
  }

  export type ProductRecipeAssignmentMaxAggregateInputType = {
    id?: true
    productId?: true
    recipeRevisionId?: true
    portionQuantity?: true
    portionUnit?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
  }

  export type ProductRecipeAssignmentCountAggregateInputType = {
    id?: true
    productId?: true
    recipeRevisionId?: true
    portionQuantity?: true
    portionUnit?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    _all?: true
  }

  export type ProductRecipeAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecipeAssignment to aggregate.
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecipeAssignments to fetch.
     */
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecipeAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecipeAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRecipeAssignments
    **/
    _count?: true | ProductRecipeAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductRecipeAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRecipeAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRecipeAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRecipeAssignmentMaxAggregateInputType
  }

  export type GetProductRecipeAssignmentAggregateType<T extends ProductRecipeAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRecipeAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRecipeAssignment[P]>
      : GetScalarType<T[P], AggregateProductRecipeAssignment[P]>
  }




  export type ProductRecipeAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecipeAssignmentWhereInput
    orderBy?: ProductRecipeAssignmentOrderByWithAggregationInput | ProductRecipeAssignmentOrderByWithAggregationInput[]
    by: ProductRecipeAssignmentScalarFieldEnum[] | ProductRecipeAssignmentScalarFieldEnum
    having?: ProductRecipeAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRecipeAssignmentCountAggregateInputType | true
    _avg?: ProductRecipeAssignmentAvgAggregateInputType
    _sum?: ProductRecipeAssignmentSumAggregateInputType
    _min?: ProductRecipeAssignmentMinAggregateInputType
    _max?: ProductRecipeAssignmentMaxAggregateInputType
  }

  export type ProductRecipeAssignmentGroupByOutputType = {
    id: number
    productId: number
    recipeRevisionId: number
    portionQuantity: Decimal
    portionUnit: $Enums.UnitOfMeasure
    effectiveFrom: Date
    effectiveTo: Date | null
    createdAt: Date
    _count: ProductRecipeAssignmentCountAggregateOutputType | null
    _avg: ProductRecipeAssignmentAvgAggregateOutputType | null
    _sum: ProductRecipeAssignmentSumAggregateOutputType | null
    _min: ProductRecipeAssignmentMinAggregateOutputType | null
    _max: ProductRecipeAssignmentMaxAggregateOutputType | null
  }

  type GetProductRecipeAssignmentGroupByPayload<T extends ProductRecipeAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRecipeAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRecipeAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRecipeAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRecipeAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ProductRecipeAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    recipeRevisionId?: boolean
    portionQuantity?: boolean
    portionUnit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecipeAssignment"]>

  export type ProductRecipeAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    recipeRevisionId?: boolean
    portionQuantity?: boolean
    portionUnit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecipeAssignment"]>

  export type ProductRecipeAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    recipeRevisionId?: boolean
    portionQuantity?: boolean
    portionUnit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecipeAssignment"]>

  export type ProductRecipeAssignmentSelectScalar = {
    id?: boolean
    productId?: boolean
    recipeRevisionId?: boolean
    portionQuantity?: boolean
    portionUnit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
  }

  export type ProductRecipeAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "recipeRevisionId" | "portionQuantity" | "portionUnit" | "effectiveFrom" | "effectiveTo" | "createdAt", ExtArgs["result"]["productRecipeAssignment"]>
  export type ProductRecipeAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }
  export type ProductRecipeAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }
  export type ProductRecipeAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeRevision?: boolean | RecipeRevisionDefaultArgs<ExtArgs>
  }

  export type $ProductRecipeAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRecipeAssignment"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      recipeRevision: Prisma.$RecipeRevisionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      recipeRevisionId: number
      portionQuantity: Prisma.Decimal
      portionUnit: $Enums.UnitOfMeasure
      effectiveFrom: Date
      effectiveTo: Date | null
      createdAt: Date
    }, ExtArgs["result"]["productRecipeAssignment"]>
    composites: {}
  }

  type ProductRecipeAssignmentGetPayload<S extends boolean | null | undefined | ProductRecipeAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ProductRecipeAssignmentPayload, S>

  type ProductRecipeAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductRecipeAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductRecipeAssignmentCountAggregateInputType | true
    }

  export interface ProductRecipeAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRecipeAssignment'], meta: { name: 'ProductRecipeAssignment' } }
    /**
     * Find zero or one ProductRecipeAssignment that matches the filter.
     * @param {ProductRecipeAssignmentFindUniqueArgs} args - Arguments to find a ProductRecipeAssignment
     * @example
     * // Get one ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductRecipeAssignmentFindUniqueArgs>(args: SelectSubset<T, ProductRecipeAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductRecipeAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductRecipeAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ProductRecipeAssignment
     * @example
     * // Get one ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductRecipeAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductRecipeAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductRecipeAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentFindFirstArgs} args - Arguments to find a ProductRecipeAssignment
     * @example
     * // Get one ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductRecipeAssignmentFindFirstArgs>(args?: SelectSubset<T, ProductRecipeAssignmentFindFirstArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductRecipeAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentFindFirstOrThrowArgs} args - Arguments to find a ProductRecipeAssignment
     * @example
     * // Get one ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductRecipeAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductRecipeAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductRecipeAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRecipeAssignments
     * const productRecipeAssignments = await prisma.productRecipeAssignment.findMany()
     * 
     * // Get first 10 ProductRecipeAssignments
     * const productRecipeAssignments = await prisma.productRecipeAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productRecipeAssignmentWithIdOnly = await prisma.productRecipeAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductRecipeAssignmentFindManyArgs>(args?: SelectSubset<T, ProductRecipeAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductRecipeAssignment.
     * @param {ProductRecipeAssignmentCreateArgs} args - Arguments to create a ProductRecipeAssignment.
     * @example
     * // Create one ProductRecipeAssignment
     * const ProductRecipeAssignment = await prisma.productRecipeAssignment.create({
     *   data: {
     *     // ... data to create a ProductRecipeAssignment
     *   }
     * })
     * 
     */
    create<T extends ProductRecipeAssignmentCreateArgs>(args: SelectSubset<T, ProductRecipeAssignmentCreateArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductRecipeAssignments.
     * @param {ProductRecipeAssignmentCreateManyArgs} args - Arguments to create many ProductRecipeAssignments.
     * @example
     * // Create many ProductRecipeAssignments
     * const productRecipeAssignment = await prisma.productRecipeAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductRecipeAssignmentCreateManyArgs>(args?: SelectSubset<T, ProductRecipeAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductRecipeAssignments and returns the data saved in the database.
     * @param {ProductRecipeAssignmentCreateManyAndReturnArgs} args - Arguments to create many ProductRecipeAssignments.
     * @example
     * // Create many ProductRecipeAssignments
     * const productRecipeAssignment = await prisma.productRecipeAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductRecipeAssignments and only return the `id`
     * const productRecipeAssignmentWithIdOnly = await prisma.productRecipeAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductRecipeAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductRecipeAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductRecipeAssignment.
     * @param {ProductRecipeAssignmentDeleteArgs} args - Arguments to delete one ProductRecipeAssignment.
     * @example
     * // Delete one ProductRecipeAssignment
     * const ProductRecipeAssignment = await prisma.productRecipeAssignment.delete({
     *   where: {
     *     // ... filter to delete one ProductRecipeAssignment
     *   }
     * })
     * 
     */
    delete<T extends ProductRecipeAssignmentDeleteArgs>(args: SelectSubset<T, ProductRecipeAssignmentDeleteArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductRecipeAssignment.
     * @param {ProductRecipeAssignmentUpdateArgs} args - Arguments to update one ProductRecipeAssignment.
     * @example
     * // Update one ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductRecipeAssignmentUpdateArgs>(args: SelectSubset<T, ProductRecipeAssignmentUpdateArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductRecipeAssignments.
     * @param {ProductRecipeAssignmentDeleteManyArgs} args - Arguments to filter ProductRecipeAssignments to delete.
     * @example
     * // Delete a few ProductRecipeAssignments
     * const { count } = await prisma.productRecipeAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductRecipeAssignmentDeleteManyArgs>(args?: SelectSubset<T, ProductRecipeAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRecipeAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRecipeAssignments
     * const productRecipeAssignment = await prisma.productRecipeAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductRecipeAssignmentUpdateManyArgs>(args: SelectSubset<T, ProductRecipeAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRecipeAssignments and returns the data updated in the database.
     * @param {ProductRecipeAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ProductRecipeAssignments.
     * @example
     * // Update many ProductRecipeAssignments
     * const productRecipeAssignment = await prisma.productRecipeAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductRecipeAssignments and only return the `id`
     * const productRecipeAssignmentWithIdOnly = await prisma.productRecipeAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductRecipeAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductRecipeAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductRecipeAssignment.
     * @param {ProductRecipeAssignmentUpsertArgs} args - Arguments to update or create a ProductRecipeAssignment.
     * @example
     * // Update or create a ProductRecipeAssignment
     * const productRecipeAssignment = await prisma.productRecipeAssignment.upsert({
     *   create: {
     *     // ... data to create a ProductRecipeAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRecipeAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ProductRecipeAssignmentUpsertArgs>(args: SelectSubset<T, ProductRecipeAssignmentUpsertArgs<ExtArgs>>): Prisma__ProductRecipeAssignmentClient<$Result.GetResult<Prisma.$ProductRecipeAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductRecipeAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentCountArgs} args - Arguments to filter ProductRecipeAssignments to count.
     * @example
     * // Count the number of ProductRecipeAssignments
     * const count = await prisma.productRecipeAssignment.count({
     *   where: {
     *     // ... the filter for the ProductRecipeAssignments we want to count
     *   }
     * })
    **/
    count<T extends ProductRecipeAssignmentCountArgs>(
      args?: Subset<T, ProductRecipeAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRecipeAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRecipeAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductRecipeAssignmentAggregateArgs>(args: Subset<T, ProductRecipeAssignmentAggregateArgs>): Prisma.PrismaPromise<GetProductRecipeAssignmentAggregateType<T>>

    /**
     * Group by ProductRecipeAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecipeAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductRecipeAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRecipeAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ProductRecipeAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductRecipeAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRecipeAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRecipeAssignment model
   */
  readonly fields: ProductRecipeAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRecipeAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRecipeAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipeRevision<T extends RecipeRevisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeRevisionDefaultArgs<ExtArgs>>): Prisma__RecipeRevisionClient<$Result.GetResult<Prisma.$RecipeRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductRecipeAssignment model
   */
  interface ProductRecipeAssignmentFieldRefs {
    readonly id: FieldRef<"ProductRecipeAssignment", 'Int'>
    readonly productId: FieldRef<"ProductRecipeAssignment", 'Int'>
    readonly recipeRevisionId: FieldRef<"ProductRecipeAssignment", 'Int'>
    readonly portionQuantity: FieldRef<"ProductRecipeAssignment", 'Decimal'>
    readonly portionUnit: FieldRef<"ProductRecipeAssignment", 'UnitOfMeasure'>
    readonly effectiveFrom: FieldRef<"ProductRecipeAssignment", 'DateTime'>
    readonly effectiveTo: FieldRef<"ProductRecipeAssignment", 'DateTime'>
    readonly createdAt: FieldRef<"ProductRecipeAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductRecipeAssignment findUnique
   */
  export type ProductRecipeAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecipeAssignment to fetch.
     */
    where: ProductRecipeAssignmentWhereUniqueInput
  }

  /**
   * ProductRecipeAssignment findUniqueOrThrow
   */
  export type ProductRecipeAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecipeAssignment to fetch.
     */
    where: ProductRecipeAssignmentWhereUniqueInput
  }

  /**
   * ProductRecipeAssignment findFirst
   */
  export type ProductRecipeAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecipeAssignment to fetch.
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecipeAssignments to fetch.
     */
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecipeAssignments.
     */
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecipeAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecipeAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecipeAssignments.
     */
    distinct?: ProductRecipeAssignmentScalarFieldEnum | ProductRecipeAssignmentScalarFieldEnum[]
  }

  /**
   * ProductRecipeAssignment findFirstOrThrow
   */
  export type ProductRecipeAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecipeAssignment to fetch.
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecipeAssignments to fetch.
     */
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecipeAssignments.
     */
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecipeAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecipeAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecipeAssignments.
     */
    distinct?: ProductRecipeAssignmentScalarFieldEnum | ProductRecipeAssignmentScalarFieldEnum[]
  }

  /**
   * ProductRecipeAssignment findMany
   */
  export type ProductRecipeAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecipeAssignments to fetch.
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecipeAssignments to fetch.
     */
    orderBy?: ProductRecipeAssignmentOrderByWithRelationInput | ProductRecipeAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRecipeAssignments.
     */
    cursor?: ProductRecipeAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecipeAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecipeAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecipeAssignments.
     */
    distinct?: ProductRecipeAssignmentScalarFieldEnum | ProductRecipeAssignmentScalarFieldEnum[]
  }

  /**
   * ProductRecipeAssignment create
   */
  export type ProductRecipeAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRecipeAssignment.
     */
    data: XOR<ProductRecipeAssignmentCreateInput, ProductRecipeAssignmentUncheckedCreateInput>
  }

  /**
   * ProductRecipeAssignment createMany
   */
  export type ProductRecipeAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRecipeAssignments.
     */
    data: ProductRecipeAssignmentCreateManyInput | ProductRecipeAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductRecipeAssignment createManyAndReturn
   */
  export type ProductRecipeAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ProductRecipeAssignments.
     */
    data: ProductRecipeAssignmentCreateManyInput | ProductRecipeAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRecipeAssignment update
   */
  export type ProductRecipeAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRecipeAssignment.
     */
    data: XOR<ProductRecipeAssignmentUpdateInput, ProductRecipeAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ProductRecipeAssignment to update.
     */
    where: ProductRecipeAssignmentWhereUniqueInput
  }

  /**
   * ProductRecipeAssignment updateMany
   */
  export type ProductRecipeAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRecipeAssignments.
     */
    data: XOR<ProductRecipeAssignmentUpdateManyMutationInput, ProductRecipeAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ProductRecipeAssignments to update
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * Limit how many ProductRecipeAssignments to update.
     */
    limit?: number
  }

  /**
   * ProductRecipeAssignment updateManyAndReturn
   */
  export type ProductRecipeAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ProductRecipeAssignments.
     */
    data: XOR<ProductRecipeAssignmentUpdateManyMutationInput, ProductRecipeAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ProductRecipeAssignments to update
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * Limit how many ProductRecipeAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRecipeAssignment upsert
   */
  export type ProductRecipeAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRecipeAssignment to update in case it exists.
     */
    where: ProductRecipeAssignmentWhereUniqueInput
    /**
     * In case the ProductRecipeAssignment found by the `where` argument doesn't exist, create a new ProductRecipeAssignment with this data.
     */
    create: XOR<ProductRecipeAssignmentCreateInput, ProductRecipeAssignmentUncheckedCreateInput>
    /**
     * In case the ProductRecipeAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRecipeAssignmentUpdateInput, ProductRecipeAssignmentUncheckedUpdateInput>
  }

  /**
   * ProductRecipeAssignment delete
   */
  export type ProductRecipeAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ProductRecipeAssignment to delete.
     */
    where: ProductRecipeAssignmentWhereUniqueInput
  }

  /**
   * ProductRecipeAssignment deleteMany
   */
  export type ProductRecipeAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecipeAssignments to delete
     */
    where?: ProductRecipeAssignmentWhereInput
    /**
     * Limit how many ProductRecipeAssignments to delete.
     */
    limit?: number
  }

  /**
   * ProductRecipeAssignment without action
   */
  export type ProductRecipeAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecipeAssignment
     */
    select?: ProductRecipeAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRecipeAssignment
     */
    omit?: ProductRecipeAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRecipeAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ProductPackagingLine
   */

  export type AggregateProductPackagingLine = {
    _count: ProductPackagingLineCountAggregateOutputType | null
    _avg: ProductPackagingLineAvgAggregateOutputType | null
    _sum: ProductPackagingLineSumAggregateOutputType | null
    _min: ProductPackagingLineMinAggregateOutputType | null
    _max: ProductPackagingLineMaxAggregateOutputType | null
  }

  export type ProductPackagingLineAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    itemId: number | null
    quantity: Decimal | null
  }

  export type ProductPackagingLineSumAggregateOutputType = {
    id: number | null
    productId: number | null
    itemId: number | null
    quantity: Decimal | null
  }

  export type ProductPackagingLineMinAggregateOutputType = {
    id: number | null
    productId: number | null
    itemId: number | null
    quantity: Decimal | null
    unit: $Enums.UnitOfMeasure | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
  }

  export type ProductPackagingLineMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    itemId: number | null
    quantity: Decimal | null
    unit: $Enums.UnitOfMeasure | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
  }

  export type ProductPackagingLineCountAggregateOutputType = {
    id: number
    productId: number
    itemId: number
    quantity: number
    unit: number
    effectiveFrom: number
    effectiveTo: number
    _all: number
  }


  export type ProductPackagingLineAvgAggregateInputType = {
    id?: true
    productId?: true
    itemId?: true
    quantity?: true
  }

  export type ProductPackagingLineSumAggregateInputType = {
    id?: true
    productId?: true
    itemId?: true
    quantity?: true
  }

  export type ProductPackagingLineMinAggregateInputType = {
    id?: true
    productId?: true
    itemId?: true
    quantity?: true
    unit?: true
    effectiveFrom?: true
    effectiveTo?: true
  }

  export type ProductPackagingLineMaxAggregateInputType = {
    id?: true
    productId?: true
    itemId?: true
    quantity?: true
    unit?: true
    effectiveFrom?: true
    effectiveTo?: true
  }

  export type ProductPackagingLineCountAggregateInputType = {
    id?: true
    productId?: true
    itemId?: true
    quantity?: true
    unit?: true
    effectiveFrom?: true
    effectiveTo?: true
    _all?: true
  }

  export type ProductPackagingLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPackagingLine to aggregate.
     */
    where?: ProductPackagingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPackagingLines to fetch.
     */
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPackagingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPackagingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPackagingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPackagingLines
    **/
    _count?: true | ProductPackagingLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPackagingLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPackagingLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPackagingLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPackagingLineMaxAggregateInputType
  }

  export type GetProductPackagingLineAggregateType<T extends ProductPackagingLineAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPackagingLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPackagingLine[P]>
      : GetScalarType<T[P], AggregateProductPackagingLine[P]>
  }




  export type ProductPackagingLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPackagingLineWhereInput
    orderBy?: ProductPackagingLineOrderByWithAggregationInput | ProductPackagingLineOrderByWithAggregationInput[]
    by: ProductPackagingLineScalarFieldEnum[] | ProductPackagingLineScalarFieldEnum
    having?: ProductPackagingLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPackagingLineCountAggregateInputType | true
    _avg?: ProductPackagingLineAvgAggregateInputType
    _sum?: ProductPackagingLineSumAggregateInputType
    _min?: ProductPackagingLineMinAggregateInputType
    _max?: ProductPackagingLineMaxAggregateInputType
  }

  export type ProductPackagingLineGroupByOutputType = {
    id: number
    productId: number
    itemId: number
    quantity: Decimal
    unit: $Enums.UnitOfMeasure
    effectiveFrom: Date
    effectiveTo: Date | null
    _count: ProductPackagingLineCountAggregateOutputType | null
    _avg: ProductPackagingLineAvgAggregateOutputType | null
    _sum: ProductPackagingLineSumAggregateOutputType | null
    _min: ProductPackagingLineMinAggregateOutputType | null
    _max: ProductPackagingLineMaxAggregateOutputType | null
  }

  type GetProductPackagingLineGroupByPayload<T extends ProductPackagingLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPackagingLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPackagingLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPackagingLineGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPackagingLineGroupByOutputType[P]>
        }
      >
    >


  export type ProductPackagingLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    itemId?: boolean
    quantity?: boolean
    unit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPackagingLine"]>

  export type ProductPackagingLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    itemId?: boolean
    quantity?: boolean
    unit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPackagingLine"]>

  export type ProductPackagingLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    itemId?: boolean
    quantity?: boolean
    unit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPackagingLine"]>

  export type ProductPackagingLineSelectScalar = {
    id?: boolean
    productId?: boolean
    itemId?: boolean
    quantity?: boolean
    unit?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
  }

  export type ProductPackagingLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "itemId" | "quantity" | "unit" | "effectiveFrom" | "effectiveTo", ExtArgs["result"]["productPackagingLine"]>
  export type ProductPackagingLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ProductPackagingLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ProductPackagingLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ProductPackagingLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPackagingLine"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      itemId: number
      quantity: Prisma.Decimal
      unit: $Enums.UnitOfMeasure
      effectiveFrom: Date
      effectiveTo: Date | null
    }, ExtArgs["result"]["productPackagingLine"]>
    composites: {}
  }

  type ProductPackagingLineGetPayload<S extends boolean | null | undefined | ProductPackagingLineDefaultArgs> = $Result.GetResult<Prisma.$ProductPackagingLinePayload, S>

  type ProductPackagingLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPackagingLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPackagingLineCountAggregateInputType | true
    }

  export interface ProductPackagingLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPackagingLine'], meta: { name: 'ProductPackagingLine' } }
    /**
     * Find zero or one ProductPackagingLine that matches the filter.
     * @param {ProductPackagingLineFindUniqueArgs} args - Arguments to find a ProductPackagingLine
     * @example
     * // Get one ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPackagingLineFindUniqueArgs>(args: SelectSubset<T, ProductPackagingLineFindUniqueArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPackagingLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPackagingLineFindUniqueOrThrowArgs} args - Arguments to find a ProductPackagingLine
     * @example
     * // Get one ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPackagingLineFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPackagingLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPackagingLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineFindFirstArgs} args - Arguments to find a ProductPackagingLine
     * @example
     * // Get one ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPackagingLineFindFirstArgs>(args?: SelectSubset<T, ProductPackagingLineFindFirstArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPackagingLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineFindFirstOrThrowArgs} args - Arguments to find a ProductPackagingLine
     * @example
     * // Get one ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPackagingLineFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPackagingLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPackagingLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPackagingLines
     * const productPackagingLines = await prisma.productPackagingLine.findMany()
     * 
     * // Get first 10 ProductPackagingLines
     * const productPackagingLines = await prisma.productPackagingLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPackagingLineWithIdOnly = await prisma.productPackagingLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPackagingLineFindManyArgs>(args?: SelectSubset<T, ProductPackagingLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPackagingLine.
     * @param {ProductPackagingLineCreateArgs} args - Arguments to create a ProductPackagingLine.
     * @example
     * // Create one ProductPackagingLine
     * const ProductPackagingLine = await prisma.productPackagingLine.create({
     *   data: {
     *     // ... data to create a ProductPackagingLine
     *   }
     * })
     * 
     */
    create<T extends ProductPackagingLineCreateArgs>(args: SelectSubset<T, ProductPackagingLineCreateArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPackagingLines.
     * @param {ProductPackagingLineCreateManyArgs} args - Arguments to create many ProductPackagingLines.
     * @example
     * // Create many ProductPackagingLines
     * const productPackagingLine = await prisma.productPackagingLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPackagingLineCreateManyArgs>(args?: SelectSubset<T, ProductPackagingLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPackagingLines and returns the data saved in the database.
     * @param {ProductPackagingLineCreateManyAndReturnArgs} args - Arguments to create many ProductPackagingLines.
     * @example
     * // Create many ProductPackagingLines
     * const productPackagingLine = await prisma.productPackagingLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPackagingLines and only return the `id`
     * const productPackagingLineWithIdOnly = await prisma.productPackagingLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPackagingLineCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPackagingLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPackagingLine.
     * @param {ProductPackagingLineDeleteArgs} args - Arguments to delete one ProductPackagingLine.
     * @example
     * // Delete one ProductPackagingLine
     * const ProductPackagingLine = await prisma.productPackagingLine.delete({
     *   where: {
     *     // ... filter to delete one ProductPackagingLine
     *   }
     * })
     * 
     */
    delete<T extends ProductPackagingLineDeleteArgs>(args: SelectSubset<T, ProductPackagingLineDeleteArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPackagingLine.
     * @param {ProductPackagingLineUpdateArgs} args - Arguments to update one ProductPackagingLine.
     * @example
     * // Update one ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPackagingLineUpdateArgs>(args: SelectSubset<T, ProductPackagingLineUpdateArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPackagingLines.
     * @param {ProductPackagingLineDeleteManyArgs} args - Arguments to filter ProductPackagingLines to delete.
     * @example
     * // Delete a few ProductPackagingLines
     * const { count } = await prisma.productPackagingLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPackagingLineDeleteManyArgs>(args?: SelectSubset<T, ProductPackagingLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPackagingLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPackagingLines
     * const productPackagingLine = await prisma.productPackagingLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPackagingLineUpdateManyArgs>(args: SelectSubset<T, ProductPackagingLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPackagingLines and returns the data updated in the database.
     * @param {ProductPackagingLineUpdateManyAndReturnArgs} args - Arguments to update many ProductPackagingLines.
     * @example
     * // Update many ProductPackagingLines
     * const productPackagingLine = await prisma.productPackagingLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPackagingLines and only return the `id`
     * const productPackagingLineWithIdOnly = await prisma.productPackagingLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductPackagingLineUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPackagingLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPackagingLine.
     * @param {ProductPackagingLineUpsertArgs} args - Arguments to update or create a ProductPackagingLine.
     * @example
     * // Update or create a ProductPackagingLine
     * const productPackagingLine = await prisma.productPackagingLine.upsert({
     *   create: {
     *     // ... data to create a ProductPackagingLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPackagingLine we want to update
     *   }
     * })
     */
    upsert<T extends ProductPackagingLineUpsertArgs>(args: SelectSubset<T, ProductPackagingLineUpsertArgs<ExtArgs>>): Prisma__ProductPackagingLineClient<$Result.GetResult<Prisma.$ProductPackagingLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPackagingLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineCountArgs} args - Arguments to filter ProductPackagingLines to count.
     * @example
     * // Count the number of ProductPackagingLines
     * const count = await prisma.productPackagingLine.count({
     *   where: {
     *     // ... the filter for the ProductPackagingLines we want to count
     *   }
     * })
    **/
    count<T extends ProductPackagingLineCountArgs>(
      args?: Subset<T, ProductPackagingLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPackagingLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPackagingLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPackagingLineAggregateArgs>(args: Subset<T, ProductPackagingLineAggregateArgs>): Prisma.PrismaPromise<GetProductPackagingLineAggregateType<T>>

    /**
     * Group by ProductPackagingLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPackagingLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPackagingLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPackagingLineGroupByArgs['orderBy'] }
        : { orderBy?: ProductPackagingLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPackagingLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPackagingLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPackagingLine model
   */
  readonly fields: ProductPackagingLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPackagingLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPackagingLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPackagingLine model
   */
  interface ProductPackagingLineFieldRefs {
    readonly id: FieldRef<"ProductPackagingLine", 'Int'>
    readonly productId: FieldRef<"ProductPackagingLine", 'Int'>
    readonly itemId: FieldRef<"ProductPackagingLine", 'Int'>
    readonly quantity: FieldRef<"ProductPackagingLine", 'Decimal'>
    readonly unit: FieldRef<"ProductPackagingLine", 'UnitOfMeasure'>
    readonly effectiveFrom: FieldRef<"ProductPackagingLine", 'DateTime'>
    readonly effectiveTo: FieldRef<"ProductPackagingLine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPackagingLine findUnique
   */
  export type ProductPackagingLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductPackagingLine to fetch.
     */
    where: ProductPackagingLineWhereUniqueInput
  }

  /**
   * ProductPackagingLine findUniqueOrThrow
   */
  export type ProductPackagingLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductPackagingLine to fetch.
     */
    where: ProductPackagingLineWhereUniqueInput
  }

  /**
   * ProductPackagingLine findFirst
   */
  export type ProductPackagingLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductPackagingLine to fetch.
     */
    where?: ProductPackagingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPackagingLines to fetch.
     */
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPackagingLines.
     */
    cursor?: ProductPackagingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPackagingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPackagingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPackagingLines.
     */
    distinct?: ProductPackagingLineScalarFieldEnum | ProductPackagingLineScalarFieldEnum[]
  }

  /**
   * ProductPackagingLine findFirstOrThrow
   */
  export type ProductPackagingLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductPackagingLine to fetch.
     */
    where?: ProductPackagingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPackagingLines to fetch.
     */
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPackagingLines.
     */
    cursor?: ProductPackagingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPackagingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPackagingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPackagingLines.
     */
    distinct?: ProductPackagingLineScalarFieldEnum | ProductPackagingLineScalarFieldEnum[]
  }

  /**
   * ProductPackagingLine findMany
   */
  export type ProductPackagingLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductPackagingLines to fetch.
     */
    where?: ProductPackagingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPackagingLines to fetch.
     */
    orderBy?: ProductPackagingLineOrderByWithRelationInput | ProductPackagingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPackagingLines.
     */
    cursor?: ProductPackagingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPackagingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPackagingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPackagingLines.
     */
    distinct?: ProductPackagingLineScalarFieldEnum | ProductPackagingLineScalarFieldEnum[]
  }

  /**
   * ProductPackagingLine create
   */
  export type ProductPackagingLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPackagingLine.
     */
    data: XOR<ProductPackagingLineCreateInput, ProductPackagingLineUncheckedCreateInput>
  }

  /**
   * ProductPackagingLine createMany
   */
  export type ProductPackagingLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPackagingLines.
     */
    data: ProductPackagingLineCreateManyInput | ProductPackagingLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPackagingLine createManyAndReturn
   */
  export type ProductPackagingLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPackagingLines.
     */
    data: ProductPackagingLineCreateManyInput | ProductPackagingLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPackagingLine update
   */
  export type ProductPackagingLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPackagingLine.
     */
    data: XOR<ProductPackagingLineUpdateInput, ProductPackagingLineUncheckedUpdateInput>
    /**
     * Choose, which ProductPackagingLine to update.
     */
    where: ProductPackagingLineWhereUniqueInput
  }

  /**
   * ProductPackagingLine updateMany
   */
  export type ProductPackagingLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPackagingLines.
     */
    data: XOR<ProductPackagingLineUpdateManyMutationInput, ProductPackagingLineUncheckedUpdateManyInput>
    /**
     * Filter which ProductPackagingLines to update
     */
    where?: ProductPackagingLineWhereInput
    /**
     * Limit how many ProductPackagingLines to update.
     */
    limit?: number
  }

  /**
   * ProductPackagingLine updateManyAndReturn
   */
  export type ProductPackagingLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * The data used to update ProductPackagingLines.
     */
    data: XOR<ProductPackagingLineUpdateManyMutationInput, ProductPackagingLineUncheckedUpdateManyInput>
    /**
     * Filter which ProductPackagingLines to update
     */
    where?: ProductPackagingLineWhereInput
    /**
     * Limit how many ProductPackagingLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPackagingLine upsert
   */
  export type ProductPackagingLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPackagingLine to update in case it exists.
     */
    where: ProductPackagingLineWhereUniqueInput
    /**
     * In case the ProductPackagingLine found by the `where` argument doesn't exist, create a new ProductPackagingLine with this data.
     */
    create: XOR<ProductPackagingLineCreateInput, ProductPackagingLineUncheckedCreateInput>
    /**
     * In case the ProductPackagingLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPackagingLineUpdateInput, ProductPackagingLineUncheckedUpdateInput>
  }

  /**
   * ProductPackagingLine delete
   */
  export type ProductPackagingLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
    /**
     * Filter which ProductPackagingLine to delete.
     */
    where: ProductPackagingLineWhereUniqueInput
  }

  /**
   * ProductPackagingLine deleteMany
   */
  export type ProductPackagingLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPackagingLines to delete
     */
    where?: ProductPackagingLineWhereInput
    /**
     * Limit how many ProductPackagingLines to delete.
     */
    limit?: number
  }

  /**
   * ProductPackagingLine without action
   */
  export type ProductPackagingLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPackagingLine
     */
    select?: ProductPackagingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPackagingLine
     */
    omit?: ProductPackagingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPackagingLineInclude<ExtArgs> | null
  }


  /**
   * Model Tray
   */

  export type AggregateTray = {
    _count: TrayCountAggregateOutputType | null
    _avg: TrayAvgAggregateOutputType | null
    _sum: TraySumAggregateOutputType | null
    _min: TrayMinAggregateOutputType | null
    _max: TrayMaxAggregateOutputType | null
  }

  export type TrayAvgAggregateOutputType = {
    id: number | null
  }

  export type TraySumAggregateOutputType = {
    id: number | null
  }

  export type TrayMinAggregateOutputType = {
    id: number | null
    trayName: string | null
    dimensions: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrayMaxAggregateOutputType = {
    id: number | null
    trayName: string | null
    dimensions: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrayCountAggregateOutputType = {
    id: number
    trayName: number
    dimensions: number
    weight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrayAvgAggregateInputType = {
    id?: true
  }

  export type TraySumAggregateInputType = {
    id?: true
  }

  export type TrayMinAggregateInputType = {
    id?: true
    trayName?: true
    dimensions?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrayMaxAggregateInputType = {
    id?: true
    trayName?: true
    dimensions?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrayCountAggregateInputType = {
    id?: true
    trayName?: true
    dimensions?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tray to aggregate.
     */
    where?: TrayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trays to fetch.
     */
    orderBy?: TrayOrderByWithRelationInput | TrayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trays
    **/
    _count?: true | TrayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrayMaxAggregateInputType
  }

  export type GetTrayAggregateType<T extends TrayAggregateArgs> = {
        [P in keyof T & keyof AggregateTray]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTray[P]>
      : GetScalarType<T[P], AggregateTray[P]>
  }




  export type TrayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrayWhereInput
    orderBy?: TrayOrderByWithAggregationInput | TrayOrderByWithAggregationInput[]
    by: TrayScalarFieldEnum[] | TrayScalarFieldEnum
    having?: TrayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrayCountAggregateInputType | true
    _avg?: TrayAvgAggregateInputType
    _sum?: TraySumAggregateInputType
    _min?: TrayMinAggregateInputType
    _max?: TrayMaxAggregateInputType
  }

  export type TrayGroupByOutputType = {
    id: number
    trayName: string
    dimensions: string | null
    weight: string | null
    createdAt: Date
    updatedAt: Date
    _count: TrayCountAggregateOutputType | null
    _avg: TrayAvgAggregateOutputType | null
    _sum: TraySumAggregateOutputType | null
    _min: TrayMinAggregateOutputType | null
    _max: TrayMaxAggregateOutputType | null
  }

  type GetTrayGroupByPayload<T extends TrayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrayGroupByOutputType[P]>
            : GetScalarType<T[P], TrayGroupByOutputType[P]>
        }
      >
    >


  export type TraySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trayName?: boolean
    dimensions?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tray"]>

  export type TraySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trayName?: boolean
    dimensions?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tray"]>

  export type TraySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trayName?: boolean
    dimensions?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tray"]>

  export type TraySelectScalar = {
    id?: boolean
    trayName?: boolean
    dimensions?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trayName" | "dimensions" | "weight" | "createdAt" | "updatedAt", ExtArgs["result"]["tray"]>

  export type $TrayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tray"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trayName: string
      dimensions: string | null
      weight: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tray"]>
    composites: {}
  }

  type TrayGetPayload<S extends boolean | null | undefined | TrayDefaultArgs> = $Result.GetResult<Prisma.$TrayPayload, S>

  type TrayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrayCountAggregateInputType | true
    }

  export interface TrayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tray'], meta: { name: 'Tray' } }
    /**
     * Find zero or one Tray that matches the filter.
     * @param {TrayFindUniqueArgs} args - Arguments to find a Tray
     * @example
     * // Get one Tray
     * const tray = await prisma.tray.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrayFindUniqueArgs>(args: SelectSubset<T, TrayFindUniqueArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tray that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrayFindUniqueOrThrowArgs} args - Arguments to find a Tray
     * @example
     * // Get one Tray
     * const tray = await prisma.tray.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrayFindUniqueOrThrowArgs>(args: SelectSubset<T, TrayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tray that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayFindFirstArgs} args - Arguments to find a Tray
     * @example
     * // Get one Tray
     * const tray = await prisma.tray.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrayFindFirstArgs>(args?: SelectSubset<T, TrayFindFirstArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tray that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayFindFirstOrThrowArgs} args - Arguments to find a Tray
     * @example
     * // Get one Tray
     * const tray = await prisma.tray.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrayFindFirstOrThrowArgs>(args?: SelectSubset<T, TrayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trays
     * const trays = await prisma.tray.findMany()
     * 
     * // Get first 10 Trays
     * const trays = await prisma.tray.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trayWithIdOnly = await prisma.tray.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrayFindManyArgs>(args?: SelectSubset<T, TrayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tray.
     * @param {TrayCreateArgs} args - Arguments to create a Tray.
     * @example
     * // Create one Tray
     * const Tray = await prisma.tray.create({
     *   data: {
     *     // ... data to create a Tray
     *   }
     * })
     * 
     */
    create<T extends TrayCreateArgs>(args: SelectSubset<T, TrayCreateArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trays.
     * @param {TrayCreateManyArgs} args - Arguments to create many Trays.
     * @example
     * // Create many Trays
     * const tray = await prisma.tray.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrayCreateManyArgs>(args?: SelectSubset<T, TrayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trays and returns the data saved in the database.
     * @param {TrayCreateManyAndReturnArgs} args - Arguments to create many Trays.
     * @example
     * // Create many Trays
     * const tray = await prisma.tray.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trays and only return the `id`
     * const trayWithIdOnly = await prisma.tray.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrayCreateManyAndReturnArgs>(args?: SelectSubset<T, TrayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tray.
     * @param {TrayDeleteArgs} args - Arguments to delete one Tray.
     * @example
     * // Delete one Tray
     * const Tray = await prisma.tray.delete({
     *   where: {
     *     // ... filter to delete one Tray
     *   }
     * })
     * 
     */
    delete<T extends TrayDeleteArgs>(args: SelectSubset<T, TrayDeleteArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tray.
     * @param {TrayUpdateArgs} args - Arguments to update one Tray.
     * @example
     * // Update one Tray
     * const tray = await prisma.tray.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrayUpdateArgs>(args: SelectSubset<T, TrayUpdateArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trays.
     * @param {TrayDeleteManyArgs} args - Arguments to filter Trays to delete.
     * @example
     * // Delete a few Trays
     * const { count } = await prisma.tray.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrayDeleteManyArgs>(args?: SelectSubset<T, TrayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trays
     * const tray = await prisma.tray.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrayUpdateManyArgs>(args: SelectSubset<T, TrayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trays and returns the data updated in the database.
     * @param {TrayUpdateManyAndReturnArgs} args - Arguments to update many Trays.
     * @example
     * // Update many Trays
     * const tray = await prisma.tray.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trays and only return the `id`
     * const trayWithIdOnly = await prisma.tray.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrayUpdateManyAndReturnArgs>(args: SelectSubset<T, TrayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tray.
     * @param {TrayUpsertArgs} args - Arguments to update or create a Tray.
     * @example
     * // Update or create a Tray
     * const tray = await prisma.tray.upsert({
     *   create: {
     *     // ... data to create a Tray
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tray we want to update
     *   }
     * })
     */
    upsert<T extends TrayUpsertArgs>(args: SelectSubset<T, TrayUpsertArgs<ExtArgs>>): Prisma__TrayClient<$Result.GetResult<Prisma.$TrayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayCountArgs} args - Arguments to filter Trays to count.
     * @example
     * // Count the number of Trays
     * const count = await prisma.tray.count({
     *   where: {
     *     // ... the filter for the Trays we want to count
     *   }
     * })
    **/
    count<T extends TrayCountArgs>(
      args?: Subset<T, TrayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tray.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrayAggregateArgs>(args: Subset<T, TrayAggregateArgs>): Prisma.PrismaPromise<GetTrayAggregateType<T>>

    /**
     * Group by Tray.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrayGroupByArgs['orderBy'] }
        : { orderBy?: TrayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tray model
   */
  readonly fields: TrayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tray.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tray model
   */
  interface TrayFieldRefs {
    readonly id: FieldRef<"Tray", 'Int'>
    readonly trayName: FieldRef<"Tray", 'String'>
    readonly dimensions: FieldRef<"Tray", 'String'>
    readonly weight: FieldRef<"Tray", 'String'>
    readonly createdAt: FieldRef<"Tray", 'DateTime'>
    readonly updatedAt: FieldRef<"Tray", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tray findUnique
   */
  export type TrayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter, which Tray to fetch.
     */
    where: TrayWhereUniqueInput
  }

  /**
   * Tray findUniqueOrThrow
   */
  export type TrayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter, which Tray to fetch.
     */
    where: TrayWhereUniqueInput
  }

  /**
   * Tray findFirst
   */
  export type TrayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter, which Tray to fetch.
     */
    where?: TrayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trays to fetch.
     */
    orderBy?: TrayOrderByWithRelationInput | TrayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trays.
     */
    cursor?: TrayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trays.
     */
    distinct?: TrayScalarFieldEnum | TrayScalarFieldEnum[]
  }

  /**
   * Tray findFirstOrThrow
   */
  export type TrayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter, which Tray to fetch.
     */
    where?: TrayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trays to fetch.
     */
    orderBy?: TrayOrderByWithRelationInput | TrayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trays.
     */
    cursor?: TrayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trays.
     */
    distinct?: TrayScalarFieldEnum | TrayScalarFieldEnum[]
  }

  /**
   * Tray findMany
   */
  export type TrayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter, which Trays to fetch.
     */
    where?: TrayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trays to fetch.
     */
    orderBy?: TrayOrderByWithRelationInput | TrayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trays.
     */
    cursor?: TrayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trays.
     */
    distinct?: TrayScalarFieldEnum | TrayScalarFieldEnum[]
  }

  /**
   * Tray create
   */
  export type TrayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * The data needed to create a Tray.
     */
    data: XOR<TrayCreateInput, TrayUncheckedCreateInput>
  }

  /**
   * Tray createMany
   */
  export type TrayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trays.
     */
    data: TrayCreateManyInput | TrayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tray createManyAndReturn
   */
  export type TrayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * The data used to create many Trays.
     */
    data: TrayCreateManyInput | TrayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tray update
   */
  export type TrayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * The data needed to update a Tray.
     */
    data: XOR<TrayUpdateInput, TrayUncheckedUpdateInput>
    /**
     * Choose, which Tray to update.
     */
    where: TrayWhereUniqueInput
  }

  /**
   * Tray updateMany
   */
  export type TrayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trays.
     */
    data: XOR<TrayUpdateManyMutationInput, TrayUncheckedUpdateManyInput>
    /**
     * Filter which Trays to update
     */
    where?: TrayWhereInput
    /**
     * Limit how many Trays to update.
     */
    limit?: number
  }

  /**
   * Tray updateManyAndReturn
   */
  export type TrayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * The data used to update Trays.
     */
    data: XOR<TrayUpdateManyMutationInput, TrayUncheckedUpdateManyInput>
    /**
     * Filter which Trays to update
     */
    where?: TrayWhereInput
    /**
     * Limit how many Trays to update.
     */
    limit?: number
  }

  /**
   * Tray upsert
   */
  export type TrayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * The filter to search for the Tray to update in case it exists.
     */
    where: TrayWhereUniqueInput
    /**
     * In case the Tray found by the `where` argument doesn't exist, create a new Tray with this data.
     */
    create: XOR<TrayCreateInput, TrayUncheckedCreateInput>
    /**
     * In case the Tray was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrayUpdateInput, TrayUncheckedUpdateInput>
  }

  /**
   * Tray delete
   */
  export type TrayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
    /**
     * Filter which Tray to delete.
     */
    where: TrayWhereUniqueInput
  }

  /**
   * Tray deleteMany
   */
  export type TrayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trays to delete
     */
    where?: TrayWhereInput
    /**
     * Limit how many Trays to delete.
     */
    limit?: number
  }

  /**
   * Tray without action
   */
  export type TrayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tray
     */
    select?: TraySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tray
     */
    omit?: TrayOmit<ExtArgs> | null
  }


  /**
   * Model Garnish
   */

  export type AggregateGarnish = {
    _count: GarnishCountAggregateOutputType | null
    _avg: GarnishAvgAggregateOutputType | null
    _sum: GarnishSumAggregateOutputType | null
    _min: GarnishMinAggregateOutputType | null
    _max: GarnishMaxAggregateOutputType | null
  }

  export type GarnishAvgAggregateOutputType = {
    id: number | null
  }

  export type GarnishSumAggregateOutputType = {
    id: number | null
  }

  export type GarnishMinAggregateOutputType = {
    id: number | null
    name: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GarnishMaxAggregateOutputType = {
    id: number | null
    name: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GarnishCountAggregateOutputType = {
    id: number
    name: number
    weight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GarnishAvgAggregateInputType = {
    id?: true
  }

  export type GarnishSumAggregateInputType = {
    id?: true
  }

  export type GarnishMinAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GarnishMaxAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GarnishCountAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GarnishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garnish to aggregate.
     */
    where?: GarnishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garnishes to fetch.
     */
    orderBy?: GarnishOrderByWithRelationInput | GarnishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GarnishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garnishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garnishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Garnishes
    **/
    _count?: true | GarnishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GarnishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GarnishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GarnishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GarnishMaxAggregateInputType
  }

  export type GetGarnishAggregateType<T extends GarnishAggregateArgs> = {
        [P in keyof T & keyof AggregateGarnish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarnish[P]>
      : GetScalarType<T[P], AggregateGarnish[P]>
  }




  export type GarnishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarnishWhereInput
    orderBy?: GarnishOrderByWithAggregationInput | GarnishOrderByWithAggregationInput[]
    by: GarnishScalarFieldEnum[] | GarnishScalarFieldEnum
    having?: GarnishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GarnishCountAggregateInputType | true
    _avg?: GarnishAvgAggregateInputType
    _sum?: GarnishSumAggregateInputType
    _min?: GarnishMinAggregateInputType
    _max?: GarnishMaxAggregateInputType
  }

  export type GarnishGroupByOutputType = {
    id: number
    name: string
    weight: string | null
    createdAt: Date
    updatedAt: Date
    _count: GarnishCountAggregateOutputType | null
    _avg: GarnishAvgAggregateOutputType | null
    _sum: GarnishSumAggregateOutputType | null
    _min: GarnishMinAggregateOutputType | null
    _max: GarnishMaxAggregateOutputType | null
  }

  type GetGarnishGroupByPayload<T extends GarnishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GarnishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GarnishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GarnishGroupByOutputType[P]>
            : GetScalarType<T[P], GarnishGroupByOutputType[P]>
        }
      >
    >


  export type GarnishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["garnish"]>

  export type GarnishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["garnish"]>

  export type GarnishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["garnish"]>

  export type GarnishSelectScalar = {
    id?: boolean
    name?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GarnishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "weight" | "createdAt" | "updatedAt", ExtArgs["result"]["garnish"]>

  export type $GarnishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Garnish"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      weight: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["garnish"]>
    composites: {}
  }

  type GarnishGetPayload<S extends boolean | null | undefined | GarnishDefaultArgs> = $Result.GetResult<Prisma.$GarnishPayload, S>

  type GarnishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GarnishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GarnishCountAggregateInputType | true
    }

  export interface GarnishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Garnish'], meta: { name: 'Garnish' } }
    /**
     * Find zero or one Garnish that matches the filter.
     * @param {GarnishFindUniqueArgs} args - Arguments to find a Garnish
     * @example
     * // Get one Garnish
     * const garnish = await prisma.garnish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GarnishFindUniqueArgs>(args: SelectSubset<T, GarnishFindUniqueArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Garnish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GarnishFindUniqueOrThrowArgs} args - Arguments to find a Garnish
     * @example
     * // Get one Garnish
     * const garnish = await prisma.garnish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GarnishFindUniqueOrThrowArgs>(args: SelectSubset<T, GarnishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garnish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishFindFirstArgs} args - Arguments to find a Garnish
     * @example
     * // Get one Garnish
     * const garnish = await prisma.garnish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GarnishFindFirstArgs>(args?: SelectSubset<T, GarnishFindFirstArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garnish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishFindFirstOrThrowArgs} args - Arguments to find a Garnish
     * @example
     * // Get one Garnish
     * const garnish = await prisma.garnish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GarnishFindFirstOrThrowArgs>(args?: SelectSubset<T, GarnishFindFirstOrThrowArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Garnishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Garnishes
     * const garnishes = await prisma.garnish.findMany()
     * 
     * // Get first 10 Garnishes
     * const garnishes = await prisma.garnish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const garnishWithIdOnly = await prisma.garnish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GarnishFindManyArgs>(args?: SelectSubset<T, GarnishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Garnish.
     * @param {GarnishCreateArgs} args - Arguments to create a Garnish.
     * @example
     * // Create one Garnish
     * const Garnish = await prisma.garnish.create({
     *   data: {
     *     // ... data to create a Garnish
     *   }
     * })
     * 
     */
    create<T extends GarnishCreateArgs>(args: SelectSubset<T, GarnishCreateArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Garnishes.
     * @param {GarnishCreateManyArgs} args - Arguments to create many Garnishes.
     * @example
     * // Create many Garnishes
     * const garnish = await prisma.garnish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GarnishCreateManyArgs>(args?: SelectSubset<T, GarnishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Garnishes and returns the data saved in the database.
     * @param {GarnishCreateManyAndReturnArgs} args - Arguments to create many Garnishes.
     * @example
     * // Create many Garnishes
     * const garnish = await prisma.garnish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Garnishes and only return the `id`
     * const garnishWithIdOnly = await prisma.garnish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GarnishCreateManyAndReturnArgs>(args?: SelectSubset<T, GarnishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Garnish.
     * @param {GarnishDeleteArgs} args - Arguments to delete one Garnish.
     * @example
     * // Delete one Garnish
     * const Garnish = await prisma.garnish.delete({
     *   where: {
     *     // ... filter to delete one Garnish
     *   }
     * })
     * 
     */
    delete<T extends GarnishDeleteArgs>(args: SelectSubset<T, GarnishDeleteArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Garnish.
     * @param {GarnishUpdateArgs} args - Arguments to update one Garnish.
     * @example
     * // Update one Garnish
     * const garnish = await prisma.garnish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GarnishUpdateArgs>(args: SelectSubset<T, GarnishUpdateArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Garnishes.
     * @param {GarnishDeleteManyArgs} args - Arguments to filter Garnishes to delete.
     * @example
     * // Delete a few Garnishes
     * const { count } = await prisma.garnish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GarnishDeleteManyArgs>(args?: SelectSubset<T, GarnishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Garnishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Garnishes
     * const garnish = await prisma.garnish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GarnishUpdateManyArgs>(args: SelectSubset<T, GarnishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Garnishes and returns the data updated in the database.
     * @param {GarnishUpdateManyAndReturnArgs} args - Arguments to update many Garnishes.
     * @example
     * // Update many Garnishes
     * const garnish = await prisma.garnish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Garnishes and only return the `id`
     * const garnishWithIdOnly = await prisma.garnish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GarnishUpdateManyAndReturnArgs>(args: SelectSubset<T, GarnishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Garnish.
     * @param {GarnishUpsertArgs} args - Arguments to update or create a Garnish.
     * @example
     * // Update or create a Garnish
     * const garnish = await prisma.garnish.upsert({
     *   create: {
     *     // ... data to create a Garnish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garnish we want to update
     *   }
     * })
     */
    upsert<T extends GarnishUpsertArgs>(args: SelectSubset<T, GarnishUpsertArgs<ExtArgs>>): Prisma__GarnishClient<$Result.GetResult<Prisma.$GarnishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Garnishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishCountArgs} args - Arguments to filter Garnishes to count.
     * @example
     * // Count the number of Garnishes
     * const count = await prisma.garnish.count({
     *   where: {
     *     // ... the filter for the Garnishes we want to count
     *   }
     * })
    **/
    count<T extends GarnishCountArgs>(
      args?: Subset<T, GarnishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GarnishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Garnish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GarnishAggregateArgs>(args: Subset<T, GarnishAggregateArgs>): Prisma.PrismaPromise<GetGarnishAggregateType<T>>

    /**
     * Group by Garnish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarnishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GarnishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GarnishGroupByArgs['orderBy'] }
        : { orderBy?: GarnishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GarnishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGarnishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Garnish model
   */
  readonly fields: GarnishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Garnish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GarnishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Garnish model
   */
  interface GarnishFieldRefs {
    readonly id: FieldRef<"Garnish", 'Int'>
    readonly name: FieldRef<"Garnish", 'String'>
    readonly weight: FieldRef<"Garnish", 'String'>
    readonly createdAt: FieldRef<"Garnish", 'DateTime'>
    readonly updatedAt: FieldRef<"Garnish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Garnish findUnique
   */
  export type GarnishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter, which Garnish to fetch.
     */
    where: GarnishWhereUniqueInput
  }

  /**
   * Garnish findUniqueOrThrow
   */
  export type GarnishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter, which Garnish to fetch.
     */
    where: GarnishWhereUniqueInput
  }

  /**
   * Garnish findFirst
   */
  export type GarnishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter, which Garnish to fetch.
     */
    where?: GarnishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garnishes to fetch.
     */
    orderBy?: GarnishOrderByWithRelationInput | GarnishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garnishes.
     */
    cursor?: GarnishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garnishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garnishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garnishes.
     */
    distinct?: GarnishScalarFieldEnum | GarnishScalarFieldEnum[]
  }

  /**
   * Garnish findFirstOrThrow
   */
  export type GarnishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter, which Garnish to fetch.
     */
    where?: GarnishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garnishes to fetch.
     */
    orderBy?: GarnishOrderByWithRelationInput | GarnishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garnishes.
     */
    cursor?: GarnishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garnishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garnishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garnishes.
     */
    distinct?: GarnishScalarFieldEnum | GarnishScalarFieldEnum[]
  }

  /**
   * Garnish findMany
   */
  export type GarnishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter, which Garnishes to fetch.
     */
    where?: GarnishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garnishes to fetch.
     */
    orderBy?: GarnishOrderByWithRelationInput | GarnishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Garnishes.
     */
    cursor?: GarnishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garnishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garnishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garnishes.
     */
    distinct?: GarnishScalarFieldEnum | GarnishScalarFieldEnum[]
  }

  /**
   * Garnish create
   */
  export type GarnishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * The data needed to create a Garnish.
     */
    data: XOR<GarnishCreateInput, GarnishUncheckedCreateInput>
  }

  /**
   * Garnish createMany
   */
  export type GarnishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Garnishes.
     */
    data: GarnishCreateManyInput | GarnishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garnish createManyAndReturn
   */
  export type GarnishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * The data used to create many Garnishes.
     */
    data: GarnishCreateManyInput | GarnishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garnish update
   */
  export type GarnishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * The data needed to update a Garnish.
     */
    data: XOR<GarnishUpdateInput, GarnishUncheckedUpdateInput>
    /**
     * Choose, which Garnish to update.
     */
    where: GarnishWhereUniqueInput
  }

  /**
   * Garnish updateMany
   */
  export type GarnishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Garnishes.
     */
    data: XOR<GarnishUpdateManyMutationInput, GarnishUncheckedUpdateManyInput>
    /**
     * Filter which Garnishes to update
     */
    where?: GarnishWhereInput
    /**
     * Limit how many Garnishes to update.
     */
    limit?: number
  }

  /**
   * Garnish updateManyAndReturn
   */
  export type GarnishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * The data used to update Garnishes.
     */
    data: XOR<GarnishUpdateManyMutationInput, GarnishUncheckedUpdateManyInput>
    /**
     * Filter which Garnishes to update
     */
    where?: GarnishWhereInput
    /**
     * Limit how many Garnishes to update.
     */
    limit?: number
  }

  /**
   * Garnish upsert
   */
  export type GarnishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * The filter to search for the Garnish to update in case it exists.
     */
    where: GarnishWhereUniqueInput
    /**
     * In case the Garnish found by the `where` argument doesn't exist, create a new Garnish with this data.
     */
    create: XOR<GarnishCreateInput, GarnishUncheckedCreateInput>
    /**
     * In case the Garnish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GarnishUpdateInput, GarnishUncheckedUpdateInput>
  }

  /**
   * Garnish delete
   */
  export type GarnishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
    /**
     * Filter which Garnish to delete.
     */
    where: GarnishWhereUniqueInput
  }

  /**
   * Garnish deleteMany
   */
  export type GarnishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garnishes to delete
     */
    where?: GarnishWhereInput
    /**
     * Limit how many Garnishes to delete.
     */
    limit?: number
  }

  /**
   * Garnish without action
   */
  export type GarnishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garnish
     */
    select?: GarnishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garnish
     */
    omit?: GarnishOmit<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    id: number | null
    noOfUnits: number | null
  }

  export type UnitSumAggregateOutputType = {
    id: number | null
    noOfUnits: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: number | null
    name: string | null
    noOfUnits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    noOfUnits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    noOfUnits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    id?: true
    noOfUnits?: true
  }

  export type UnitSumAggregateInputType = {
    id?: true
    noOfUnits?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    noOfUnits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    noOfUnits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    noOfUnits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: number
    name: string
    noOfUnits: number
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfUnits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfUnits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfUnits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    noOfUnits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "noOfUnits" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      noOfUnits: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'Int'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly noOfUnits: FieldRef<"Unit", 'Int'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
  }


  /**
   * Model NutritionalInfo
   */

  export type AggregateNutritionalInfo = {
    _count: NutritionalInfoCountAggregateOutputType | null
    _avg: NutritionalInfoAvgAggregateOutputType | null
    _sum: NutritionalInfoSumAggregateOutputType | null
    _min: NutritionalInfoMinAggregateOutputType | null
    _max: NutritionalInfoMaxAggregateOutputType | null
  }

  export type NutritionalInfoAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    calories: number | null
    fat: number | null
    protein: number | null
    sugar: number | null
    fibre: number | null
    salt: number | null
  }

  export type NutritionalInfoSumAggregateOutputType = {
    id: number | null
    productId: number | null
    calories: number | null
    fat: number | null
    protein: number | null
    sugar: number | null
    fibre: number | null
    salt: number | null
  }

  export type NutritionalInfoMinAggregateOutputType = {
    id: number | null
    productId: number | null
    calories: number | null
    fat: number | null
    protein: number | null
    sugar: number | null
    fibre: number | null
    salt: number | null
  }

  export type NutritionalInfoMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    calories: number | null
    fat: number | null
    protein: number | null
    sugar: number | null
    fibre: number | null
    salt: number | null
  }

  export type NutritionalInfoCountAggregateOutputType = {
    id: number
    productId: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
    _all: number
  }


  export type NutritionalInfoAvgAggregateInputType = {
    id?: true
    productId?: true
    calories?: true
    fat?: true
    protein?: true
    sugar?: true
    fibre?: true
    salt?: true
  }

  export type NutritionalInfoSumAggregateInputType = {
    id?: true
    productId?: true
    calories?: true
    fat?: true
    protein?: true
    sugar?: true
    fibre?: true
    salt?: true
  }

  export type NutritionalInfoMinAggregateInputType = {
    id?: true
    productId?: true
    calories?: true
    fat?: true
    protein?: true
    sugar?: true
    fibre?: true
    salt?: true
  }

  export type NutritionalInfoMaxAggregateInputType = {
    id?: true
    productId?: true
    calories?: true
    fat?: true
    protein?: true
    sugar?: true
    fibre?: true
    salt?: true
  }

  export type NutritionalInfoCountAggregateInputType = {
    id?: true
    productId?: true
    calories?: true
    fat?: true
    protein?: true
    sugar?: true
    fibre?: true
    salt?: true
    _all?: true
  }

  export type NutritionalInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionalInfo to aggregate.
     */
    where?: NutritionalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalInfos to fetch.
     */
    orderBy?: NutritionalInfoOrderByWithRelationInput | NutritionalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NutritionalInfos
    **/
    _count?: true | NutritionalInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionalInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionalInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionalInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionalInfoMaxAggregateInputType
  }

  export type GetNutritionalInfoAggregateType<T extends NutritionalInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritionalInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritionalInfo[P]>
      : GetScalarType<T[P], AggregateNutritionalInfo[P]>
  }




  export type NutritionalInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionalInfoWhereInput
    orderBy?: NutritionalInfoOrderByWithAggregationInput | NutritionalInfoOrderByWithAggregationInput[]
    by: NutritionalInfoScalarFieldEnum[] | NutritionalInfoScalarFieldEnum
    having?: NutritionalInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionalInfoCountAggregateInputType | true
    _avg?: NutritionalInfoAvgAggregateInputType
    _sum?: NutritionalInfoSumAggregateInputType
    _min?: NutritionalInfoMinAggregateInputType
    _max?: NutritionalInfoMaxAggregateInputType
  }

  export type NutritionalInfoGroupByOutputType = {
    id: number
    productId: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
    _count: NutritionalInfoCountAggregateOutputType | null
    _avg: NutritionalInfoAvgAggregateOutputType | null
    _sum: NutritionalInfoSumAggregateOutputType | null
    _min: NutritionalInfoMinAggregateOutputType | null
    _max: NutritionalInfoMaxAggregateOutputType | null
  }

  type GetNutritionalInfoGroupByPayload<T extends NutritionalInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionalInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionalInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionalInfoGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionalInfoGroupByOutputType[P]>
        }
      >
    >


  export type NutritionalInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    calories?: boolean
    fat?: boolean
    protein?: boolean
    sugar?: boolean
    fibre?: boolean
    salt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalInfo"]>

  export type NutritionalInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    calories?: boolean
    fat?: boolean
    protein?: boolean
    sugar?: boolean
    fibre?: boolean
    salt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalInfo"]>

  export type NutritionalInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    calories?: boolean
    fat?: boolean
    protein?: boolean
    sugar?: boolean
    fibre?: boolean
    salt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalInfo"]>

  export type NutritionalInfoSelectScalar = {
    id?: boolean
    productId?: boolean
    calories?: boolean
    fat?: boolean
    protein?: boolean
    sugar?: boolean
    fibre?: boolean
    salt?: boolean
  }

  export type NutritionalInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "calories" | "fat" | "protein" | "sugar" | "fibre" | "salt", ExtArgs["result"]["nutritionalInfo"]>
  export type NutritionalInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type NutritionalInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type NutritionalInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $NutritionalInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutritionalInfo"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      calories: number
      fat: number
      protein: number
      sugar: number
      fibre: number
      salt: number
    }, ExtArgs["result"]["nutritionalInfo"]>
    composites: {}
  }

  type NutritionalInfoGetPayload<S extends boolean | null | undefined | NutritionalInfoDefaultArgs> = $Result.GetResult<Prisma.$NutritionalInfoPayload, S>

  type NutritionalInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionalInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionalInfoCountAggregateInputType | true
    }

  export interface NutritionalInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NutritionalInfo'], meta: { name: 'NutritionalInfo' } }
    /**
     * Find zero or one NutritionalInfo that matches the filter.
     * @param {NutritionalInfoFindUniqueArgs} args - Arguments to find a NutritionalInfo
     * @example
     * // Get one NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionalInfoFindUniqueArgs>(args: SelectSubset<T, NutritionalInfoFindUniqueArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NutritionalInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionalInfoFindUniqueOrThrowArgs} args - Arguments to find a NutritionalInfo
     * @example
     * // Get one NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionalInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionalInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionalInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoFindFirstArgs} args - Arguments to find a NutritionalInfo
     * @example
     * // Get one NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionalInfoFindFirstArgs>(args?: SelectSubset<T, NutritionalInfoFindFirstArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionalInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoFindFirstOrThrowArgs} args - Arguments to find a NutritionalInfo
     * @example
     * // Get one NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionalInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionalInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NutritionalInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NutritionalInfos
     * const nutritionalInfos = await prisma.nutritionalInfo.findMany()
     * 
     * // Get first 10 NutritionalInfos
     * const nutritionalInfos = await prisma.nutritionalInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionalInfoWithIdOnly = await prisma.nutritionalInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionalInfoFindManyArgs>(args?: SelectSubset<T, NutritionalInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NutritionalInfo.
     * @param {NutritionalInfoCreateArgs} args - Arguments to create a NutritionalInfo.
     * @example
     * // Create one NutritionalInfo
     * const NutritionalInfo = await prisma.nutritionalInfo.create({
     *   data: {
     *     // ... data to create a NutritionalInfo
     *   }
     * })
     * 
     */
    create<T extends NutritionalInfoCreateArgs>(args: SelectSubset<T, NutritionalInfoCreateArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NutritionalInfos.
     * @param {NutritionalInfoCreateManyArgs} args - Arguments to create many NutritionalInfos.
     * @example
     * // Create many NutritionalInfos
     * const nutritionalInfo = await prisma.nutritionalInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionalInfoCreateManyArgs>(args?: SelectSubset<T, NutritionalInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NutritionalInfos and returns the data saved in the database.
     * @param {NutritionalInfoCreateManyAndReturnArgs} args - Arguments to create many NutritionalInfos.
     * @example
     * // Create many NutritionalInfos
     * const nutritionalInfo = await prisma.nutritionalInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NutritionalInfos and only return the `id`
     * const nutritionalInfoWithIdOnly = await prisma.nutritionalInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionalInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionalInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NutritionalInfo.
     * @param {NutritionalInfoDeleteArgs} args - Arguments to delete one NutritionalInfo.
     * @example
     * // Delete one NutritionalInfo
     * const NutritionalInfo = await prisma.nutritionalInfo.delete({
     *   where: {
     *     // ... filter to delete one NutritionalInfo
     *   }
     * })
     * 
     */
    delete<T extends NutritionalInfoDeleteArgs>(args: SelectSubset<T, NutritionalInfoDeleteArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NutritionalInfo.
     * @param {NutritionalInfoUpdateArgs} args - Arguments to update one NutritionalInfo.
     * @example
     * // Update one NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionalInfoUpdateArgs>(args: SelectSubset<T, NutritionalInfoUpdateArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NutritionalInfos.
     * @param {NutritionalInfoDeleteManyArgs} args - Arguments to filter NutritionalInfos to delete.
     * @example
     * // Delete a few NutritionalInfos
     * const { count } = await prisma.nutritionalInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionalInfoDeleteManyArgs>(args?: SelectSubset<T, NutritionalInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NutritionalInfos
     * const nutritionalInfo = await prisma.nutritionalInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionalInfoUpdateManyArgs>(args: SelectSubset<T, NutritionalInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionalInfos and returns the data updated in the database.
     * @param {NutritionalInfoUpdateManyAndReturnArgs} args - Arguments to update many NutritionalInfos.
     * @example
     * // Update many NutritionalInfos
     * const nutritionalInfo = await prisma.nutritionalInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NutritionalInfos and only return the `id`
     * const nutritionalInfoWithIdOnly = await prisma.nutritionalInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NutritionalInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionalInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NutritionalInfo.
     * @param {NutritionalInfoUpsertArgs} args - Arguments to update or create a NutritionalInfo.
     * @example
     * // Update or create a NutritionalInfo
     * const nutritionalInfo = await prisma.nutritionalInfo.upsert({
     *   create: {
     *     // ... data to create a NutritionalInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NutritionalInfo we want to update
     *   }
     * })
     */
    upsert<T extends NutritionalInfoUpsertArgs>(args: SelectSubset<T, NutritionalInfoUpsertArgs<ExtArgs>>): Prisma__NutritionalInfoClient<$Result.GetResult<Prisma.$NutritionalInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NutritionalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoCountArgs} args - Arguments to filter NutritionalInfos to count.
     * @example
     * // Count the number of NutritionalInfos
     * const count = await prisma.nutritionalInfo.count({
     *   where: {
     *     // ... the filter for the NutritionalInfos we want to count
     *   }
     * })
    **/
    count<T extends NutritionalInfoCountArgs>(
      args?: Subset<T, NutritionalInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionalInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NutritionalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutritionalInfoAggregateArgs>(args: Subset<T, NutritionalInfoAggregateArgs>): Prisma.PrismaPromise<GetNutritionalInfoAggregateType<T>>

    /**
     * Group by NutritionalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutritionalInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionalInfoGroupByArgs['orderBy'] }
        : { orderBy?: NutritionalInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionalInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionalInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NutritionalInfo model
   */
  readonly fields: NutritionalInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NutritionalInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionalInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NutritionalInfo model
   */
  interface NutritionalInfoFieldRefs {
    readonly id: FieldRef<"NutritionalInfo", 'Int'>
    readonly productId: FieldRef<"NutritionalInfo", 'Int'>
    readonly calories: FieldRef<"NutritionalInfo", 'Float'>
    readonly fat: FieldRef<"NutritionalInfo", 'Float'>
    readonly protein: FieldRef<"NutritionalInfo", 'Float'>
    readonly sugar: FieldRef<"NutritionalInfo", 'Float'>
    readonly fibre: FieldRef<"NutritionalInfo", 'Float'>
    readonly salt: FieldRef<"NutritionalInfo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * NutritionalInfo findUnique
   */
  export type NutritionalInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalInfo to fetch.
     */
    where: NutritionalInfoWhereUniqueInput
  }

  /**
   * NutritionalInfo findUniqueOrThrow
   */
  export type NutritionalInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalInfo to fetch.
     */
    where: NutritionalInfoWhereUniqueInput
  }

  /**
   * NutritionalInfo findFirst
   */
  export type NutritionalInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalInfo to fetch.
     */
    where?: NutritionalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalInfos to fetch.
     */
    orderBy?: NutritionalInfoOrderByWithRelationInput | NutritionalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionalInfos.
     */
    cursor?: NutritionalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionalInfos.
     */
    distinct?: NutritionalInfoScalarFieldEnum | NutritionalInfoScalarFieldEnum[]
  }

  /**
   * NutritionalInfo findFirstOrThrow
   */
  export type NutritionalInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalInfo to fetch.
     */
    where?: NutritionalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalInfos to fetch.
     */
    orderBy?: NutritionalInfoOrderByWithRelationInput | NutritionalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionalInfos.
     */
    cursor?: NutritionalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionalInfos.
     */
    distinct?: NutritionalInfoScalarFieldEnum | NutritionalInfoScalarFieldEnum[]
  }

  /**
   * NutritionalInfo findMany
   */
  export type NutritionalInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalInfos to fetch.
     */
    where?: NutritionalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalInfos to fetch.
     */
    orderBy?: NutritionalInfoOrderByWithRelationInput | NutritionalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NutritionalInfos.
     */
    cursor?: NutritionalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionalInfos.
     */
    distinct?: NutritionalInfoScalarFieldEnum | NutritionalInfoScalarFieldEnum[]
  }

  /**
   * NutritionalInfo create
   */
  export type NutritionalInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a NutritionalInfo.
     */
    data: XOR<NutritionalInfoCreateInput, NutritionalInfoUncheckedCreateInput>
  }

  /**
   * NutritionalInfo createMany
   */
  export type NutritionalInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NutritionalInfos.
     */
    data: NutritionalInfoCreateManyInput | NutritionalInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NutritionalInfo createManyAndReturn
   */
  export type NutritionalInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * The data used to create many NutritionalInfos.
     */
    data: NutritionalInfoCreateManyInput | NutritionalInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionalInfo update
   */
  export type NutritionalInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a NutritionalInfo.
     */
    data: XOR<NutritionalInfoUpdateInput, NutritionalInfoUncheckedUpdateInput>
    /**
     * Choose, which NutritionalInfo to update.
     */
    where: NutritionalInfoWhereUniqueInput
  }

  /**
   * NutritionalInfo updateMany
   */
  export type NutritionalInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NutritionalInfos.
     */
    data: XOR<NutritionalInfoUpdateManyMutationInput, NutritionalInfoUncheckedUpdateManyInput>
    /**
     * Filter which NutritionalInfos to update
     */
    where?: NutritionalInfoWhereInput
    /**
     * Limit how many NutritionalInfos to update.
     */
    limit?: number
  }

  /**
   * NutritionalInfo updateManyAndReturn
   */
  export type NutritionalInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * The data used to update NutritionalInfos.
     */
    data: XOR<NutritionalInfoUpdateManyMutationInput, NutritionalInfoUncheckedUpdateManyInput>
    /**
     * Filter which NutritionalInfos to update
     */
    where?: NutritionalInfoWhereInput
    /**
     * Limit how many NutritionalInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionalInfo upsert
   */
  export type NutritionalInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the NutritionalInfo to update in case it exists.
     */
    where: NutritionalInfoWhereUniqueInput
    /**
     * In case the NutritionalInfo found by the `where` argument doesn't exist, create a new NutritionalInfo with this data.
     */
    create: XOR<NutritionalInfoCreateInput, NutritionalInfoUncheckedCreateInput>
    /**
     * In case the NutritionalInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionalInfoUpdateInput, NutritionalInfoUncheckedUpdateInput>
  }

  /**
   * NutritionalInfo delete
   */
  export type NutritionalInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
    /**
     * Filter which NutritionalInfo to delete.
     */
    where: NutritionalInfoWhereUniqueInput
  }

  /**
   * NutritionalInfo deleteMany
   */
  export type NutritionalInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionalInfos to delete
     */
    where?: NutritionalInfoWhereInput
    /**
     * Limit how many NutritionalInfos to delete.
     */
    limit?: number
  }

  /**
   * NutritionalInfo without action
   */
  export type NutritionalInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalInfo
     */
    select?: NutritionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalInfo
     */
    omit?: NutritionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalInfoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    kind: 'kind',
    supplyType: 'supplyType',
    processType: 'processType',
    baseUnit: 'baseUnit',
    allergenDeclaration: 'allergenDeclaration',
    origin: 'origin',
    manufacturer: 'manufacturer',
    defaultSupplierId: 'defaultSupplierId',
    packSizeDescription: 'packSizeDescription',
    netContentDescription: 'netContentDescription',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemCodeSequenceScalarFieldEnum: {
    prefix: 'prefix',
    nextNumber: 'nextNumber',
    updatedAt: 'updatedAt'
  };

  export type ItemCodeSequenceScalarFieldEnum = (typeof ItemCodeSequenceScalarFieldEnum)[keyof typeof ItemCodeSequenceScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productCode: 'productCode',
    name: 'name',
    description: 'description',
    image: 'image',
    productWeight: 'productWeight',
    netWeightG: 'netWeightG',
    price: 'price',
    companyId: 'companyId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    purpose: 'purpose',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const RecipeRevisionScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    revision: 'revision',
    status: 'status',
    referenceQuantity: 'referenceQuantity',
    referenceUnit: 'referenceUnit',
    outputItemId: 'outputItemId',
    processType: 'processType',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    approvedAt: 'approvedAt',
    approvedById: 'approvedById',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecipeRevisionScalarFieldEnum = (typeof RecipeRevisionScalarFieldEnum)[keyof typeof RecipeRevisionScalarFieldEnum]


  export const RecipeLineScalarFieldEnum: {
    id: 'id',
    recipeRevisionId: 'recipeRevisionId',
    lineNumber: 'lineNumber',
    componentItemId: 'componentItemId',
    quantity: 'quantity',
    unit: 'unit',
    processLossPercent: 'processLossPercent',
    notes: 'notes'
  };

  export type RecipeLineScalarFieldEnum = (typeof RecipeLineScalarFieldEnum)[keyof typeof RecipeLineScalarFieldEnum]


  export const ProductRecipeAssignmentScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    recipeRevisionId: 'recipeRevisionId',
    portionQuantity: 'portionQuantity',
    portionUnit: 'portionUnit',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt'
  };

  export type ProductRecipeAssignmentScalarFieldEnum = (typeof ProductRecipeAssignmentScalarFieldEnum)[keyof typeof ProductRecipeAssignmentScalarFieldEnum]


  export const ProductPackagingLineScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    itemId: 'itemId',
    quantity: 'quantity',
    unit: 'unit',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo'
  };

  export type ProductPackagingLineScalarFieldEnum = (typeof ProductPackagingLineScalarFieldEnum)[keyof typeof ProductPackagingLineScalarFieldEnum]


  export const TrayScalarFieldEnum: {
    id: 'id',
    trayName: 'trayName',
    dimensions: 'dimensions',
    weight: 'weight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrayScalarFieldEnum = (typeof TrayScalarFieldEnum)[keyof typeof TrayScalarFieldEnum]


  export const GarnishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    weight: 'weight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GarnishScalarFieldEnum = (typeof GarnishScalarFieldEnum)[keyof typeof GarnishScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    noOfUnits: 'noOfUnits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const NutritionalInfoScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    calories: 'calories',
    fat: 'fat',
    protein: 'protein',
    sugar: 'sugar',
    fibre: 'fibre',
    salt: 'salt'
  };

  export type NutritionalInfoScalarFieldEnum = (typeof NutritionalInfoScalarFieldEnum)[keyof typeof NutritionalInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ItemKind'
   */
  export type EnumItemKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemKind'>
    


  /**
   * Reference to a field of type 'ItemKind[]'
   */
  export type ListEnumItemKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemKind[]'>
    


  /**
   * Reference to a field of type 'SupplyType'
   */
  export type EnumSupplyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplyType'>
    


  /**
   * Reference to a field of type 'SupplyType[]'
   */
  export type ListEnumSupplyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplyType[]'>
    


  /**
   * Reference to a field of type 'ProcessType'
   */
  export type EnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType'>
    


  /**
   * Reference to a field of type 'ProcessType[]'
   */
  export type ListEnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType[]'>
    


  /**
   * Reference to a field of type 'UnitOfMeasure'
   */
  export type EnumUnitOfMeasureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitOfMeasure'>
    


  /**
   * Reference to a field of type 'UnitOfMeasure[]'
   */
  export type ListEnumUnitOfMeasureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitOfMeasure[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RecipePurpose'
   */
  export type EnumRecipePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipePurpose'>
    


  /**
   * Reference to a field of type 'RecipePurpose[]'
   */
  export type ListEnumRecipePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipePurpose[]'>
    


  /**
   * Reference to a field of type 'RecipeStatus'
   */
  export type EnumRecipeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipeStatus'>
    


  /**
   * Reference to a field of type 'RecipeStatus[]'
   */
  export type ListEnumRecipeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    code?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    kind?: EnumItemKindFilter<"Item"> | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFilter<"Item"> | $Enums.SupplyType
    processType?: EnumProcessTypeFilter<"Item"> | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFilter<"Item"> | $Enums.UnitOfMeasure
    allergenDeclaration?: StringNullableFilter<"Item"> | string | null
    origin?: StringNullableFilter<"Item"> | string | null
    manufacturer?: StringNullableFilter<"Item"> | string | null
    defaultSupplierId?: IntNullableFilter<"Item"> | number | null
    packSizeDescription?: StringNullableFilter<"Item"> | string | null
    netContentDescription?: StringNullableFilter<"Item"> | string | null
    isActive?: BoolFilter<"Item"> | boolean
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    componentLines?: RecipeLineListRelationFilter
    outputRevisions?: RecipeRevisionListRelationFilter
    packagingLines?: ProductPackagingLineListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    kind?: SortOrder
    supplyType?: SortOrder
    processType?: SortOrder
    baseUnit?: SortOrder
    allergenDeclaration?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    defaultSupplierId?: SortOrderInput | SortOrder
    packSizeDescription?: SortOrderInput | SortOrder
    netContentDescription?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    componentLines?: RecipeLineOrderByRelationAggregateInput
    outputRevisions?: RecipeRevisionOrderByRelationAggregateInput
    packagingLines?: ProductPackagingLineOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    kind?: EnumItemKindFilter<"Item"> | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFilter<"Item"> | $Enums.SupplyType
    processType?: EnumProcessTypeFilter<"Item"> | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFilter<"Item"> | $Enums.UnitOfMeasure
    allergenDeclaration?: StringNullableFilter<"Item"> | string | null
    origin?: StringNullableFilter<"Item"> | string | null
    manufacturer?: StringNullableFilter<"Item"> | string | null
    defaultSupplierId?: IntNullableFilter<"Item"> | number | null
    packSizeDescription?: StringNullableFilter<"Item"> | string | null
    netContentDescription?: StringNullableFilter<"Item"> | string | null
    isActive?: BoolFilter<"Item"> | boolean
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    componentLines?: RecipeLineListRelationFilter
    outputRevisions?: RecipeRevisionListRelationFilter
    packagingLines?: ProductPackagingLineListRelationFilter
  }, "id" | "code">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    kind?: SortOrder
    supplyType?: SortOrder
    processType?: SortOrder
    baseUnit?: SortOrder
    allergenDeclaration?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    defaultSupplierId?: SortOrderInput | SortOrder
    packSizeDescription?: SortOrderInput | SortOrder
    netContentDescription?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    code?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    kind?: EnumItemKindWithAggregatesFilter<"Item"> | $Enums.ItemKind
    supplyType?: EnumSupplyTypeWithAggregatesFilter<"Item"> | $Enums.SupplyType
    processType?: EnumProcessTypeWithAggregatesFilter<"Item"> | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureWithAggregatesFilter<"Item"> | $Enums.UnitOfMeasure
    allergenDeclaration?: StringNullableWithAggregatesFilter<"Item"> | string | null
    origin?: StringNullableWithAggregatesFilter<"Item"> | string | null
    manufacturer?: StringNullableWithAggregatesFilter<"Item"> | string | null
    defaultSupplierId?: IntNullableWithAggregatesFilter<"Item"> | number | null
    packSizeDescription?: StringNullableWithAggregatesFilter<"Item"> | string | null
    netContentDescription?: StringNullableWithAggregatesFilter<"Item"> | string | null
    isActive?: BoolWithAggregatesFilter<"Item"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ItemCodeSequenceWhereInput = {
    AND?: ItemCodeSequenceWhereInput | ItemCodeSequenceWhereInput[]
    OR?: ItemCodeSequenceWhereInput[]
    NOT?: ItemCodeSequenceWhereInput | ItemCodeSequenceWhereInput[]
    prefix?: StringFilter<"ItemCodeSequence"> | string
    nextNumber?: IntFilter<"ItemCodeSequence"> | number
    updatedAt?: DateTimeFilter<"ItemCodeSequence"> | Date | string
  }

  export type ItemCodeSequenceOrderByWithRelationInput = {
    prefix?: SortOrder
    nextNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCodeSequenceWhereUniqueInput = Prisma.AtLeast<{
    prefix?: string
    AND?: ItemCodeSequenceWhereInput | ItemCodeSequenceWhereInput[]
    OR?: ItemCodeSequenceWhereInput[]
    NOT?: ItemCodeSequenceWhereInput | ItemCodeSequenceWhereInput[]
    nextNumber?: IntFilter<"ItemCodeSequence"> | number
    updatedAt?: DateTimeFilter<"ItemCodeSequence"> | Date | string
  }, "prefix">

  export type ItemCodeSequenceOrderByWithAggregationInput = {
    prefix?: SortOrder
    nextNumber?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCodeSequenceCountOrderByAggregateInput
    _avg?: ItemCodeSequenceAvgOrderByAggregateInput
    _max?: ItemCodeSequenceMaxOrderByAggregateInput
    _min?: ItemCodeSequenceMinOrderByAggregateInput
    _sum?: ItemCodeSequenceSumOrderByAggregateInput
  }

  export type ItemCodeSequenceScalarWhereWithAggregatesInput = {
    AND?: ItemCodeSequenceScalarWhereWithAggregatesInput | ItemCodeSequenceScalarWhereWithAggregatesInput[]
    OR?: ItemCodeSequenceScalarWhereWithAggregatesInput[]
    NOT?: ItemCodeSequenceScalarWhereWithAggregatesInput | ItemCodeSequenceScalarWhereWithAggregatesInput[]
    prefix?: StringWithAggregatesFilter<"ItemCodeSequence"> | string
    nextNumber?: IntWithAggregatesFilter<"ItemCodeSequence"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ItemCodeSequence"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    productCode?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    productWeight?: StringFilter<"Product"> | string
    netWeightG?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    price?: FloatFilter<"Product"> | number
    companyId?: IntNullableFilter<"Product"> | number | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    recipeAssignments?: ProductRecipeAssignmentListRelationFilter
    packagingLines?: ProductPackagingLineListRelationFilter
    nutritionalInfo?: XOR<NutritionalInfoNullableScalarRelationFilter, NutritionalInfoWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    productWeight?: SortOrder
    netWeightG?: SortOrderInput | SortOrder
    price?: SortOrder
    companyId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipeAssignments?: ProductRecipeAssignmentOrderByRelationAggregateInput
    packagingLines?: ProductPackagingLineOrderByRelationAggregateInput
    nutritionalInfo?: NutritionalInfoOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productCode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    productWeight?: StringFilter<"Product"> | string
    netWeightG?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    price?: FloatFilter<"Product"> | number
    companyId?: IntNullableFilter<"Product"> | number | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    recipeAssignments?: ProductRecipeAssignmentListRelationFilter
    packagingLines?: ProductPackagingLineListRelationFilter
    nutritionalInfo?: XOR<NutritionalInfoNullableScalarRelationFilter, NutritionalInfoWhereInput> | null
  }, "id" | "productCode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    productWeight?: SortOrder
    netWeightG?: SortOrderInput | SortOrder
    price?: SortOrder
    companyId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    productCode?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productWeight?: StringWithAggregatesFilter<"Product"> | string
    netWeightG?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    companyId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    code?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    purpose?: EnumRecipePurposeFilter<"Recipe"> | $Enums.RecipePurpose
    isActive?: BoolFilter<"Recipe"> | boolean
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    revisions?: RecipeRevisionListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    purpose?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revisions?: RecipeRevisionOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    purpose?: EnumRecipePurposeFilter<"Recipe"> | $Enums.RecipePurpose
    isActive?: BoolFilter<"Recipe"> | boolean
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    revisions?: RecipeRevisionListRelationFilter
  }, "id" | "code">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    purpose?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    code?: StringWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    purpose?: EnumRecipePurposeWithAggregatesFilter<"Recipe"> | $Enums.RecipePurpose
    isActive?: BoolWithAggregatesFilter<"Recipe"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type RecipeRevisionWhereInput = {
    AND?: RecipeRevisionWhereInput | RecipeRevisionWhereInput[]
    OR?: RecipeRevisionWhereInput[]
    NOT?: RecipeRevisionWhereInput | RecipeRevisionWhereInput[]
    id?: IntFilter<"RecipeRevision"> | number
    recipeId?: IntFilter<"RecipeRevision"> | number
    revision?: IntFilter<"RecipeRevision"> | number
    status?: EnumRecipeStatusFilter<"RecipeRevision"> | $Enums.RecipeStatus
    referenceQuantity?: DecimalFilter<"RecipeRevision"> | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFilter<"RecipeRevision"> | $Enums.UnitOfMeasure
    outputItemId?: IntNullableFilter<"RecipeRevision"> | number | null
    processType?: EnumProcessTypeFilter<"RecipeRevision"> | $Enums.ProcessType
    effectiveFrom?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    effectiveTo?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedById?: IntNullableFilter<"RecipeRevision"> | number | null
    notes?: StringNullableFilter<"RecipeRevision"> | string | null
    createdAt?: DateTimeFilter<"RecipeRevision"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeRevision"> | Date | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    outputItem?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    lines?: RecipeLineListRelationFilter
    productAssignments?: ProductRecipeAssignmentListRelationFilter
  }

  export type RecipeRevisionOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    referenceQuantity?: SortOrder
    referenceUnit?: SortOrder
    outputItemId?: SortOrderInput | SortOrder
    processType?: SortOrder
    effectiveFrom?: SortOrderInput | SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    outputItem?: ItemOrderByWithRelationInput
    lines?: RecipeLineOrderByRelationAggregateInput
    productAssignments?: ProductRecipeAssignmentOrderByRelationAggregateInput
  }

  export type RecipeRevisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    recipeId_revision?: RecipeRevisionRecipeIdRevisionCompoundUniqueInput
    AND?: RecipeRevisionWhereInput | RecipeRevisionWhereInput[]
    OR?: RecipeRevisionWhereInput[]
    NOT?: RecipeRevisionWhereInput | RecipeRevisionWhereInput[]
    recipeId?: IntFilter<"RecipeRevision"> | number
    revision?: IntFilter<"RecipeRevision"> | number
    status?: EnumRecipeStatusFilter<"RecipeRevision"> | $Enums.RecipeStatus
    referenceQuantity?: DecimalFilter<"RecipeRevision"> | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFilter<"RecipeRevision"> | $Enums.UnitOfMeasure
    outputItemId?: IntNullableFilter<"RecipeRevision"> | number | null
    processType?: EnumProcessTypeFilter<"RecipeRevision"> | $Enums.ProcessType
    effectiveFrom?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    effectiveTo?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedById?: IntNullableFilter<"RecipeRevision"> | number | null
    notes?: StringNullableFilter<"RecipeRevision"> | string | null
    createdAt?: DateTimeFilter<"RecipeRevision"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeRevision"> | Date | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    outputItem?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    lines?: RecipeLineListRelationFilter
    productAssignments?: ProductRecipeAssignmentListRelationFilter
  }, "id" | "recipeId_revision">

  export type RecipeRevisionOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    referenceQuantity?: SortOrder
    referenceUnit?: SortOrder
    outputItemId?: SortOrderInput | SortOrder
    processType?: SortOrder
    effectiveFrom?: SortOrderInput | SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecipeRevisionCountOrderByAggregateInput
    _avg?: RecipeRevisionAvgOrderByAggregateInput
    _max?: RecipeRevisionMaxOrderByAggregateInput
    _min?: RecipeRevisionMinOrderByAggregateInput
    _sum?: RecipeRevisionSumOrderByAggregateInput
  }

  export type RecipeRevisionScalarWhereWithAggregatesInput = {
    AND?: RecipeRevisionScalarWhereWithAggregatesInput | RecipeRevisionScalarWhereWithAggregatesInput[]
    OR?: RecipeRevisionScalarWhereWithAggregatesInput[]
    NOT?: RecipeRevisionScalarWhereWithAggregatesInput | RecipeRevisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecipeRevision"> | number
    recipeId?: IntWithAggregatesFilter<"RecipeRevision"> | number
    revision?: IntWithAggregatesFilter<"RecipeRevision"> | number
    status?: EnumRecipeStatusWithAggregatesFilter<"RecipeRevision"> | $Enums.RecipeStatus
    referenceQuantity?: DecimalWithAggregatesFilter<"RecipeRevision"> | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureWithAggregatesFilter<"RecipeRevision"> | $Enums.UnitOfMeasure
    outputItemId?: IntNullableWithAggregatesFilter<"RecipeRevision"> | number | null
    processType?: EnumProcessTypeWithAggregatesFilter<"RecipeRevision"> | $Enums.ProcessType
    effectiveFrom?: DateTimeNullableWithAggregatesFilter<"RecipeRevision"> | Date | string | null
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"RecipeRevision"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"RecipeRevision"> | Date | string | null
    approvedById?: IntNullableWithAggregatesFilter<"RecipeRevision"> | number | null
    notes?: StringNullableWithAggregatesFilter<"RecipeRevision"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RecipeRevision"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecipeRevision"> | Date | string
  }

  export type RecipeLineWhereInput = {
    AND?: RecipeLineWhereInput | RecipeLineWhereInput[]
    OR?: RecipeLineWhereInput[]
    NOT?: RecipeLineWhereInput | RecipeLineWhereInput[]
    id?: IntFilter<"RecipeLine"> | number
    recipeRevisionId?: IntFilter<"RecipeLine"> | number
    lineNumber?: IntFilter<"RecipeLine"> | number
    componentItemId?: IntFilter<"RecipeLine"> | number
    quantity?: DecimalFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"RecipeLine"> | $Enums.UnitOfMeasure
    processLossPercent?: DecimalNullableFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"RecipeLine"> | string | null
    recipeRevision?: XOR<RecipeRevisionScalarRelationFilter, RecipeRevisionWhereInput>
    componentItem?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type RecipeLineOrderByWithRelationInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    processLossPercent?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    recipeRevision?: RecipeRevisionOrderByWithRelationInput
    componentItem?: ItemOrderByWithRelationInput
  }

  export type RecipeLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    recipeRevisionId_lineNumber?: RecipeLineRecipeRevisionIdLineNumberCompoundUniqueInput
    AND?: RecipeLineWhereInput | RecipeLineWhereInput[]
    OR?: RecipeLineWhereInput[]
    NOT?: RecipeLineWhereInput | RecipeLineWhereInput[]
    recipeRevisionId?: IntFilter<"RecipeLine"> | number
    lineNumber?: IntFilter<"RecipeLine"> | number
    componentItemId?: IntFilter<"RecipeLine"> | number
    quantity?: DecimalFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"RecipeLine"> | $Enums.UnitOfMeasure
    processLossPercent?: DecimalNullableFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"RecipeLine"> | string | null
    recipeRevision?: XOR<RecipeRevisionScalarRelationFilter, RecipeRevisionWhereInput>
    componentItem?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "recipeRevisionId_lineNumber">

  export type RecipeLineOrderByWithAggregationInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    processLossPercent?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: RecipeLineCountOrderByAggregateInput
    _avg?: RecipeLineAvgOrderByAggregateInput
    _max?: RecipeLineMaxOrderByAggregateInput
    _min?: RecipeLineMinOrderByAggregateInput
    _sum?: RecipeLineSumOrderByAggregateInput
  }

  export type RecipeLineScalarWhereWithAggregatesInput = {
    AND?: RecipeLineScalarWhereWithAggregatesInput | RecipeLineScalarWhereWithAggregatesInput[]
    OR?: RecipeLineScalarWhereWithAggregatesInput[]
    NOT?: RecipeLineScalarWhereWithAggregatesInput | RecipeLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecipeLine"> | number
    recipeRevisionId?: IntWithAggregatesFilter<"RecipeLine"> | number
    lineNumber?: IntWithAggregatesFilter<"RecipeLine"> | number
    componentItemId?: IntWithAggregatesFilter<"RecipeLine"> | number
    quantity?: DecimalWithAggregatesFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureWithAggregatesFilter<"RecipeLine"> | $Enums.UnitOfMeasure
    processLossPercent?: DecimalNullableWithAggregatesFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"RecipeLine"> | string | null
  }

  export type ProductRecipeAssignmentWhereInput = {
    AND?: ProductRecipeAssignmentWhereInput | ProductRecipeAssignmentWhereInput[]
    OR?: ProductRecipeAssignmentWhereInput[]
    NOT?: ProductRecipeAssignmentWhereInput | ProductRecipeAssignmentWhereInput[]
    id?: IntFilter<"ProductRecipeAssignment"> | number
    productId?: IntFilter<"ProductRecipeAssignment"> | number
    recipeRevisionId?: IntFilter<"ProductRecipeAssignment"> | number
    portionQuantity?: DecimalFilter<"ProductRecipeAssignment"> | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFilter<"ProductRecipeAssignment"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductRecipeAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    recipeRevision?: XOR<RecipeRevisionScalarRelationFilter, RecipeRevisionWhereInput>
  }

  export type ProductRecipeAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
    portionUnit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    recipeRevision?: RecipeRevisionOrderByWithRelationInput
  }

  export type ProductRecipeAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_recipeRevisionId_effectiveFrom?: ProductRecipeAssignmentProductIdRecipeRevisionIdEffectiveFromCompoundUniqueInput
    AND?: ProductRecipeAssignmentWhereInput | ProductRecipeAssignmentWhereInput[]
    OR?: ProductRecipeAssignmentWhereInput[]
    NOT?: ProductRecipeAssignmentWhereInput | ProductRecipeAssignmentWhereInput[]
    productId?: IntFilter<"ProductRecipeAssignment"> | number
    recipeRevisionId?: IntFilter<"ProductRecipeAssignment"> | number
    portionQuantity?: DecimalFilter<"ProductRecipeAssignment"> | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFilter<"ProductRecipeAssignment"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductRecipeAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    recipeRevision?: XOR<RecipeRevisionScalarRelationFilter, RecipeRevisionWhereInput>
  }, "id" | "productId_recipeRevisionId_effectiveFrom">

  export type ProductRecipeAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
    portionUnit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductRecipeAssignmentCountOrderByAggregateInput
    _avg?: ProductRecipeAssignmentAvgOrderByAggregateInput
    _max?: ProductRecipeAssignmentMaxOrderByAggregateInput
    _min?: ProductRecipeAssignmentMinOrderByAggregateInput
    _sum?: ProductRecipeAssignmentSumOrderByAggregateInput
  }

  export type ProductRecipeAssignmentScalarWhereWithAggregatesInput = {
    AND?: ProductRecipeAssignmentScalarWhereWithAggregatesInput | ProductRecipeAssignmentScalarWhereWithAggregatesInput[]
    OR?: ProductRecipeAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ProductRecipeAssignmentScalarWhereWithAggregatesInput | ProductRecipeAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductRecipeAssignment"> | number
    productId?: IntWithAggregatesFilter<"ProductRecipeAssignment"> | number
    recipeRevisionId?: IntWithAggregatesFilter<"ProductRecipeAssignment"> | number
    portionQuantity?: DecimalWithAggregatesFilter<"ProductRecipeAssignment"> | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureWithAggregatesFilter<"ProductRecipeAssignment"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeWithAggregatesFilter<"ProductRecipeAssignment"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"ProductRecipeAssignment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductRecipeAssignment"> | Date | string
  }

  export type ProductPackagingLineWhereInput = {
    AND?: ProductPackagingLineWhereInput | ProductPackagingLineWhereInput[]
    OR?: ProductPackagingLineWhereInput[]
    NOT?: ProductPackagingLineWhereInput | ProductPackagingLineWhereInput[]
    id?: IntFilter<"ProductPackagingLine"> | number
    productId?: IntFilter<"ProductPackagingLine"> | number
    itemId?: IntFilter<"ProductPackagingLine"> | number
    quantity?: DecimalFilter<"ProductPackagingLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"ProductPackagingLine"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductPackagingLine"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPackagingLine"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ProductPackagingLineOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ProductPackagingLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductPackagingLineWhereInput | ProductPackagingLineWhereInput[]
    OR?: ProductPackagingLineWhereInput[]
    NOT?: ProductPackagingLineWhereInput | ProductPackagingLineWhereInput[]
    productId?: IntFilter<"ProductPackagingLine"> | number
    itemId?: IntFilter<"ProductPackagingLine"> | number
    quantity?: DecimalFilter<"ProductPackagingLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"ProductPackagingLine"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductPackagingLine"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPackagingLine"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type ProductPackagingLineOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    _count?: ProductPackagingLineCountOrderByAggregateInput
    _avg?: ProductPackagingLineAvgOrderByAggregateInput
    _max?: ProductPackagingLineMaxOrderByAggregateInput
    _min?: ProductPackagingLineMinOrderByAggregateInput
    _sum?: ProductPackagingLineSumOrderByAggregateInput
  }

  export type ProductPackagingLineScalarWhereWithAggregatesInput = {
    AND?: ProductPackagingLineScalarWhereWithAggregatesInput | ProductPackagingLineScalarWhereWithAggregatesInput[]
    OR?: ProductPackagingLineScalarWhereWithAggregatesInput[]
    NOT?: ProductPackagingLineScalarWhereWithAggregatesInput | ProductPackagingLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductPackagingLine"> | number
    productId?: IntWithAggregatesFilter<"ProductPackagingLine"> | number
    itemId?: IntWithAggregatesFilter<"ProductPackagingLine"> | number
    quantity?: DecimalWithAggregatesFilter<"ProductPackagingLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureWithAggregatesFilter<"ProductPackagingLine"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeWithAggregatesFilter<"ProductPackagingLine"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"ProductPackagingLine"> | Date | string | null
  }

  export type TrayWhereInput = {
    AND?: TrayWhereInput | TrayWhereInput[]
    OR?: TrayWhereInput[]
    NOT?: TrayWhereInput | TrayWhereInput[]
    id?: IntFilter<"Tray"> | number
    trayName?: StringFilter<"Tray"> | string
    dimensions?: StringNullableFilter<"Tray"> | string | null
    weight?: StringNullableFilter<"Tray"> | string | null
    createdAt?: DateTimeFilter<"Tray"> | Date | string
    updatedAt?: DateTimeFilter<"Tray"> | Date | string
  }

  export type TrayOrderByWithRelationInput = {
    id?: SortOrder
    trayName?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrayWhereInput | TrayWhereInput[]
    OR?: TrayWhereInput[]
    NOT?: TrayWhereInput | TrayWhereInput[]
    trayName?: StringFilter<"Tray"> | string
    dimensions?: StringNullableFilter<"Tray"> | string | null
    weight?: StringNullableFilter<"Tray"> | string | null
    createdAt?: DateTimeFilter<"Tray"> | Date | string
    updatedAt?: DateTimeFilter<"Tray"> | Date | string
  }, "id">

  export type TrayOrderByWithAggregationInput = {
    id?: SortOrder
    trayName?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrayCountOrderByAggregateInput
    _avg?: TrayAvgOrderByAggregateInput
    _max?: TrayMaxOrderByAggregateInput
    _min?: TrayMinOrderByAggregateInput
    _sum?: TraySumOrderByAggregateInput
  }

  export type TrayScalarWhereWithAggregatesInput = {
    AND?: TrayScalarWhereWithAggregatesInput | TrayScalarWhereWithAggregatesInput[]
    OR?: TrayScalarWhereWithAggregatesInput[]
    NOT?: TrayScalarWhereWithAggregatesInput | TrayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tray"> | number
    trayName?: StringWithAggregatesFilter<"Tray"> | string
    dimensions?: StringNullableWithAggregatesFilter<"Tray"> | string | null
    weight?: StringNullableWithAggregatesFilter<"Tray"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tray"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tray"> | Date | string
  }

  export type GarnishWhereInput = {
    AND?: GarnishWhereInput | GarnishWhereInput[]
    OR?: GarnishWhereInput[]
    NOT?: GarnishWhereInput | GarnishWhereInput[]
    id?: IntFilter<"Garnish"> | number
    name?: StringFilter<"Garnish"> | string
    weight?: StringNullableFilter<"Garnish"> | string | null
    createdAt?: DateTimeFilter<"Garnish"> | Date | string
    updatedAt?: DateTimeFilter<"Garnish"> | Date | string
  }

  export type GarnishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarnishWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GarnishWhereInput | GarnishWhereInput[]
    OR?: GarnishWhereInput[]
    NOT?: GarnishWhereInput | GarnishWhereInput[]
    name?: StringFilter<"Garnish"> | string
    weight?: StringNullableFilter<"Garnish"> | string | null
    createdAt?: DateTimeFilter<"Garnish"> | Date | string
    updatedAt?: DateTimeFilter<"Garnish"> | Date | string
  }, "id">

  export type GarnishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GarnishCountOrderByAggregateInput
    _avg?: GarnishAvgOrderByAggregateInput
    _max?: GarnishMaxOrderByAggregateInput
    _min?: GarnishMinOrderByAggregateInput
    _sum?: GarnishSumOrderByAggregateInput
  }

  export type GarnishScalarWhereWithAggregatesInput = {
    AND?: GarnishScalarWhereWithAggregatesInput | GarnishScalarWhereWithAggregatesInput[]
    OR?: GarnishScalarWhereWithAggregatesInput[]
    NOT?: GarnishScalarWhereWithAggregatesInput | GarnishScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Garnish"> | number
    name?: StringWithAggregatesFilter<"Garnish"> | string
    weight?: StringNullableWithAggregatesFilter<"Garnish"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Garnish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Garnish"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    noOfUnits?: IntFilter<"Unit"> | number
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    noOfUnits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    name?: StringFilter<"Unit"> | string
    noOfUnits?: IntFilter<"Unit"> | number
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    noOfUnits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unit"> | number
    name?: StringWithAggregatesFilter<"Unit"> | string
    noOfUnits?: IntWithAggregatesFilter<"Unit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type NutritionalInfoWhereInput = {
    AND?: NutritionalInfoWhereInput | NutritionalInfoWhereInput[]
    OR?: NutritionalInfoWhereInput[]
    NOT?: NutritionalInfoWhereInput | NutritionalInfoWhereInput[]
    id?: IntFilter<"NutritionalInfo"> | number
    productId?: IntFilter<"NutritionalInfo"> | number
    calories?: FloatFilter<"NutritionalInfo"> | number
    fat?: FloatFilter<"NutritionalInfo"> | number
    protein?: FloatFilter<"NutritionalInfo"> | number
    sugar?: FloatFilter<"NutritionalInfo"> | number
    fibre?: FloatFilter<"NutritionalInfo"> | number
    salt?: FloatFilter<"NutritionalInfo"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type NutritionalInfoOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type NutritionalInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId?: number
    AND?: NutritionalInfoWhereInput | NutritionalInfoWhereInput[]
    OR?: NutritionalInfoWhereInput[]
    NOT?: NutritionalInfoWhereInput | NutritionalInfoWhereInput[]
    calories?: FloatFilter<"NutritionalInfo"> | number
    fat?: FloatFilter<"NutritionalInfo"> | number
    protein?: FloatFilter<"NutritionalInfo"> | number
    sugar?: FloatFilter<"NutritionalInfo"> | number
    fibre?: FloatFilter<"NutritionalInfo"> | number
    salt?: FloatFilter<"NutritionalInfo"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type NutritionalInfoOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
    _count?: NutritionalInfoCountOrderByAggregateInput
    _avg?: NutritionalInfoAvgOrderByAggregateInput
    _max?: NutritionalInfoMaxOrderByAggregateInput
    _min?: NutritionalInfoMinOrderByAggregateInput
    _sum?: NutritionalInfoSumOrderByAggregateInput
  }

  export type NutritionalInfoScalarWhereWithAggregatesInput = {
    AND?: NutritionalInfoScalarWhereWithAggregatesInput | NutritionalInfoScalarWhereWithAggregatesInput[]
    OR?: NutritionalInfoScalarWhereWithAggregatesInput[]
    NOT?: NutritionalInfoScalarWhereWithAggregatesInput | NutritionalInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NutritionalInfo"> | number
    productId?: IntWithAggregatesFilter<"NutritionalInfo"> | number
    calories?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
    fat?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
    protein?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
    sugar?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
    fibre?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
    salt?: FloatWithAggregatesFilter<"NutritionalInfo"> | number
  }

  export type ItemCreateInput = {
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineCreateNestedManyWithoutComponentItemInput
    outputRevisions?: RecipeRevisionCreateNestedManyWithoutOutputItemInput
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineUncheckedCreateNestedManyWithoutComponentItemInput
    outputRevisions?: RecipeRevisionUncheckedCreateNestedManyWithoutOutputItemInput
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUpdateManyWithoutComponentItemNestedInput
    outputRevisions?: RecipeRevisionUpdateManyWithoutOutputItemNestedInput
    packagingLines?: ProductPackagingLineUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUncheckedUpdateManyWithoutComponentItemNestedInput
    outputRevisions?: RecipeRevisionUncheckedUpdateManyWithoutOutputItemNestedInput
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCodeSequenceCreateInput = {
    prefix: string
    nextNumber: number
    updatedAt?: Date | string
  }

  export type ItemCodeSequenceUncheckedCreateInput = {
    prefix: string
    nextNumber: number
    updatedAt?: Date | string
  }

  export type ItemCodeSequenceUpdateInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    nextNumber?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCodeSequenceUncheckedUpdateInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    nextNumber?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCodeSequenceCreateManyInput = {
    prefix: string
    nextNumber: number
    updatedAt?: Date | string
  }

  export type ItemCodeSequenceUpdateManyMutationInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    nextNumber?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCodeSequenceUncheckedUpdateManyInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    nextNumber?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutProductInput
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutProductInput
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUpdateManyWithoutProductNestedInput
    packagingLines?: ProductPackagingLineUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutProductNestedInput
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateInput = {
    code: string
    name: string
    description?: string | null
    purpose: $Enums.RecipePurpose
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    revisions?: RecipeRevisionCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    purpose: $Enums.RecipePurpose
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    revisions?: RecipeRevisionUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revisions?: RecipeRevisionUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revisions?: RecipeRevisionUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    purpose: $Enums.RecipePurpose
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeRevisionCreateInput = {
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutRevisionsInput
    outputItem?: ItemCreateNestedOneWithoutOutputRevisionsInput
    lines?: RecipeLineCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUncheckedCreateInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: RecipeLineUncheckedCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUpdateInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutRevisionsNestedInput
    outputItem?: ItemUpdateOneWithoutOutputRevisionsNestedInput
    lines?: RecipeLineUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: RecipeLineUncheckedUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionCreateManyInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeRevisionUpdateManyMutationInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeRevisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeLineCreateInput = {
    lineNumber: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recipeRevision: RecipeRevisionCreateNestedOneWithoutLinesInput
    componentItem: ItemCreateNestedOneWithoutComponentLinesInput
  }

  export type RecipeLineUncheckedCreateInput = {
    id?: number
    recipeRevisionId: number
    lineNumber: number
    componentItemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type RecipeLineUpdateInput = {
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipeRevision?: RecipeRevisionUpdateOneRequiredWithoutLinesNestedInput
    componentItem?: ItemUpdateOneRequiredWithoutComponentLinesNestedInput
  }

  export type RecipeLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    componentItemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeLineCreateManyInput = {
    id?: number
    recipeRevisionId: number
    lineNumber: number
    componentItemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type RecipeLineUpdateManyMutationInput = {
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    componentItemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductRecipeAssignmentCreateInput = {
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutRecipeAssignmentsInput
    recipeRevision: RecipeRevisionCreateNestedOneWithoutProductAssignmentsInput
  }

  export type ProductRecipeAssignmentUncheckedCreateInput = {
    id?: number
    productId: number
    recipeRevisionId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductRecipeAssignmentUpdateInput = {
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRecipeAssignmentsNestedInput
    recipeRevision?: RecipeRevisionUpdateOneRequiredWithoutProductAssignmentsNestedInput
  }

  export type ProductRecipeAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRecipeAssignmentCreateManyInput = {
    id?: number
    productId: number
    recipeRevisionId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductRecipeAssignmentUpdateManyMutationInput = {
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRecipeAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPackagingLineCreateInput = {
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    product: ProductCreateNestedOneWithoutPackagingLinesInput
    item: ItemCreateNestedOneWithoutPackagingLinesInput
  }

  export type ProductPackagingLineUncheckedCreateInput = {
    id?: number
    productId: number
    itemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type ProductPackagingLineUpdateInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutPackagingLinesNestedInput
    item?: ItemUpdateOneRequiredWithoutPackagingLinesNestedInput
  }

  export type ProductPackagingLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPackagingLineCreateManyInput = {
    id?: number
    productId: number
    itemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type ProductPackagingLineUpdateManyMutationInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPackagingLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrayCreateInput = {
    trayName: string
    dimensions?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrayUncheckedCreateInput = {
    id?: number
    trayName: string
    dimensions?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrayUpdateInput = {
    trayName?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trayName?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrayCreateManyInput = {
    id?: number
    trayName: string
    dimensions?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrayUpdateManyMutationInput = {
    trayName?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trayName?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarnishCreateInput = {
    name: string
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GarnishUncheckedCreateInput = {
    id?: number
    name: string
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GarnishUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarnishUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarnishCreateManyInput = {
    id?: number
    name: string
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GarnishUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarnishUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    name: string
    noOfUnits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUncheckedCreateInput = {
    id?: number
    name: string
    noOfUnits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    noOfUnits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noOfUnits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyInput = {
    id?: number
    name: string
    noOfUnits: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    noOfUnits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noOfUnits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionalInfoCreateInput = {
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
    product: ProductCreateNestedOneWithoutNutritionalInfoInput
  }

  export type NutritionalInfoUncheckedCreateInput = {
    id?: number
    productId: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
  }

  export type NutritionalInfoUpdateInput = {
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutNutritionalInfoNestedInput
  }

  export type NutritionalInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionalInfoCreateManyInput = {
    id?: number
    productId: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
  }

  export type NutritionalInfoUpdateManyMutationInput = {
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionalInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumItemKindFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemKind | EnumItemKindFieldRefInput<$PrismaModel>
    in?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    not?: NestedEnumItemKindFilter<$PrismaModel> | $Enums.ItemKind
  }

  export type EnumSupplyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplyType | EnumSupplyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplyTypeFilter<$PrismaModel> | $Enums.SupplyType
  }

  export type EnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type EnumUnitOfMeasureFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitOfMeasure | EnumUnitOfMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitOfMeasureFilter<$PrismaModel> | $Enums.UnitOfMeasure
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecipeLineListRelationFilter = {
    every?: RecipeLineWhereInput
    some?: RecipeLineWhereInput
    none?: RecipeLineWhereInput
  }

  export type RecipeRevisionListRelationFilter = {
    every?: RecipeRevisionWhereInput
    some?: RecipeRevisionWhereInput
    none?: RecipeRevisionWhereInput
  }

  export type ProductPackagingLineListRelationFilter = {
    every?: ProductPackagingLineWhereInput
    some?: ProductPackagingLineWhereInput
    none?: ProductPackagingLineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipeLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeRevisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPackagingLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    supplyType?: SortOrder
    processType?: SortOrder
    baseUnit?: SortOrder
    allergenDeclaration?: SortOrder
    origin?: SortOrder
    manufacturer?: SortOrder
    defaultSupplierId?: SortOrder
    packSizeDescription?: SortOrder
    netContentDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    defaultSupplierId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    supplyType?: SortOrder
    processType?: SortOrder
    baseUnit?: SortOrder
    allergenDeclaration?: SortOrder
    origin?: SortOrder
    manufacturer?: SortOrder
    defaultSupplierId?: SortOrder
    packSizeDescription?: SortOrder
    netContentDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    supplyType?: SortOrder
    processType?: SortOrder
    baseUnit?: SortOrder
    allergenDeclaration?: SortOrder
    origin?: SortOrder
    manufacturer?: SortOrder
    defaultSupplierId?: SortOrder
    packSizeDescription?: SortOrder
    netContentDescription?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    defaultSupplierId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumItemKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemKind | EnumItemKindFieldRefInput<$PrismaModel>
    in?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    not?: NestedEnumItemKindWithAggregatesFilter<$PrismaModel> | $Enums.ItemKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemKindFilter<$PrismaModel>
    _max?: NestedEnumItemKindFilter<$PrismaModel>
  }

  export type EnumSupplyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplyType | EnumSupplyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplyTypeWithAggregatesFilter<$PrismaModel> | $Enums.SupplyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSupplyTypeFilter<$PrismaModel>
    _max?: NestedEnumSupplyTypeFilter<$PrismaModel>
  }

  export type EnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type EnumUnitOfMeasureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitOfMeasure | EnumUnitOfMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitOfMeasureWithAggregatesFilter<$PrismaModel> | $Enums.UnitOfMeasure
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitOfMeasureFilter<$PrismaModel>
    _max?: NestedEnumUnitOfMeasureFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ItemCodeSequenceCountOrderByAggregateInput = {
    prefix?: SortOrder
    nextNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCodeSequenceAvgOrderByAggregateInput = {
    nextNumber?: SortOrder
  }

  export type ItemCodeSequenceMaxOrderByAggregateInput = {
    prefix?: SortOrder
    nextNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCodeSequenceMinOrderByAggregateInput = {
    prefix?: SortOrder
    nextNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCodeSequenceSumOrderByAggregateInput = {
    nextNumber?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductRecipeAssignmentListRelationFilter = {
    every?: ProductRecipeAssignmentWhereInput
    some?: ProductRecipeAssignmentWhereInput
    none?: ProductRecipeAssignmentWhereInput
  }

  export type NutritionalInfoNullableScalarRelationFilter = {
    is?: NutritionalInfoWhereInput | null
    isNot?: NutritionalInfoWhereInput | null
  }

  export type ProductRecipeAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    productWeight?: SortOrder
    netWeightG?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    netWeightG?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    productWeight?: SortOrder
    netWeightG?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    productWeight?: SortOrder
    netWeightG?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    netWeightG?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRecipePurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipePurpose | EnumRecipePurposeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipePurposeFilter<$PrismaModel> | $Enums.RecipePurpose
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRecipePurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipePurpose | EnumRecipePurposeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipePurposeWithAggregatesFilter<$PrismaModel> | $Enums.RecipePurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipePurposeFilter<$PrismaModel>
    _max?: NestedEnumRecipePurposeFilter<$PrismaModel>
  }

  export type EnumRecipeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeStatus | EnumRecipeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeStatusFilter<$PrismaModel> | $Enums.RecipeStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type ItemNullableScalarRelationFilter = {
    is?: ItemWhereInput | null
    isNot?: ItemWhereInput | null
  }

  export type RecipeRevisionRecipeIdRevisionCompoundUniqueInput = {
    recipeId: number
    revision: number
  }

  export type RecipeRevisionCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    referenceQuantity?: SortOrder
    referenceUnit?: SortOrder
    outputItemId?: SortOrder
    processType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeRevisionAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    referenceQuantity?: SortOrder
    outputItemId?: SortOrder
    approvedById?: SortOrder
  }

  export type RecipeRevisionMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    referenceQuantity?: SortOrder
    referenceUnit?: SortOrder
    outputItemId?: SortOrder
    processType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeRevisionMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    referenceQuantity?: SortOrder
    referenceUnit?: SortOrder
    outputItemId?: SortOrder
    processType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeRevisionSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    revision?: SortOrder
    referenceQuantity?: SortOrder
    outputItemId?: SortOrder
    approvedById?: SortOrder
  }

  export type EnumRecipeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeStatus | EnumRecipeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipeStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipeStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RecipeRevisionScalarRelationFilter = {
    is?: RecipeRevisionWhereInput
    isNot?: RecipeRevisionWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type RecipeLineRecipeRevisionIdLineNumberCompoundUniqueInput = {
    recipeRevisionId: number
    lineNumber: number
  }

  export type RecipeLineCountOrderByAggregateInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    processLossPercent?: SortOrder
    notes?: SortOrder
  }

  export type RecipeLineAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    processLossPercent?: SortOrder
  }

  export type RecipeLineMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    processLossPercent?: SortOrder
    notes?: SortOrder
  }

  export type RecipeLineMinOrderByAggregateInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    processLossPercent?: SortOrder
    notes?: SortOrder
  }

  export type RecipeLineSumOrderByAggregateInput = {
    id?: SortOrder
    recipeRevisionId?: SortOrder
    lineNumber?: SortOrder
    componentItemId?: SortOrder
    quantity?: SortOrder
    processLossPercent?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductRecipeAssignmentProductIdRecipeRevisionIdEffectiveFromCompoundUniqueInput = {
    productId: number
    recipeRevisionId: number
    effectiveFrom: Date | string
  }

  export type ProductRecipeAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
    portionUnit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductRecipeAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
  }

  export type ProductRecipeAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
    portionUnit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductRecipeAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
    portionUnit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductRecipeAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    recipeRevisionId?: SortOrder
    portionQuantity?: SortOrder
  }

  export type ProductPackagingLineCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
  }

  export type ProductPackagingLineAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductPackagingLineMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
  }

  export type ProductPackagingLineMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
  }

  export type ProductPackagingLineSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type TrayCountOrderByAggregateInput = {
    id?: SortOrder
    trayName?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrayAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrayMaxOrderByAggregateInput = {
    id?: SortOrder
    trayName?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrayMinOrderByAggregateInput = {
    id?: SortOrder
    trayName?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GarnishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarnishAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GarnishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarnishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarnishSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfUnits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    id?: SortOrder
    noOfUnits?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfUnits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfUnits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    id?: SortOrder
    noOfUnits?: SortOrder
  }

  export type NutritionalInfoCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
  }

  export type NutritionalInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
  }

  export type NutritionalInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
  }

  export type NutritionalInfoMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
  }

  export type NutritionalInfoSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    sugar?: SortOrder
    fibre?: SortOrder
    salt?: SortOrder
  }

  export type RecipeLineCreateNestedManyWithoutComponentItemInput = {
    create?: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput> | RecipeLineCreateWithoutComponentItemInput[] | RecipeLineUncheckedCreateWithoutComponentItemInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutComponentItemInput | RecipeLineCreateOrConnectWithoutComponentItemInput[]
    createMany?: RecipeLineCreateManyComponentItemInputEnvelope
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
  }

  export type RecipeRevisionCreateNestedManyWithoutOutputItemInput = {
    create?: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput> | RecipeRevisionCreateWithoutOutputItemInput[] | RecipeRevisionUncheckedCreateWithoutOutputItemInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutOutputItemInput | RecipeRevisionCreateOrConnectWithoutOutputItemInput[]
    createMany?: RecipeRevisionCreateManyOutputItemInputEnvelope
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
  }

  export type ProductPackagingLineCreateNestedManyWithoutItemInput = {
    create?: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput> | ProductPackagingLineCreateWithoutItemInput[] | ProductPackagingLineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutItemInput | ProductPackagingLineCreateOrConnectWithoutItemInput[]
    createMany?: ProductPackagingLineCreateManyItemInputEnvelope
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
  }

  export type RecipeLineUncheckedCreateNestedManyWithoutComponentItemInput = {
    create?: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput> | RecipeLineCreateWithoutComponentItemInput[] | RecipeLineUncheckedCreateWithoutComponentItemInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutComponentItemInput | RecipeLineCreateOrConnectWithoutComponentItemInput[]
    createMany?: RecipeLineCreateManyComponentItemInputEnvelope
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
  }

  export type RecipeRevisionUncheckedCreateNestedManyWithoutOutputItemInput = {
    create?: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput> | RecipeRevisionCreateWithoutOutputItemInput[] | RecipeRevisionUncheckedCreateWithoutOutputItemInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutOutputItemInput | RecipeRevisionCreateOrConnectWithoutOutputItemInput[]
    createMany?: RecipeRevisionCreateManyOutputItemInputEnvelope
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
  }

  export type ProductPackagingLineUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput> | ProductPackagingLineCreateWithoutItemInput[] | ProductPackagingLineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutItemInput | ProductPackagingLineCreateOrConnectWithoutItemInput[]
    createMany?: ProductPackagingLineCreateManyItemInputEnvelope
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumItemKindFieldUpdateOperationsInput = {
    set?: $Enums.ItemKind
  }

  export type EnumSupplyTypeFieldUpdateOperationsInput = {
    set?: $Enums.SupplyType
  }

  export type EnumProcessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProcessType
  }

  export type EnumUnitOfMeasureFieldUpdateOperationsInput = {
    set?: $Enums.UnitOfMeasure
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipeLineUpdateManyWithoutComponentItemNestedInput = {
    create?: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput> | RecipeLineCreateWithoutComponentItemInput[] | RecipeLineUncheckedCreateWithoutComponentItemInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutComponentItemInput | RecipeLineCreateOrConnectWithoutComponentItemInput[]
    upsert?: RecipeLineUpsertWithWhereUniqueWithoutComponentItemInput | RecipeLineUpsertWithWhereUniqueWithoutComponentItemInput[]
    createMany?: RecipeLineCreateManyComponentItemInputEnvelope
    set?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    disconnect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    delete?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    update?: RecipeLineUpdateWithWhereUniqueWithoutComponentItemInput | RecipeLineUpdateWithWhereUniqueWithoutComponentItemInput[]
    updateMany?: RecipeLineUpdateManyWithWhereWithoutComponentItemInput | RecipeLineUpdateManyWithWhereWithoutComponentItemInput[]
    deleteMany?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
  }

  export type RecipeRevisionUpdateManyWithoutOutputItemNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput> | RecipeRevisionCreateWithoutOutputItemInput[] | RecipeRevisionUncheckedCreateWithoutOutputItemInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutOutputItemInput | RecipeRevisionCreateOrConnectWithoutOutputItemInput[]
    upsert?: RecipeRevisionUpsertWithWhereUniqueWithoutOutputItemInput | RecipeRevisionUpsertWithWhereUniqueWithoutOutputItemInput[]
    createMany?: RecipeRevisionCreateManyOutputItemInputEnvelope
    set?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    disconnect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    delete?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    update?: RecipeRevisionUpdateWithWhereUniqueWithoutOutputItemInput | RecipeRevisionUpdateWithWhereUniqueWithoutOutputItemInput[]
    updateMany?: RecipeRevisionUpdateManyWithWhereWithoutOutputItemInput | RecipeRevisionUpdateManyWithWhereWithoutOutputItemInput[]
    deleteMany?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
  }

  export type ProductPackagingLineUpdateManyWithoutItemNestedInput = {
    create?: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput> | ProductPackagingLineCreateWithoutItemInput[] | ProductPackagingLineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutItemInput | ProductPackagingLineCreateOrConnectWithoutItemInput[]
    upsert?: ProductPackagingLineUpsertWithWhereUniqueWithoutItemInput | ProductPackagingLineUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ProductPackagingLineCreateManyItemInputEnvelope
    set?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    disconnect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    delete?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    update?: ProductPackagingLineUpdateWithWhereUniqueWithoutItemInput | ProductPackagingLineUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ProductPackagingLineUpdateManyWithWhereWithoutItemInput | ProductPackagingLineUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeLineUncheckedUpdateManyWithoutComponentItemNestedInput = {
    create?: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput> | RecipeLineCreateWithoutComponentItemInput[] | RecipeLineUncheckedCreateWithoutComponentItemInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutComponentItemInput | RecipeLineCreateOrConnectWithoutComponentItemInput[]
    upsert?: RecipeLineUpsertWithWhereUniqueWithoutComponentItemInput | RecipeLineUpsertWithWhereUniqueWithoutComponentItemInput[]
    createMany?: RecipeLineCreateManyComponentItemInputEnvelope
    set?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    disconnect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    delete?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    update?: RecipeLineUpdateWithWhereUniqueWithoutComponentItemInput | RecipeLineUpdateWithWhereUniqueWithoutComponentItemInput[]
    updateMany?: RecipeLineUpdateManyWithWhereWithoutComponentItemInput | RecipeLineUpdateManyWithWhereWithoutComponentItemInput[]
    deleteMany?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
  }

  export type RecipeRevisionUncheckedUpdateManyWithoutOutputItemNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput> | RecipeRevisionCreateWithoutOutputItemInput[] | RecipeRevisionUncheckedCreateWithoutOutputItemInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutOutputItemInput | RecipeRevisionCreateOrConnectWithoutOutputItemInput[]
    upsert?: RecipeRevisionUpsertWithWhereUniqueWithoutOutputItemInput | RecipeRevisionUpsertWithWhereUniqueWithoutOutputItemInput[]
    createMany?: RecipeRevisionCreateManyOutputItemInputEnvelope
    set?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    disconnect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    delete?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    update?: RecipeRevisionUpdateWithWhereUniqueWithoutOutputItemInput | RecipeRevisionUpdateWithWhereUniqueWithoutOutputItemInput[]
    updateMany?: RecipeRevisionUpdateManyWithWhereWithoutOutputItemInput | RecipeRevisionUpdateManyWithWhereWithoutOutputItemInput[]
    deleteMany?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
  }

  export type ProductPackagingLineUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput> | ProductPackagingLineCreateWithoutItemInput[] | ProductPackagingLineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutItemInput | ProductPackagingLineCreateOrConnectWithoutItemInput[]
    upsert?: ProductPackagingLineUpsertWithWhereUniqueWithoutItemInput | ProductPackagingLineUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ProductPackagingLineCreateManyItemInputEnvelope
    set?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    disconnect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    delete?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    update?: ProductPackagingLineUpdateWithWhereUniqueWithoutItemInput | ProductPackagingLineUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ProductPackagingLineUpdateManyWithWhereWithoutItemInput | ProductPackagingLineUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
  }

  export type ProductRecipeAssignmentCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput> | ProductRecipeAssignmentCreateWithoutProductInput[] | ProductRecipeAssignmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutProductInput | ProductRecipeAssignmentCreateOrConnectWithoutProductInput[]
    createMany?: ProductRecipeAssignmentCreateManyProductInputEnvelope
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
  }

  export type ProductPackagingLineCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput> | ProductPackagingLineCreateWithoutProductInput[] | ProductPackagingLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutProductInput | ProductPackagingLineCreateOrConnectWithoutProductInput[]
    createMany?: ProductPackagingLineCreateManyProductInputEnvelope
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
  }

  export type NutritionalInfoCreateNestedOneWithoutProductInput = {
    create?: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
    connectOrCreate?: NutritionalInfoCreateOrConnectWithoutProductInput
    connect?: NutritionalInfoWhereUniqueInput
  }

  export type ProductRecipeAssignmentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput> | ProductRecipeAssignmentCreateWithoutProductInput[] | ProductRecipeAssignmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutProductInput | ProductRecipeAssignmentCreateOrConnectWithoutProductInput[]
    createMany?: ProductRecipeAssignmentCreateManyProductInputEnvelope
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
  }

  export type ProductPackagingLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput> | ProductPackagingLineCreateWithoutProductInput[] | ProductPackagingLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutProductInput | ProductPackagingLineCreateOrConnectWithoutProductInput[]
    createMany?: ProductPackagingLineCreateManyProductInputEnvelope
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
  }

  export type NutritionalInfoUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
    connectOrCreate?: NutritionalInfoCreateOrConnectWithoutProductInput
    connect?: NutritionalInfoWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductRecipeAssignmentUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput> | ProductRecipeAssignmentCreateWithoutProductInput[] | ProductRecipeAssignmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutProductInput | ProductRecipeAssignmentCreateOrConnectWithoutProductInput[]
    upsert?: ProductRecipeAssignmentUpsertWithWhereUniqueWithoutProductInput | ProductRecipeAssignmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRecipeAssignmentCreateManyProductInputEnvelope
    set?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    disconnect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    delete?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    update?: ProductRecipeAssignmentUpdateWithWhereUniqueWithoutProductInput | ProductRecipeAssignmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRecipeAssignmentUpdateManyWithWhereWithoutProductInput | ProductRecipeAssignmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
  }

  export type ProductPackagingLineUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput> | ProductPackagingLineCreateWithoutProductInput[] | ProductPackagingLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutProductInput | ProductPackagingLineCreateOrConnectWithoutProductInput[]
    upsert?: ProductPackagingLineUpsertWithWhereUniqueWithoutProductInput | ProductPackagingLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPackagingLineCreateManyProductInputEnvelope
    set?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    disconnect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    delete?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    update?: ProductPackagingLineUpdateWithWhereUniqueWithoutProductInput | ProductPackagingLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPackagingLineUpdateManyWithWhereWithoutProductInput | ProductPackagingLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
  }

  export type NutritionalInfoUpdateOneWithoutProductNestedInput = {
    create?: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
    connectOrCreate?: NutritionalInfoCreateOrConnectWithoutProductInput
    upsert?: NutritionalInfoUpsertWithoutProductInput
    disconnect?: NutritionalInfoWhereInput | boolean
    delete?: NutritionalInfoWhereInput | boolean
    connect?: NutritionalInfoWhereUniqueInput
    update?: XOR<XOR<NutritionalInfoUpdateToOneWithWhereWithoutProductInput, NutritionalInfoUpdateWithoutProductInput>, NutritionalInfoUncheckedUpdateWithoutProductInput>
  }

  export type ProductRecipeAssignmentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput> | ProductRecipeAssignmentCreateWithoutProductInput[] | ProductRecipeAssignmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutProductInput | ProductRecipeAssignmentCreateOrConnectWithoutProductInput[]
    upsert?: ProductRecipeAssignmentUpsertWithWhereUniqueWithoutProductInput | ProductRecipeAssignmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRecipeAssignmentCreateManyProductInputEnvelope
    set?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    disconnect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    delete?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    update?: ProductRecipeAssignmentUpdateWithWhereUniqueWithoutProductInput | ProductRecipeAssignmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRecipeAssignmentUpdateManyWithWhereWithoutProductInput | ProductRecipeAssignmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
  }

  export type ProductPackagingLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput> | ProductPackagingLineCreateWithoutProductInput[] | ProductPackagingLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPackagingLineCreateOrConnectWithoutProductInput | ProductPackagingLineCreateOrConnectWithoutProductInput[]
    upsert?: ProductPackagingLineUpsertWithWhereUniqueWithoutProductInput | ProductPackagingLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPackagingLineCreateManyProductInputEnvelope
    set?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    disconnect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    delete?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    connect?: ProductPackagingLineWhereUniqueInput | ProductPackagingLineWhereUniqueInput[]
    update?: ProductPackagingLineUpdateWithWhereUniqueWithoutProductInput | ProductPackagingLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPackagingLineUpdateManyWithWhereWithoutProductInput | ProductPackagingLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
  }

  export type NutritionalInfoUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
    connectOrCreate?: NutritionalInfoCreateOrConnectWithoutProductInput
    upsert?: NutritionalInfoUpsertWithoutProductInput
    disconnect?: NutritionalInfoWhereInput | boolean
    delete?: NutritionalInfoWhereInput | boolean
    connect?: NutritionalInfoWhereUniqueInput
    update?: XOR<XOR<NutritionalInfoUpdateToOneWithWhereWithoutProductInput, NutritionalInfoUpdateWithoutProductInput>, NutritionalInfoUncheckedUpdateWithoutProductInput>
  }

  export type RecipeRevisionCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput> | RecipeRevisionCreateWithoutRecipeInput[] | RecipeRevisionUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutRecipeInput | RecipeRevisionCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeRevisionCreateManyRecipeInputEnvelope
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
  }

  export type RecipeRevisionUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput> | RecipeRevisionCreateWithoutRecipeInput[] | RecipeRevisionUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutRecipeInput | RecipeRevisionCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeRevisionCreateManyRecipeInputEnvelope
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
  }

  export type EnumRecipePurposeFieldUpdateOperationsInput = {
    set?: $Enums.RecipePurpose
  }

  export type RecipeRevisionUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput> | RecipeRevisionCreateWithoutRecipeInput[] | RecipeRevisionUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutRecipeInput | RecipeRevisionCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeRevisionUpsertWithWhereUniqueWithoutRecipeInput | RecipeRevisionUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeRevisionCreateManyRecipeInputEnvelope
    set?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    disconnect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    delete?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    update?: RecipeRevisionUpdateWithWhereUniqueWithoutRecipeInput | RecipeRevisionUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeRevisionUpdateManyWithWhereWithoutRecipeInput | RecipeRevisionUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
  }

  export type RecipeRevisionUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput> | RecipeRevisionCreateWithoutRecipeInput[] | RecipeRevisionUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutRecipeInput | RecipeRevisionCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeRevisionUpsertWithWhereUniqueWithoutRecipeInput | RecipeRevisionUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeRevisionCreateManyRecipeInputEnvelope
    set?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    disconnect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    delete?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    connect?: RecipeRevisionWhereUniqueInput | RecipeRevisionWhereUniqueInput[]
    update?: RecipeRevisionUpdateWithWhereUniqueWithoutRecipeInput | RecipeRevisionUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeRevisionUpdateManyWithWhereWithoutRecipeInput | RecipeRevisionUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutRevisionsInput = {
    create?: XOR<RecipeCreateWithoutRevisionsInput, RecipeUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRevisionsInput
    connect?: RecipeWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutOutputRevisionsInput = {
    create?: XOR<ItemCreateWithoutOutputRevisionsInput, ItemUncheckedCreateWithoutOutputRevisionsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOutputRevisionsInput
    connect?: ItemWhereUniqueInput
  }

  export type RecipeLineCreateNestedManyWithoutRecipeRevisionInput = {
    create?: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput> | RecipeLineCreateWithoutRecipeRevisionInput[] | RecipeLineUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutRecipeRevisionInput | RecipeLineCreateOrConnectWithoutRecipeRevisionInput[]
    createMany?: RecipeLineCreateManyRecipeRevisionInputEnvelope
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
  }

  export type ProductRecipeAssignmentCreateNestedManyWithoutRecipeRevisionInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput> | ProductRecipeAssignmentCreateWithoutRecipeRevisionInput[] | ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput | ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput[]
    createMany?: ProductRecipeAssignmentCreateManyRecipeRevisionInputEnvelope
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
  }

  export type RecipeLineUncheckedCreateNestedManyWithoutRecipeRevisionInput = {
    create?: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput> | RecipeLineCreateWithoutRecipeRevisionInput[] | RecipeLineUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutRecipeRevisionInput | RecipeLineCreateOrConnectWithoutRecipeRevisionInput[]
    createMany?: RecipeLineCreateManyRecipeRevisionInputEnvelope
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
  }

  export type ProductRecipeAssignmentUncheckedCreateNestedManyWithoutRecipeRevisionInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput> | ProductRecipeAssignmentCreateWithoutRecipeRevisionInput[] | ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput | ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput[]
    createMany?: ProductRecipeAssignmentCreateManyRecipeRevisionInputEnvelope
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
  }

  export type EnumRecipeStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecipeStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RecipeUpdateOneRequiredWithoutRevisionsNestedInput = {
    create?: XOR<RecipeCreateWithoutRevisionsInput, RecipeUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRevisionsInput
    upsert?: RecipeUpsertWithoutRevisionsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutRevisionsInput, RecipeUpdateWithoutRevisionsInput>, RecipeUncheckedUpdateWithoutRevisionsInput>
  }

  export type ItemUpdateOneWithoutOutputRevisionsNestedInput = {
    create?: XOR<ItemCreateWithoutOutputRevisionsInput, ItemUncheckedCreateWithoutOutputRevisionsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOutputRevisionsInput
    upsert?: ItemUpsertWithoutOutputRevisionsInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOutputRevisionsInput, ItemUpdateWithoutOutputRevisionsInput>, ItemUncheckedUpdateWithoutOutputRevisionsInput>
  }

  export type RecipeLineUpdateManyWithoutRecipeRevisionNestedInput = {
    create?: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput> | RecipeLineCreateWithoutRecipeRevisionInput[] | RecipeLineUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutRecipeRevisionInput | RecipeLineCreateOrConnectWithoutRecipeRevisionInput[]
    upsert?: RecipeLineUpsertWithWhereUniqueWithoutRecipeRevisionInput | RecipeLineUpsertWithWhereUniqueWithoutRecipeRevisionInput[]
    createMany?: RecipeLineCreateManyRecipeRevisionInputEnvelope
    set?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    disconnect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    delete?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    update?: RecipeLineUpdateWithWhereUniqueWithoutRecipeRevisionInput | RecipeLineUpdateWithWhereUniqueWithoutRecipeRevisionInput[]
    updateMany?: RecipeLineUpdateManyWithWhereWithoutRecipeRevisionInput | RecipeLineUpdateManyWithWhereWithoutRecipeRevisionInput[]
    deleteMany?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
  }

  export type ProductRecipeAssignmentUpdateManyWithoutRecipeRevisionNestedInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput> | ProductRecipeAssignmentCreateWithoutRecipeRevisionInput[] | ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput | ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput[]
    upsert?: ProductRecipeAssignmentUpsertWithWhereUniqueWithoutRecipeRevisionInput | ProductRecipeAssignmentUpsertWithWhereUniqueWithoutRecipeRevisionInput[]
    createMany?: ProductRecipeAssignmentCreateManyRecipeRevisionInputEnvelope
    set?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    disconnect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    delete?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    update?: ProductRecipeAssignmentUpdateWithWhereUniqueWithoutRecipeRevisionInput | ProductRecipeAssignmentUpdateWithWhereUniqueWithoutRecipeRevisionInput[]
    updateMany?: ProductRecipeAssignmentUpdateManyWithWhereWithoutRecipeRevisionInput | ProductRecipeAssignmentUpdateManyWithWhereWithoutRecipeRevisionInput[]
    deleteMany?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
  }

  export type RecipeLineUncheckedUpdateManyWithoutRecipeRevisionNestedInput = {
    create?: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput> | RecipeLineCreateWithoutRecipeRevisionInput[] | RecipeLineUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: RecipeLineCreateOrConnectWithoutRecipeRevisionInput | RecipeLineCreateOrConnectWithoutRecipeRevisionInput[]
    upsert?: RecipeLineUpsertWithWhereUniqueWithoutRecipeRevisionInput | RecipeLineUpsertWithWhereUniqueWithoutRecipeRevisionInput[]
    createMany?: RecipeLineCreateManyRecipeRevisionInputEnvelope
    set?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    disconnect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    delete?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    connect?: RecipeLineWhereUniqueInput | RecipeLineWhereUniqueInput[]
    update?: RecipeLineUpdateWithWhereUniqueWithoutRecipeRevisionInput | RecipeLineUpdateWithWhereUniqueWithoutRecipeRevisionInput[]
    updateMany?: RecipeLineUpdateManyWithWhereWithoutRecipeRevisionInput | RecipeLineUpdateManyWithWhereWithoutRecipeRevisionInput[]
    deleteMany?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
  }

  export type ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionNestedInput = {
    create?: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput> | ProductRecipeAssignmentCreateWithoutRecipeRevisionInput[] | ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput[]
    connectOrCreate?: ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput | ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput[]
    upsert?: ProductRecipeAssignmentUpsertWithWhereUniqueWithoutRecipeRevisionInput | ProductRecipeAssignmentUpsertWithWhereUniqueWithoutRecipeRevisionInput[]
    createMany?: ProductRecipeAssignmentCreateManyRecipeRevisionInputEnvelope
    set?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    disconnect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    delete?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    connect?: ProductRecipeAssignmentWhereUniqueInput | ProductRecipeAssignmentWhereUniqueInput[]
    update?: ProductRecipeAssignmentUpdateWithWhereUniqueWithoutRecipeRevisionInput | ProductRecipeAssignmentUpdateWithWhereUniqueWithoutRecipeRevisionInput[]
    updateMany?: ProductRecipeAssignmentUpdateManyWithWhereWithoutRecipeRevisionInput | ProductRecipeAssignmentUpdateManyWithWhereWithoutRecipeRevisionInput[]
    deleteMany?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
  }

  export type RecipeRevisionCreateNestedOneWithoutLinesInput = {
    create?: XOR<RecipeRevisionCreateWithoutLinesInput, RecipeRevisionUncheckedCreateWithoutLinesInput>
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutLinesInput
    connect?: RecipeRevisionWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutComponentLinesInput = {
    create?: XOR<ItemCreateWithoutComponentLinesInput, ItemUncheckedCreateWithoutComponentLinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutComponentLinesInput
    connect?: ItemWhereUniqueInput
  }

  export type RecipeRevisionUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutLinesInput, RecipeRevisionUncheckedCreateWithoutLinesInput>
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutLinesInput
    upsert?: RecipeRevisionUpsertWithoutLinesInput
    connect?: RecipeRevisionWhereUniqueInput
    update?: XOR<XOR<RecipeRevisionUpdateToOneWithWhereWithoutLinesInput, RecipeRevisionUpdateWithoutLinesInput>, RecipeRevisionUncheckedUpdateWithoutLinesInput>
  }

  export type ItemUpdateOneRequiredWithoutComponentLinesNestedInput = {
    create?: XOR<ItemCreateWithoutComponentLinesInput, ItemUncheckedCreateWithoutComponentLinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutComponentLinesInput
    upsert?: ItemUpsertWithoutComponentLinesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutComponentLinesInput, ItemUpdateWithoutComponentLinesInput>, ItemUncheckedUpdateWithoutComponentLinesInput>
  }

  export type ProductCreateNestedOneWithoutRecipeAssignmentsInput = {
    create?: XOR<ProductCreateWithoutRecipeAssignmentsInput, ProductUncheckedCreateWithoutRecipeAssignmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeAssignmentsInput
    connect?: ProductWhereUniqueInput
  }

  export type RecipeRevisionCreateNestedOneWithoutProductAssignmentsInput = {
    create?: XOR<RecipeRevisionCreateWithoutProductAssignmentsInput, RecipeRevisionUncheckedCreateWithoutProductAssignmentsInput>
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutProductAssignmentsInput
    connect?: RecipeRevisionWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutRecipeAssignmentsNestedInput = {
    create?: XOR<ProductCreateWithoutRecipeAssignmentsInput, ProductUncheckedCreateWithoutRecipeAssignmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeAssignmentsInput
    upsert?: ProductUpsertWithoutRecipeAssignmentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecipeAssignmentsInput, ProductUpdateWithoutRecipeAssignmentsInput>, ProductUncheckedUpdateWithoutRecipeAssignmentsInput>
  }

  export type RecipeRevisionUpdateOneRequiredWithoutProductAssignmentsNestedInput = {
    create?: XOR<RecipeRevisionCreateWithoutProductAssignmentsInput, RecipeRevisionUncheckedCreateWithoutProductAssignmentsInput>
    connectOrCreate?: RecipeRevisionCreateOrConnectWithoutProductAssignmentsInput
    upsert?: RecipeRevisionUpsertWithoutProductAssignmentsInput
    connect?: RecipeRevisionWhereUniqueInput
    update?: XOR<XOR<RecipeRevisionUpdateToOneWithWhereWithoutProductAssignmentsInput, RecipeRevisionUpdateWithoutProductAssignmentsInput>, RecipeRevisionUncheckedUpdateWithoutProductAssignmentsInput>
  }

  export type ProductCreateNestedOneWithoutPackagingLinesInput = {
    create?: XOR<ProductCreateWithoutPackagingLinesInput, ProductUncheckedCreateWithoutPackagingLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingLinesInput
    connect?: ProductWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutPackagingLinesInput = {
    create?: XOR<ItemCreateWithoutPackagingLinesInput, ItemUncheckedCreateWithoutPackagingLinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPackagingLinesInput
    connect?: ItemWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPackagingLinesNestedInput = {
    create?: XOR<ProductCreateWithoutPackagingLinesInput, ProductUncheckedCreateWithoutPackagingLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingLinesInput
    upsert?: ProductUpsertWithoutPackagingLinesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPackagingLinesInput, ProductUpdateWithoutPackagingLinesInput>, ProductUncheckedUpdateWithoutPackagingLinesInput>
  }

  export type ItemUpdateOneRequiredWithoutPackagingLinesNestedInput = {
    create?: XOR<ItemCreateWithoutPackagingLinesInput, ItemUncheckedCreateWithoutPackagingLinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPackagingLinesInput
    upsert?: ItemUpsertWithoutPackagingLinesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPackagingLinesInput, ItemUpdateWithoutPackagingLinesInput>, ItemUncheckedUpdateWithoutPackagingLinesInput>
  }

  export type ProductCreateNestedOneWithoutNutritionalInfoInput = {
    create?: XOR<ProductCreateWithoutNutritionalInfoInput, ProductUncheckedCreateWithoutNutritionalInfoInput>
    connectOrCreate?: ProductCreateOrConnectWithoutNutritionalInfoInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutNutritionalInfoNestedInput = {
    create?: XOR<ProductCreateWithoutNutritionalInfoInput, ProductUncheckedCreateWithoutNutritionalInfoInput>
    connectOrCreate?: ProductCreateOrConnectWithoutNutritionalInfoInput
    upsert?: ProductUpsertWithoutNutritionalInfoInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutNutritionalInfoInput, ProductUpdateWithoutNutritionalInfoInput>, ProductUncheckedUpdateWithoutNutritionalInfoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumItemKindFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemKind | EnumItemKindFieldRefInput<$PrismaModel>
    in?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    not?: NestedEnumItemKindFilter<$PrismaModel> | $Enums.ItemKind
  }

  export type NestedEnumSupplyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplyType | EnumSupplyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplyTypeFilter<$PrismaModel> | $Enums.SupplyType
  }

  export type NestedEnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type NestedEnumUnitOfMeasureFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitOfMeasure | EnumUnitOfMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitOfMeasureFilter<$PrismaModel> | $Enums.UnitOfMeasure
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumItemKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemKind | EnumItemKindFieldRefInput<$PrismaModel>
    in?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemKind[] | ListEnumItemKindFieldRefInput<$PrismaModel>
    not?: NestedEnumItemKindWithAggregatesFilter<$PrismaModel> | $Enums.ItemKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemKindFilter<$PrismaModel>
    _max?: NestedEnumItemKindFilter<$PrismaModel>
  }

  export type NestedEnumSupplyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplyType | EnumSupplyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplyType[] | ListEnumSupplyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplyTypeWithAggregatesFilter<$PrismaModel> | $Enums.SupplyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSupplyTypeFilter<$PrismaModel>
    _max?: NestedEnumSupplyTypeFilter<$PrismaModel>
  }

  export type NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type NestedEnumUnitOfMeasureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitOfMeasure | EnumUnitOfMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitOfMeasure[] | ListEnumUnitOfMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitOfMeasureWithAggregatesFilter<$PrismaModel> | $Enums.UnitOfMeasure
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitOfMeasureFilter<$PrismaModel>
    _max?: NestedEnumUnitOfMeasureFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRecipePurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipePurpose | EnumRecipePurposeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipePurposeFilter<$PrismaModel> | $Enums.RecipePurpose
  }

  export type NestedEnumRecipePurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipePurpose | EnumRecipePurposeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipePurpose[] | ListEnumRecipePurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipePurposeWithAggregatesFilter<$PrismaModel> | $Enums.RecipePurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipePurposeFilter<$PrismaModel>
    _max?: NestedEnumRecipePurposeFilter<$PrismaModel>
  }

  export type NestedEnumRecipeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeStatus | EnumRecipeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeStatusFilter<$PrismaModel> | $Enums.RecipeStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRecipeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeStatus | EnumRecipeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeStatus[] | ListEnumRecipeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipeStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipeStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RecipeLineCreateWithoutComponentItemInput = {
    lineNumber: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recipeRevision: RecipeRevisionCreateNestedOneWithoutLinesInput
  }

  export type RecipeLineUncheckedCreateWithoutComponentItemInput = {
    id?: number
    recipeRevisionId: number
    lineNumber: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type RecipeLineCreateOrConnectWithoutComponentItemInput = {
    where: RecipeLineWhereUniqueInput
    create: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput>
  }

  export type RecipeLineCreateManyComponentItemInputEnvelope = {
    data: RecipeLineCreateManyComponentItemInput | RecipeLineCreateManyComponentItemInput[]
    skipDuplicates?: boolean
  }

  export type RecipeRevisionCreateWithoutOutputItemInput = {
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutRevisionsInput
    lines?: RecipeLineCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUncheckedCreateWithoutOutputItemInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: RecipeLineUncheckedCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionCreateOrConnectWithoutOutputItemInput = {
    where: RecipeRevisionWhereUniqueInput
    create: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput>
  }

  export type RecipeRevisionCreateManyOutputItemInputEnvelope = {
    data: RecipeRevisionCreateManyOutputItemInput | RecipeRevisionCreateManyOutputItemInput[]
    skipDuplicates?: boolean
  }

  export type ProductPackagingLineCreateWithoutItemInput = {
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    product: ProductCreateNestedOneWithoutPackagingLinesInput
  }

  export type ProductPackagingLineUncheckedCreateWithoutItemInput = {
    id?: number
    productId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type ProductPackagingLineCreateOrConnectWithoutItemInput = {
    where: ProductPackagingLineWhereUniqueInput
    create: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput>
  }

  export type ProductPackagingLineCreateManyItemInputEnvelope = {
    data: ProductPackagingLineCreateManyItemInput | ProductPackagingLineCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type RecipeLineUpsertWithWhereUniqueWithoutComponentItemInput = {
    where: RecipeLineWhereUniqueInput
    update: XOR<RecipeLineUpdateWithoutComponentItemInput, RecipeLineUncheckedUpdateWithoutComponentItemInput>
    create: XOR<RecipeLineCreateWithoutComponentItemInput, RecipeLineUncheckedCreateWithoutComponentItemInput>
  }

  export type RecipeLineUpdateWithWhereUniqueWithoutComponentItemInput = {
    where: RecipeLineWhereUniqueInput
    data: XOR<RecipeLineUpdateWithoutComponentItemInput, RecipeLineUncheckedUpdateWithoutComponentItemInput>
  }

  export type RecipeLineUpdateManyWithWhereWithoutComponentItemInput = {
    where: RecipeLineScalarWhereInput
    data: XOR<RecipeLineUpdateManyMutationInput, RecipeLineUncheckedUpdateManyWithoutComponentItemInput>
  }

  export type RecipeLineScalarWhereInput = {
    AND?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
    OR?: RecipeLineScalarWhereInput[]
    NOT?: RecipeLineScalarWhereInput | RecipeLineScalarWhereInput[]
    id?: IntFilter<"RecipeLine"> | number
    recipeRevisionId?: IntFilter<"RecipeLine"> | number
    lineNumber?: IntFilter<"RecipeLine"> | number
    componentItemId?: IntFilter<"RecipeLine"> | number
    quantity?: DecimalFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"RecipeLine"> | $Enums.UnitOfMeasure
    processLossPercent?: DecimalNullableFilter<"RecipeLine"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"RecipeLine"> | string | null
  }

  export type RecipeRevisionUpsertWithWhereUniqueWithoutOutputItemInput = {
    where: RecipeRevisionWhereUniqueInput
    update: XOR<RecipeRevisionUpdateWithoutOutputItemInput, RecipeRevisionUncheckedUpdateWithoutOutputItemInput>
    create: XOR<RecipeRevisionCreateWithoutOutputItemInput, RecipeRevisionUncheckedCreateWithoutOutputItemInput>
  }

  export type RecipeRevisionUpdateWithWhereUniqueWithoutOutputItemInput = {
    where: RecipeRevisionWhereUniqueInput
    data: XOR<RecipeRevisionUpdateWithoutOutputItemInput, RecipeRevisionUncheckedUpdateWithoutOutputItemInput>
  }

  export type RecipeRevisionUpdateManyWithWhereWithoutOutputItemInput = {
    where: RecipeRevisionScalarWhereInput
    data: XOR<RecipeRevisionUpdateManyMutationInput, RecipeRevisionUncheckedUpdateManyWithoutOutputItemInput>
  }

  export type RecipeRevisionScalarWhereInput = {
    AND?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
    OR?: RecipeRevisionScalarWhereInput[]
    NOT?: RecipeRevisionScalarWhereInput | RecipeRevisionScalarWhereInput[]
    id?: IntFilter<"RecipeRevision"> | number
    recipeId?: IntFilter<"RecipeRevision"> | number
    revision?: IntFilter<"RecipeRevision"> | number
    status?: EnumRecipeStatusFilter<"RecipeRevision"> | $Enums.RecipeStatus
    referenceQuantity?: DecimalFilter<"RecipeRevision"> | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFilter<"RecipeRevision"> | $Enums.UnitOfMeasure
    outputItemId?: IntNullableFilter<"RecipeRevision"> | number | null
    processType?: EnumProcessTypeFilter<"RecipeRevision"> | $Enums.ProcessType
    effectiveFrom?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    effectiveTo?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"RecipeRevision"> | Date | string | null
    approvedById?: IntNullableFilter<"RecipeRevision"> | number | null
    notes?: StringNullableFilter<"RecipeRevision"> | string | null
    createdAt?: DateTimeFilter<"RecipeRevision"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeRevision"> | Date | string
  }

  export type ProductPackagingLineUpsertWithWhereUniqueWithoutItemInput = {
    where: ProductPackagingLineWhereUniqueInput
    update: XOR<ProductPackagingLineUpdateWithoutItemInput, ProductPackagingLineUncheckedUpdateWithoutItemInput>
    create: XOR<ProductPackagingLineCreateWithoutItemInput, ProductPackagingLineUncheckedCreateWithoutItemInput>
  }

  export type ProductPackagingLineUpdateWithWhereUniqueWithoutItemInput = {
    where: ProductPackagingLineWhereUniqueInput
    data: XOR<ProductPackagingLineUpdateWithoutItemInput, ProductPackagingLineUncheckedUpdateWithoutItemInput>
  }

  export type ProductPackagingLineUpdateManyWithWhereWithoutItemInput = {
    where: ProductPackagingLineScalarWhereInput
    data: XOR<ProductPackagingLineUpdateManyMutationInput, ProductPackagingLineUncheckedUpdateManyWithoutItemInput>
  }

  export type ProductPackagingLineScalarWhereInput = {
    AND?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
    OR?: ProductPackagingLineScalarWhereInput[]
    NOT?: ProductPackagingLineScalarWhereInput | ProductPackagingLineScalarWhereInput[]
    id?: IntFilter<"ProductPackagingLine"> | number
    productId?: IntFilter<"ProductPackagingLine"> | number
    itemId?: IntFilter<"ProductPackagingLine"> | number
    quantity?: DecimalFilter<"ProductPackagingLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFilter<"ProductPackagingLine"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductPackagingLine"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPackagingLine"> | Date | string | null
  }

  export type ProductRecipeAssignmentCreateWithoutProductInput = {
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    recipeRevision: RecipeRevisionCreateNestedOneWithoutProductAssignmentsInput
  }

  export type ProductRecipeAssignmentUncheckedCreateWithoutProductInput = {
    id?: number
    recipeRevisionId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductRecipeAssignmentCreateOrConnectWithoutProductInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    create: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput>
  }

  export type ProductRecipeAssignmentCreateManyProductInputEnvelope = {
    data: ProductRecipeAssignmentCreateManyProductInput | ProductRecipeAssignmentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductPackagingLineCreateWithoutProductInput = {
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    item: ItemCreateNestedOneWithoutPackagingLinesInput
  }

  export type ProductPackagingLineUncheckedCreateWithoutProductInput = {
    id?: number
    itemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type ProductPackagingLineCreateOrConnectWithoutProductInput = {
    where: ProductPackagingLineWhereUniqueInput
    create: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput>
  }

  export type ProductPackagingLineCreateManyProductInputEnvelope = {
    data: ProductPackagingLineCreateManyProductInput | ProductPackagingLineCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type NutritionalInfoCreateWithoutProductInput = {
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
  }

  export type NutritionalInfoUncheckedCreateWithoutProductInput = {
    id?: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
  }

  export type NutritionalInfoCreateOrConnectWithoutProductInput = {
    where: NutritionalInfoWhereUniqueInput
    create: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
  }

  export type ProductRecipeAssignmentUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    update: XOR<ProductRecipeAssignmentUpdateWithoutProductInput, ProductRecipeAssignmentUncheckedUpdateWithoutProductInput>
    create: XOR<ProductRecipeAssignmentCreateWithoutProductInput, ProductRecipeAssignmentUncheckedCreateWithoutProductInput>
  }

  export type ProductRecipeAssignmentUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    data: XOR<ProductRecipeAssignmentUpdateWithoutProductInput, ProductRecipeAssignmentUncheckedUpdateWithoutProductInput>
  }

  export type ProductRecipeAssignmentUpdateManyWithWhereWithoutProductInput = {
    where: ProductRecipeAssignmentScalarWhereInput
    data: XOR<ProductRecipeAssignmentUpdateManyMutationInput, ProductRecipeAssignmentUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductRecipeAssignmentScalarWhereInput = {
    AND?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
    OR?: ProductRecipeAssignmentScalarWhereInput[]
    NOT?: ProductRecipeAssignmentScalarWhereInput | ProductRecipeAssignmentScalarWhereInput[]
    id?: IntFilter<"ProductRecipeAssignment"> | number
    productId?: IntFilter<"ProductRecipeAssignment"> | number
    recipeRevisionId?: IntFilter<"ProductRecipeAssignment"> | number
    portionQuantity?: DecimalFilter<"ProductRecipeAssignment"> | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFilter<"ProductRecipeAssignment"> | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductRecipeAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductRecipeAssignment"> | Date | string
  }

  export type ProductPackagingLineUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPackagingLineWhereUniqueInput
    update: XOR<ProductPackagingLineUpdateWithoutProductInput, ProductPackagingLineUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPackagingLineCreateWithoutProductInput, ProductPackagingLineUncheckedCreateWithoutProductInput>
  }

  export type ProductPackagingLineUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPackagingLineWhereUniqueInput
    data: XOR<ProductPackagingLineUpdateWithoutProductInput, ProductPackagingLineUncheckedUpdateWithoutProductInput>
  }

  export type ProductPackagingLineUpdateManyWithWhereWithoutProductInput = {
    where: ProductPackagingLineScalarWhereInput
    data: XOR<ProductPackagingLineUpdateManyMutationInput, ProductPackagingLineUncheckedUpdateManyWithoutProductInput>
  }

  export type NutritionalInfoUpsertWithoutProductInput = {
    update: XOR<NutritionalInfoUpdateWithoutProductInput, NutritionalInfoUncheckedUpdateWithoutProductInput>
    create: XOR<NutritionalInfoCreateWithoutProductInput, NutritionalInfoUncheckedCreateWithoutProductInput>
    where?: NutritionalInfoWhereInput
  }

  export type NutritionalInfoUpdateToOneWithWhereWithoutProductInput = {
    where?: NutritionalInfoWhereInput
    data: XOR<NutritionalInfoUpdateWithoutProductInput, NutritionalInfoUncheckedUpdateWithoutProductInput>
  }

  export type NutritionalInfoUpdateWithoutProductInput = {
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionalInfoUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
  }

  export type RecipeRevisionCreateWithoutRecipeInput = {
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outputItem?: ItemCreateNestedOneWithoutOutputRevisionsInput
    lines?: RecipeLineCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUncheckedCreateWithoutRecipeInput = {
    id?: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: RecipeLineUncheckedCreateNestedManyWithoutRecipeRevisionInput
    productAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionCreateOrConnectWithoutRecipeInput = {
    where: RecipeRevisionWhereUniqueInput
    create: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeRevisionCreateManyRecipeInputEnvelope = {
    data: RecipeRevisionCreateManyRecipeInput | RecipeRevisionCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeRevisionUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeRevisionWhereUniqueInput
    update: XOR<RecipeRevisionUpdateWithoutRecipeInput, RecipeRevisionUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeRevisionCreateWithoutRecipeInput, RecipeRevisionUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeRevisionUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeRevisionWhereUniqueInput
    data: XOR<RecipeRevisionUpdateWithoutRecipeInput, RecipeRevisionUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeRevisionUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeRevisionScalarWhereInput
    data: XOR<RecipeRevisionUpdateManyMutationInput, RecipeRevisionUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutRevisionsInput = {
    code: string
    name: string
    description?: string | null
    purpose: $Enums.RecipePurpose
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUncheckedCreateWithoutRevisionsInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    purpose: $Enums.RecipePurpose
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeCreateOrConnectWithoutRevisionsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRevisionsInput, RecipeUncheckedCreateWithoutRevisionsInput>
  }

  export type ItemCreateWithoutOutputRevisionsInput = {
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineCreateNestedManyWithoutComponentItemInput
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOutputRevisionsInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineUncheckedCreateNestedManyWithoutComponentItemInput
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOutputRevisionsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOutputRevisionsInput, ItemUncheckedCreateWithoutOutputRevisionsInput>
  }

  export type RecipeLineCreateWithoutRecipeRevisionInput = {
    lineNumber: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    componentItem: ItemCreateNestedOneWithoutComponentLinesInput
  }

  export type RecipeLineUncheckedCreateWithoutRecipeRevisionInput = {
    id?: number
    lineNumber: number
    componentItemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type RecipeLineCreateOrConnectWithoutRecipeRevisionInput = {
    where: RecipeLineWhereUniqueInput
    create: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput>
  }

  export type RecipeLineCreateManyRecipeRevisionInputEnvelope = {
    data: RecipeLineCreateManyRecipeRevisionInput | RecipeLineCreateManyRecipeRevisionInput[]
    skipDuplicates?: boolean
  }

  export type ProductRecipeAssignmentCreateWithoutRecipeRevisionInput = {
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutRecipeAssignmentsInput
  }

  export type ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput = {
    id?: number
    productId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductRecipeAssignmentCreateOrConnectWithoutRecipeRevisionInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    create: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput>
  }

  export type ProductRecipeAssignmentCreateManyRecipeRevisionInputEnvelope = {
    data: ProductRecipeAssignmentCreateManyRecipeRevisionInput | ProductRecipeAssignmentCreateManyRecipeRevisionInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithoutRevisionsInput = {
    update: XOR<RecipeUpdateWithoutRevisionsInput, RecipeUncheckedUpdateWithoutRevisionsInput>
    create: XOR<RecipeCreateWithoutRevisionsInput, RecipeUncheckedCreateWithoutRevisionsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutRevisionsInput, RecipeUncheckedUpdateWithoutRevisionsInput>
  }

  export type RecipeUpdateWithoutRevisionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateWithoutRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: EnumRecipePurposeFieldUpdateOperationsInput | $Enums.RecipePurpose
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutOutputRevisionsInput = {
    update: XOR<ItemUpdateWithoutOutputRevisionsInput, ItemUncheckedUpdateWithoutOutputRevisionsInput>
    create: XOR<ItemCreateWithoutOutputRevisionsInput, ItemUncheckedCreateWithoutOutputRevisionsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOutputRevisionsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOutputRevisionsInput, ItemUncheckedUpdateWithoutOutputRevisionsInput>
  }

  export type ItemUpdateWithoutOutputRevisionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUpdateManyWithoutComponentItemNestedInput
    packagingLines?: ProductPackagingLineUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOutputRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUncheckedUpdateManyWithoutComponentItemNestedInput
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutItemNestedInput
  }

  export type RecipeLineUpsertWithWhereUniqueWithoutRecipeRevisionInput = {
    where: RecipeLineWhereUniqueInput
    update: XOR<RecipeLineUpdateWithoutRecipeRevisionInput, RecipeLineUncheckedUpdateWithoutRecipeRevisionInput>
    create: XOR<RecipeLineCreateWithoutRecipeRevisionInput, RecipeLineUncheckedCreateWithoutRecipeRevisionInput>
  }

  export type RecipeLineUpdateWithWhereUniqueWithoutRecipeRevisionInput = {
    where: RecipeLineWhereUniqueInput
    data: XOR<RecipeLineUpdateWithoutRecipeRevisionInput, RecipeLineUncheckedUpdateWithoutRecipeRevisionInput>
  }

  export type RecipeLineUpdateManyWithWhereWithoutRecipeRevisionInput = {
    where: RecipeLineScalarWhereInput
    data: XOR<RecipeLineUpdateManyMutationInput, RecipeLineUncheckedUpdateManyWithoutRecipeRevisionInput>
  }

  export type ProductRecipeAssignmentUpsertWithWhereUniqueWithoutRecipeRevisionInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    update: XOR<ProductRecipeAssignmentUpdateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedUpdateWithoutRecipeRevisionInput>
    create: XOR<ProductRecipeAssignmentCreateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedCreateWithoutRecipeRevisionInput>
  }

  export type ProductRecipeAssignmentUpdateWithWhereUniqueWithoutRecipeRevisionInput = {
    where: ProductRecipeAssignmentWhereUniqueInput
    data: XOR<ProductRecipeAssignmentUpdateWithoutRecipeRevisionInput, ProductRecipeAssignmentUncheckedUpdateWithoutRecipeRevisionInput>
  }

  export type ProductRecipeAssignmentUpdateManyWithWhereWithoutRecipeRevisionInput = {
    where: ProductRecipeAssignmentScalarWhereInput
    data: XOR<ProductRecipeAssignmentUpdateManyMutationInput, ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionInput>
  }

  export type RecipeRevisionCreateWithoutLinesInput = {
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutRevisionsInput
    outputItem?: ItemCreateNestedOneWithoutOutputRevisionsInput
    productAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUncheckedCreateWithoutLinesInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionCreateOrConnectWithoutLinesInput = {
    where: RecipeRevisionWhereUniqueInput
    create: XOR<RecipeRevisionCreateWithoutLinesInput, RecipeRevisionUncheckedCreateWithoutLinesInput>
  }

  export type ItemCreateWithoutComponentLinesInput = {
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outputRevisions?: RecipeRevisionCreateNestedManyWithoutOutputItemInput
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutComponentLinesInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outputRevisions?: RecipeRevisionUncheckedCreateNestedManyWithoutOutputItemInput
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutComponentLinesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutComponentLinesInput, ItemUncheckedCreateWithoutComponentLinesInput>
  }

  export type RecipeRevisionUpsertWithoutLinesInput = {
    update: XOR<RecipeRevisionUpdateWithoutLinesInput, RecipeRevisionUncheckedUpdateWithoutLinesInput>
    create: XOR<RecipeRevisionCreateWithoutLinesInput, RecipeRevisionUncheckedCreateWithoutLinesInput>
    where?: RecipeRevisionWhereInput
  }

  export type RecipeRevisionUpdateToOneWithWhereWithoutLinesInput = {
    where?: RecipeRevisionWhereInput
    data: XOR<RecipeRevisionUpdateWithoutLinesInput, RecipeRevisionUncheckedUpdateWithoutLinesInput>
  }

  export type RecipeRevisionUpdateWithoutLinesInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutRevisionsNestedInput
    outputItem?: ItemUpdateOneWithoutOutputRevisionsNestedInput
    productAssignments?: ProductRecipeAssignmentUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type ItemUpsertWithoutComponentLinesInput = {
    update: XOR<ItemUpdateWithoutComponentLinesInput, ItemUncheckedUpdateWithoutComponentLinesInput>
    create: XOR<ItemCreateWithoutComponentLinesInput, ItemUncheckedCreateWithoutComponentLinesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutComponentLinesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutComponentLinesInput, ItemUncheckedUpdateWithoutComponentLinesInput>
  }

  export type ItemUpdateWithoutComponentLinesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outputRevisions?: RecipeRevisionUpdateManyWithoutOutputItemNestedInput
    packagingLines?: ProductPackagingLineUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutComponentLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outputRevisions?: RecipeRevisionUncheckedUpdateManyWithoutOutputItemNestedInput
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ProductCreateWithoutRecipeAssignmentsInput = {
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecipeAssignmentsInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecipeAssignmentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecipeAssignmentsInput, ProductUncheckedCreateWithoutRecipeAssignmentsInput>
  }

  export type RecipeRevisionCreateWithoutProductAssignmentsInput = {
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutRevisionsInput
    outputItem?: ItemCreateNestedOneWithoutOutputRevisionsInput
    lines?: RecipeLineCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionUncheckedCreateWithoutProductAssignmentsInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: RecipeLineUncheckedCreateNestedManyWithoutRecipeRevisionInput
  }

  export type RecipeRevisionCreateOrConnectWithoutProductAssignmentsInput = {
    where: RecipeRevisionWhereUniqueInput
    create: XOR<RecipeRevisionCreateWithoutProductAssignmentsInput, RecipeRevisionUncheckedCreateWithoutProductAssignmentsInput>
  }

  export type ProductUpsertWithoutRecipeAssignmentsInput = {
    update: XOR<ProductUpdateWithoutRecipeAssignmentsInput, ProductUncheckedUpdateWithoutRecipeAssignmentsInput>
    create: XOR<ProductCreateWithoutRecipeAssignmentsInput, ProductUncheckedCreateWithoutRecipeAssignmentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecipeAssignmentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecipeAssignmentsInput, ProductUncheckedUpdateWithoutRecipeAssignmentsInput>
  }

  export type ProductUpdateWithoutRecipeAssignmentsInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packagingLines?: ProductPackagingLineUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecipeAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUncheckedUpdateOneWithoutProductNestedInput
  }

  export type RecipeRevisionUpsertWithoutProductAssignmentsInput = {
    update: XOR<RecipeRevisionUpdateWithoutProductAssignmentsInput, RecipeRevisionUncheckedUpdateWithoutProductAssignmentsInput>
    create: XOR<RecipeRevisionCreateWithoutProductAssignmentsInput, RecipeRevisionUncheckedCreateWithoutProductAssignmentsInput>
    where?: RecipeRevisionWhereInput
  }

  export type RecipeRevisionUpdateToOneWithWhereWithoutProductAssignmentsInput = {
    where?: RecipeRevisionWhereInput
    data: XOR<RecipeRevisionUpdateWithoutProductAssignmentsInput, RecipeRevisionUncheckedUpdateWithoutProductAssignmentsInput>
  }

  export type RecipeRevisionUpdateWithoutProductAssignmentsInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutRevisionsNestedInput
    outputItem?: ItemUpdateOneWithoutOutputRevisionsNestedInput
    lines?: RecipeLineUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateWithoutProductAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: RecipeLineUncheckedUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type ProductCreateWithoutPackagingLinesInput = {
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPackagingLinesInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutProductInput
    nutritionalInfo?: NutritionalInfoUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPackagingLinesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPackagingLinesInput, ProductUncheckedCreateWithoutPackagingLinesInput>
  }

  export type ItemCreateWithoutPackagingLinesInput = {
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineCreateNestedManyWithoutComponentItemInput
    outputRevisions?: RecipeRevisionCreateNestedManyWithoutOutputItemInput
  }

  export type ItemUncheckedCreateWithoutPackagingLinesInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    kind: $Enums.ItemKind
    supplyType?: $Enums.SupplyType
    processType?: $Enums.ProcessType
    baseUnit: $Enums.UnitOfMeasure
    allergenDeclaration?: string | null
    origin?: string | null
    manufacturer?: string | null
    defaultSupplierId?: number | null
    packSizeDescription?: string | null
    netContentDescription?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    componentLines?: RecipeLineUncheckedCreateNestedManyWithoutComponentItemInput
    outputRevisions?: RecipeRevisionUncheckedCreateNestedManyWithoutOutputItemInput
  }

  export type ItemCreateOrConnectWithoutPackagingLinesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPackagingLinesInput, ItemUncheckedCreateWithoutPackagingLinesInput>
  }

  export type ProductUpsertWithoutPackagingLinesInput = {
    update: XOR<ProductUpdateWithoutPackagingLinesInput, ProductUncheckedUpdateWithoutPackagingLinesInput>
    create: XOR<ProductCreateWithoutPackagingLinesInput, ProductUncheckedCreateWithoutPackagingLinesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPackagingLinesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPackagingLinesInput, ProductUncheckedUpdateWithoutPackagingLinesInput>
  }

  export type ProductUpdateWithoutPackagingLinesInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPackagingLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutProductNestedInput
    nutritionalInfo?: NutritionalInfoUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ItemUpsertWithoutPackagingLinesInput = {
    update: XOR<ItemUpdateWithoutPackagingLinesInput, ItemUncheckedUpdateWithoutPackagingLinesInput>
    create: XOR<ItemCreateWithoutPackagingLinesInput, ItemUncheckedCreateWithoutPackagingLinesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPackagingLinesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPackagingLinesInput, ItemUncheckedUpdateWithoutPackagingLinesInput>
  }

  export type ItemUpdateWithoutPackagingLinesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUpdateManyWithoutComponentItemNestedInput
    outputRevisions?: RecipeRevisionUpdateManyWithoutOutputItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutPackagingLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: EnumItemKindFieldUpdateOperationsInput | $Enums.ItemKind
    supplyType?: EnumSupplyTypeFieldUpdateOperationsInput | $Enums.SupplyType
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    baseUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    allergenDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    defaultSupplierId?: NullableIntFieldUpdateOperationsInput | number | null
    packSizeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    netContentDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentLines?: RecipeLineUncheckedUpdateManyWithoutComponentItemNestedInput
    outputRevisions?: RecipeRevisionUncheckedUpdateManyWithoutOutputItemNestedInput
  }

  export type ProductCreateWithoutNutritionalInfoInput = {
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentCreateNestedManyWithoutProductInput
    packagingLines?: ProductPackagingLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutNutritionalInfoInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    netWeightG?: Decimal | DecimalJsLike | number | string | null
    price: number
    companyId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedCreateNestedManyWithoutProductInput
    packagingLines?: ProductPackagingLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutNutritionalInfoInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutNutritionalInfoInput, ProductUncheckedCreateWithoutNutritionalInfoInput>
  }

  export type ProductUpsertWithoutNutritionalInfoInput = {
    update: XOR<ProductUpdateWithoutNutritionalInfoInput, ProductUncheckedUpdateWithoutNutritionalInfoInput>
    create: XOR<ProductCreateWithoutNutritionalInfoInput, ProductUncheckedCreateWithoutNutritionalInfoInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutNutritionalInfoInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutNutritionalInfoInput, ProductUncheckedUpdateWithoutNutritionalInfoInput>
  }

  export type ProductUpdateWithoutNutritionalInfoInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUpdateManyWithoutProductNestedInput
    packagingLines?: ProductPackagingLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutNutritionalInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    netWeightG?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutProductNestedInput
    packagingLines?: ProductPackagingLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RecipeLineCreateManyComponentItemInput = {
    id?: number
    recipeRevisionId: number
    lineNumber: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type RecipeRevisionCreateManyOutputItemInput = {
    id?: number
    recipeId: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPackagingLineCreateManyItemInput = {
    id?: number
    productId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type RecipeLineUpdateWithoutComponentItemInput = {
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipeRevision?: RecipeRevisionUpdateOneRequiredWithoutLinesNestedInput
  }

  export type RecipeLineUncheckedUpdateWithoutComponentItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeLineUncheckedUpdateManyWithoutComponentItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeRevisionUpdateWithoutOutputItemInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutRevisionsNestedInput
    lines?: RecipeLineUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateWithoutOutputItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: RecipeLineUncheckedUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateManyWithoutOutputItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPackagingLineUpdateWithoutItemInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutPackagingLinesNestedInput
  }

  export type ProductPackagingLineUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPackagingLineUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductRecipeAssignmentCreateManyProductInput = {
    id?: number
    recipeRevisionId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductPackagingLineCreateManyProductInput = {
    id?: number
    itemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit?: $Enums.UnitOfMeasure
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
  }

  export type ProductRecipeAssignmentUpdateWithoutProductInput = {
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeRevision?: RecipeRevisionUpdateOneRequiredWithoutProductAssignmentsNestedInput
  }

  export type ProductRecipeAssignmentUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRecipeAssignmentUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeRevisionId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPackagingLineUpdateWithoutProductInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item?: ItemUpdateOneRequiredWithoutPackagingLinesNestedInput
  }

  export type ProductPackagingLineUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPackagingLineUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeRevisionCreateManyRecipeInput = {
    id?: number
    revision: number
    status?: $Enums.RecipeStatus
    referenceQuantity: Decimal | DecimalJsLike | number | string
    referenceUnit: $Enums.UnitOfMeasure
    outputItemId?: number | null
    processType?: $Enums.ProcessType
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    approvedAt?: Date | string | null
    approvedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeRevisionUpdateWithoutRecipeInput = {
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outputItem?: ItemUpdateOneWithoutOutputRevisionsNestedInput
    lines?: RecipeLineUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: RecipeLineUncheckedUpdateManyWithoutRecipeRevisionNestedInput
    productAssignments?: ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionNestedInput
  }

  export type RecipeRevisionUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumRecipeStatusFieldUpdateOperationsInput | $Enums.RecipeStatus
    referenceQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    outputItemId?: NullableIntFieldUpdateOperationsInput | number | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeLineCreateManyRecipeRevisionInput = {
    id?: number
    lineNumber: number
    componentItemId: number
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.UnitOfMeasure
    processLossPercent?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
  }

  export type ProductRecipeAssignmentCreateManyRecipeRevisionInput = {
    id?: number
    productId: number
    portionQuantity: Decimal | DecimalJsLike | number | string
    portionUnit?: $Enums.UnitOfMeasure
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
  }

  export type RecipeLineUpdateWithoutRecipeRevisionInput = {
    lineNumber?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    componentItem?: ItemUpdateOneRequiredWithoutComponentLinesNestedInput
  }

  export type RecipeLineUncheckedUpdateWithoutRecipeRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    componentItemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeLineUncheckedUpdateManyWithoutRecipeRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    componentItemId?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    processLossPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductRecipeAssignmentUpdateWithoutRecipeRevisionInput = {
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRecipeAssignmentsNestedInput
  }

  export type ProductRecipeAssignmentUncheckedUpdateWithoutRecipeRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRecipeAssignmentUncheckedUpdateManyWithoutRecipeRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    portionQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    portionUnit?: EnumUnitOfMeasureFieldUpdateOperationsInput | $Enums.UnitOfMeasure
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}