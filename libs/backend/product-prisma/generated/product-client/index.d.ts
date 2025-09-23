
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model ProductIngredient
 * 
 */
export type ProductIngredient = $Result.DefaultSelection<Prisma.$ProductIngredientPayload>
/**
 * Model Sauce
 * 
 */
export type Sauce = $Result.DefaultSelection<Prisma.$SaucePayload>
/**
 * Model SauceIngredient
 * 
 */
export type SauceIngredient = $Result.DefaultSelection<Prisma.$SauceIngredientPayload>
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
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productIngredient`: Exposes CRUD operations for the **ProductIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductIngredients
    * const productIngredients = await prisma.productIngredient.findMany()
    * ```
    */
  get productIngredient(): Prisma.ProductIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sauce`: Exposes CRUD operations for the **Sauce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sauces
    * const sauces = await prisma.sauce.findMany()
    * ```
    */
  get sauce(): Prisma.SauceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sauceIngredient`: Exposes CRUD operations for the **SauceIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SauceIngredients
    * const sauceIngredients = await prisma.sauceIngredient.findMany()
    * ```
    */
  get sauceIngredient(): Prisma.SauceIngredientDelegate<ExtArgs, ClientOptions>;

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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Product: 'Product',
    Ingredient: 'Ingredient',
    ProductIngredient: 'ProductIngredient',
    Sauce: 'Sauce',
    SauceIngredient: 'SauceIngredient',
    Tray: 'Tray',
    Garnish: 'Garnish',
    Unit: 'Unit',
    NutritionalInfo: 'NutritionalInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "ingredient" | "productIngredient" | "sauce" | "sauceIngredient" | "tray" | "garnish" | "unit" | "nutritionalInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      ProductIngredient: {
        payload: Prisma.$ProductIngredientPayload<ExtArgs>
        fields: Prisma.ProductIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          findFirst: {
            args: Prisma.ProductIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          findMany: {
            args: Prisma.ProductIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>[]
          }
          create: {
            args: Prisma.ProductIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          createMany: {
            args: Prisma.ProductIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>[]
          }
          delete: {
            args: Prisma.ProductIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          update: {
            args: Prisma.ProductIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          deleteMany: {
            args: Prisma.ProductIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>[]
          }
          upsert: {
            args: Prisma.ProductIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          aggregate: {
            args: Prisma.ProductIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductIngredient>
          }
          groupBy: {
            args: Prisma.ProductIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<ProductIngredientCountAggregateOutputType> | number
          }
        }
      }
      Sauce: {
        payload: Prisma.$SaucePayload<ExtArgs>
        fields: Prisma.SauceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SauceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SauceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          findFirst: {
            args: Prisma.SauceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SauceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          findMany: {
            args: Prisma.SauceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>[]
          }
          create: {
            args: Prisma.SauceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          createMany: {
            args: Prisma.SauceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SauceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>[]
          }
          delete: {
            args: Prisma.SauceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          update: {
            args: Prisma.SauceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          deleteMany: {
            args: Prisma.SauceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SauceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SauceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>[]
          }
          upsert: {
            args: Prisma.SauceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaucePayload>
          }
          aggregate: {
            args: Prisma.SauceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSauce>
          }
          groupBy: {
            args: Prisma.SauceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SauceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SauceCountArgs<ExtArgs>
            result: $Utils.Optional<SauceCountAggregateOutputType> | number
          }
        }
      }
      SauceIngredient: {
        payload: Prisma.$SauceIngredientPayload<ExtArgs>
        fields: Prisma.SauceIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SauceIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SauceIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          findFirst: {
            args: Prisma.SauceIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SauceIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          findMany: {
            args: Prisma.SauceIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>[]
          }
          create: {
            args: Prisma.SauceIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          createMany: {
            args: Prisma.SauceIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SauceIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>[]
          }
          delete: {
            args: Prisma.SauceIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          update: {
            args: Prisma.SauceIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          deleteMany: {
            args: Prisma.SauceIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SauceIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SauceIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>[]
          }
          upsert: {
            args: Prisma.SauceIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauceIngredientPayload>
          }
          aggregate: {
            args: Prisma.SauceIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSauceIngredient>
          }
          groupBy: {
            args: Prisma.SauceIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<SauceIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.SauceIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<SauceIngredientCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    ingredient?: IngredientOmit
    productIngredient?: ProductIngredientOmit
    sauce?: SauceOmit
    sauceIngredient?: SauceIngredientOmit
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
   * Models
   */

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
    price: number | null
    companyId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
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
    price: number | null
    companyId: number | null
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
    price: number | null
    companyId: number | null
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
    price: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    companyId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
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
    price?: true
    companyId?: true
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
    price?: true
    companyId?: true
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
    price?: true
    companyId?: true
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
    price: number
    companyId: number | null
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
    price?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    productWeight?: boolean
    price?: boolean
    companyId?: boolean
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
    price?: boolean
    companyId?: boolean
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
    price?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCode" | "name" | "description" | "image" | "productWeight" | "price" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productCode: string
      name: string
      description: string
      image: string | null
      productWeight: string
      price: number
      companyId: number | null
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
    readonly price: FieldRef<"Product", 'Float'>
    readonly companyId: FieldRef<"Product", 'Int'>
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
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    unit: string | null
    netWeight: string | null
    origin: string | null
    usedBy: Date | null
    batchCode: string | null
    manufacturer: string | null
    vendor: string | null
    packSize: string | null
    netContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    description: string | null
    unit: string | null
    netWeight: string | null
    origin: string | null
    usedBy: Date | null
    batchCode: string | null
    manufacturer: string | null
    vendor: string | null
    packSize: string | null
    netContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    unit: number
    netWeight: number
    origin: number
    usedBy: number
    batchCode: number
    manufacturer: number
    vendor: number
    packSize: number
    netContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    unit?: true
    netWeight?: true
    origin?: true
    usedBy?: true
    batchCode?: true
    manufacturer?: true
    vendor?: true
    packSize?: true
    netContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    unit?: true
    netWeight?: true
    origin?: true
    usedBy?: true
    batchCode?: true
    manufacturer?: true
    vendor?: true
    packSize?: true
    netContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    unit?: true
    netWeight?: true
    origin?: true
    usedBy?: true
    batchCode?: true
    manufacturer?: true
    vendor?: true
    packSize?: true
    netContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    code: string
    name: string
    description: string | null
    unit: string
    netWeight: string | null
    origin: string | null
    usedBy: Date | null
    batchCode: string | null
    manufacturer: string | null
    vendor: string | null
    packSize: string | null
    netContent: string | null
    createdAt: Date
    updatedAt: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    netWeight?: boolean
    origin?: boolean
    usedBy?: boolean
    batchCode?: boolean
    manufacturer?: boolean
    vendor?: boolean
    packSize?: boolean
    netContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    netWeight?: boolean
    origin?: boolean
    usedBy?: boolean
    batchCode?: boolean
    manufacturer?: boolean
    vendor?: boolean
    packSize?: boolean
    netContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    netWeight?: boolean
    origin?: boolean
    usedBy?: boolean
    batchCode?: boolean
    manufacturer?: boolean
    vendor?: boolean
    packSize?: boolean
    netContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    netWeight?: boolean
    origin?: boolean
    usedBy?: boolean
    batchCode?: boolean
    manufacturer?: boolean
    vendor?: boolean
    packSize?: boolean
    netContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "unit" | "netWeight" | "origin" | "usedBy" | "batchCode" | "manufacturer" | "vendor" | "packSize" | "netContent" | "createdAt" | "updatedAt", ExtArgs["result"]["ingredient"]>

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      description: string | null
      unit: string
      netWeight: string | null
      origin: string | null
      usedBy: Date | null
      batchCode: string | null
      manufacturer: string | null
      vendor: string | null
      packSize: string | null
      netContent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly code: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly unit: FieldRef<"Ingredient", 'String'>
    readonly netWeight: FieldRef<"Ingredient", 'String'>
    readonly origin: FieldRef<"Ingredient", 'String'>
    readonly usedBy: FieldRef<"Ingredient", 'DateTime'>
    readonly batchCode: FieldRef<"Ingredient", 'String'>
    readonly manufacturer: FieldRef<"Ingredient", 'String'>
    readonly vendor: FieldRef<"Ingredient", 'String'>
    readonly packSize: FieldRef<"Ingredient", 'String'>
    readonly netContent: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
  }


  /**
   * Model ProductIngredient
   */

  export type AggregateProductIngredient = {
    _count: ProductIngredientCountAggregateOutputType | null
    _avg: ProductIngredientAvgAggregateOutputType | null
    _sum: ProductIngredientSumAggregateOutputType | null
    _min: ProductIngredientMinAggregateOutputType | null
    _max: ProductIngredientMaxAggregateOutputType | null
  }

  export type ProductIngredientAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientSumAggregateOutputType = {
    id: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientMinAggregateOutputType = {
    id: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientCountAggregateOutputType = {
    id: number
    productId: number
    ingredientId: number
    quantity: number
    _all: number
  }


  export type ProductIngredientAvgAggregateInputType = {
    id?: true
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientSumAggregateInputType = {
    id?: true
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientMinAggregateInputType = {
    id?: true
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientMaxAggregateInputType = {
    id?: true
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientCountAggregateInputType = {
    id?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    _all?: true
  }

  export type ProductIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductIngredient to aggregate.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductIngredients
    **/
    _count?: true | ProductIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductIngredientMaxAggregateInputType
  }

  export type GetProductIngredientAggregateType<T extends ProductIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateProductIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductIngredient[P]>
      : GetScalarType<T[P], AggregateProductIngredient[P]>
  }




  export type ProductIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIngredientWhereInput
    orderBy?: ProductIngredientOrderByWithAggregationInput | ProductIngredientOrderByWithAggregationInput[]
    by: ProductIngredientScalarFieldEnum[] | ProductIngredientScalarFieldEnum
    having?: ProductIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductIngredientCountAggregateInputType | true
    _avg?: ProductIngredientAvgAggregateInputType
    _sum?: ProductIngredientSumAggregateInputType
    _min?: ProductIngredientMinAggregateInputType
    _max?: ProductIngredientMaxAggregateInputType
  }

  export type ProductIngredientGroupByOutputType = {
    id: number
    productId: number
    ingredientId: number
    quantity: number
    _count: ProductIngredientCountAggregateOutputType | null
    _avg: ProductIngredientAvgAggregateOutputType | null
    _sum: ProductIngredientSumAggregateOutputType | null
    _min: ProductIngredientMinAggregateOutputType | null
    _max: ProductIngredientMaxAggregateOutputType | null
  }

  type GetProductIngredientGroupByPayload<T extends ProductIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], ProductIngredientGroupByOutputType[P]>
        }
      >
    >


  export type ProductIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["productIngredient"]>

  export type ProductIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["productIngredient"]>

  export type ProductIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["productIngredient"]>

  export type ProductIngredientSelectScalar = {
    id?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }

  export type ProductIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "ingredientId" | "quantity", ExtArgs["result"]["productIngredient"]>

  export type $ProductIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductIngredient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      ingredientId: number
      quantity: number
    }, ExtArgs["result"]["productIngredient"]>
    composites: {}
  }

  type ProductIngredientGetPayload<S extends boolean | null | undefined | ProductIngredientDefaultArgs> = $Result.GetResult<Prisma.$ProductIngredientPayload, S>

  type ProductIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductIngredientCountAggregateInputType | true
    }

  export interface ProductIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductIngredient'], meta: { name: 'ProductIngredient' } }
    /**
     * Find zero or one ProductIngredient that matches the filter.
     * @param {ProductIngredientFindUniqueArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductIngredientFindUniqueArgs>(args: SelectSubset<T, ProductIngredientFindUniqueArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductIngredientFindUniqueOrThrowArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindFirstArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductIngredientFindFirstArgs>(args?: SelectSubset<T, ProductIngredientFindFirstArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindFirstOrThrowArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductIngredients
     * const productIngredients = await prisma.productIngredient.findMany()
     * 
     * // Get first 10 ProductIngredients
     * const productIngredients = await prisma.productIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productIngredientWithIdOnly = await prisma.productIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductIngredientFindManyArgs>(args?: SelectSubset<T, ProductIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductIngredient.
     * @param {ProductIngredientCreateArgs} args - Arguments to create a ProductIngredient.
     * @example
     * // Create one ProductIngredient
     * const ProductIngredient = await prisma.productIngredient.create({
     *   data: {
     *     // ... data to create a ProductIngredient
     *   }
     * })
     * 
     */
    create<T extends ProductIngredientCreateArgs>(args: SelectSubset<T, ProductIngredientCreateArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductIngredients.
     * @param {ProductIngredientCreateManyArgs} args - Arguments to create many ProductIngredients.
     * @example
     * // Create many ProductIngredients
     * const productIngredient = await prisma.productIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductIngredientCreateManyArgs>(args?: SelectSubset<T, ProductIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductIngredients and returns the data saved in the database.
     * @param {ProductIngredientCreateManyAndReturnArgs} args - Arguments to create many ProductIngredients.
     * @example
     * // Create many ProductIngredients
     * const productIngredient = await prisma.productIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductIngredients and only return the `id`
     * const productIngredientWithIdOnly = await prisma.productIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductIngredient.
     * @param {ProductIngredientDeleteArgs} args - Arguments to delete one ProductIngredient.
     * @example
     * // Delete one ProductIngredient
     * const ProductIngredient = await prisma.productIngredient.delete({
     *   where: {
     *     // ... filter to delete one ProductIngredient
     *   }
     * })
     * 
     */
    delete<T extends ProductIngredientDeleteArgs>(args: SelectSubset<T, ProductIngredientDeleteArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductIngredient.
     * @param {ProductIngredientUpdateArgs} args - Arguments to update one ProductIngredient.
     * @example
     * // Update one ProductIngredient
     * const productIngredient = await prisma.productIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductIngredientUpdateArgs>(args: SelectSubset<T, ProductIngredientUpdateArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductIngredients.
     * @param {ProductIngredientDeleteManyArgs} args - Arguments to filter ProductIngredients to delete.
     * @example
     * // Delete a few ProductIngredients
     * const { count } = await prisma.productIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductIngredientDeleteManyArgs>(args?: SelectSubset<T, ProductIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductIngredients
     * const productIngredient = await prisma.productIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductIngredientUpdateManyArgs>(args: SelectSubset<T, ProductIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductIngredients and returns the data updated in the database.
     * @param {ProductIngredientUpdateManyAndReturnArgs} args - Arguments to update many ProductIngredients.
     * @example
     * // Update many ProductIngredients
     * const productIngredient = await prisma.productIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductIngredients and only return the `id`
     * const productIngredientWithIdOnly = await prisma.productIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductIngredient.
     * @param {ProductIngredientUpsertArgs} args - Arguments to update or create a ProductIngredient.
     * @example
     * // Update or create a ProductIngredient
     * const productIngredient = await prisma.productIngredient.upsert({
     *   create: {
     *     // ... data to create a ProductIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductIngredient we want to update
     *   }
     * })
     */
    upsert<T extends ProductIngredientUpsertArgs>(args: SelectSubset<T, ProductIngredientUpsertArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientCountArgs} args - Arguments to filter ProductIngredients to count.
     * @example
     * // Count the number of ProductIngredients
     * const count = await prisma.productIngredient.count({
     *   where: {
     *     // ... the filter for the ProductIngredients we want to count
     *   }
     * })
    **/
    count<T extends ProductIngredientCountArgs>(
      args?: Subset<T, ProductIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductIngredientAggregateArgs>(args: Subset<T, ProductIngredientAggregateArgs>): Prisma.PrismaPromise<GetProductIngredientAggregateType<T>>

    /**
     * Group by ProductIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientGroupByArgs} args - Group by arguments.
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
      T extends ProductIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductIngredientGroupByArgs['orderBy'] }
        : { orderBy?: ProductIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductIngredient model
   */
  readonly fields: ProductIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProductIngredient model
   */
  interface ProductIngredientFieldRefs {
    readonly id: FieldRef<"ProductIngredient", 'Int'>
    readonly productId: FieldRef<"ProductIngredient", 'Int'>
    readonly ingredientId: FieldRef<"ProductIngredient", 'Int'>
    readonly quantity: FieldRef<"ProductIngredient", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductIngredient findUnique
   */
  export type ProductIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient findUniqueOrThrow
   */
  export type ProductIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient findFirst
   */
  export type ProductIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIngredients.
     */
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient findFirstOrThrow
   */
  export type ProductIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIngredients.
     */
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient findMany
   */
  export type ProductIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter, which ProductIngredients to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient create
   */
  export type ProductIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductIngredient.
     */
    data: XOR<ProductIngredientCreateInput, ProductIngredientUncheckedCreateInput>
  }

  /**
   * ProductIngredient createMany
   */
  export type ProductIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductIngredients.
     */
    data: ProductIngredientCreateManyInput | ProductIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductIngredient createManyAndReturn
   */
  export type ProductIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many ProductIngredients.
     */
    data: ProductIngredientCreateManyInput | ProductIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductIngredient update
   */
  export type ProductIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductIngredient.
     */
    data: XOR<ProductIngredientUpdateInput, ProductIngredientUncheckedUpdateInput>
    /**
     * Choose, which ProductIngredient to update.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient updateMany
   */
  export type ProductIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductIngredients.
     */
    data: XOR<ProductIngredientUpdateManyMutationInput, ProductIngredientUncheckedUpdateManyInput>
    /**
     * Filter which ProductIngredients to update
     */
    where?: ProductIngredientWhereInput
    /**
     * Limit how many ProductIngredients to update.
     */
    limit?: number
  }

  /**
   * ProductIngredient updateManyAndReturn
   */
  export type ProductIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * The data used to update ProductIngredients.
     */
    data: XOR<ProductIngredientUpdateManyMutationInput, ProductIngredientUncheckedUpdateManyInput>
    /**
     * Filter which ProductIngredients to update
     */
    where?: ProductIngredientWhereInput
    /**
     * Limit how many ProductIngredients to update.
     */
    limit?: number
  }

  /**
   * ProductIngredient upsert
   */
  export type ProductIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductIngredient to update in case it exists.
     */
    where: ProductIngredientWhereUniqueInput
    /**
     * In case the ProductIngredient found by the `where` argument doesn't exist, create a new ProductIngredient with this data.
     */
    create: XOR<ProductIngredientCreateInput, ProductIngredientUncheckedCreateInput>
    /**
     * In case the ProductIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductIngredientUpdateInput, ProductIngredientUncheckedUpdateInput>
  }

  /**
   * ProductIngredient delete
   */
  export type ProductIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
    /**
     * Filter which ProductIngredient to delete.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient deleteMany
   */
  export type ProductIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductIngredients to delete
     */
    where?: ProductIngredientWhereInput
    /**
     * Limit how many ProductIngredients to delete.
     */
    limit?: number
  }

  /**
   * ProductIngredient without action
   */
  export type ProductIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
  }


  /**
   * Model Sauce
   */

  export type AggregateSauce = {
    _count: SauceCountAggregateOutputType | null
    _avg: SauceAvgAggregateOutputType | null
    _sum: SauceSumAggregateOutputType | null
    _min: SauceMinAggregateOutputType | null
    _max: SauceMaxAggregateOutputType | null
  }

  export type SauceAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type SauceSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type SauceMinAggregateOutputType = {
    id: number | null
    name: string | null
    productId: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SauceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    productId: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SauceCountAggregateOutputType = {
    id: number
    name: number
    productId: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SauceAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type SauceSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type SauceMinAggregateInputType = {
    id?: true
    name?: true
    productId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SauceMaxAggregateInputType = {
    id?: true
    name?: true
    productId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SauceCountAggregateInputType = {
    id?: true
    name?: true
    productId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SauceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauce to aggregate.
     */
    where?: SauceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauces to fetch.
     */
    orderBy?: SauceOrderByWithRelationInput | SauceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SauceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sauces
    **/
    _count?: true | SauceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SauceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SauceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SauceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SauceMaxAggregateInputType
  }

  export type GetSauceAggregateType<T extends SauceAggregateArgs> = {
        [P in keyof T & keyof AggregateSauce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSauce[P]>
      : GetScalarType<T[P], AggregateSauce[P]>
  }




  export type SauceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauceWhereInput
    orderBy?: SauceOrderByWithAggregationInput | SauceOrderByWithAggregationInput[]
    by: SauceScalarFieldEnum[] | SauceScalarFieldEnum
    having?: SauceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SauceCountAggregateInputType | true
    _avg?: SauceAvgAggregateInputType
    _sum?: SauceSumAggregateInputType
    _min?: SauceMinAggregateInputType
    _max?: SauceMaxAggregateInputType
  }

  export type SauceGroupByOutputType = {
    id: number
    name: string
    productId: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SauceCountAggregateOutputType | null
    _avg: SauceAvgAggregateOutputType | null
    _sum: SauceSumAggregateOutputType | null
    _min: SauceMinAggregateOutputType | null
    _max: SauceMaxAggregateOutputType | null
  }

  type GetSauceGroupByPayload<T extends SauceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SauceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SauceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SauceGroupByOutputType[P]>
            : GetScalarType<T[P], SauceGroupByOutputType[P]>
        }
      >
    >


  export type SauceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sauce"]>

  export type SauceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sauce"]>

  export type SauceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sauce"]>

  export type SauceSelectScalar = {
    id?: boolean
    name?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SauceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "productId" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["sauce"]>

  export type $SaucePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sauce"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      productId: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sauce"]>
    composites: {}
  }

  type SauceGetPayload<S extends boolean | null | undefined | SauceDefaultArgs> = $Result.GetResult<Prisma.$SaucePayload, S>

  type SauceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SauceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SauceCountAggregateInputType | true
    }

  export interface SauceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sauce'], meta: { name: 'Sauce' } }
    /**
     * Find zero or one Sauce that matches the filter.
     * @param {SauceFindUniqueArgs} args - Arguments to find a Sauce
     * @example
     * // Get one Sauce
     * const sauce = await prisma.sauce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SauceFindUniqueArgs>(args: SelectSubset<T, SauceFindUniqueArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sauce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SauceFindUniqueOrThrowArgs} args - Arguments to find a Sauce
     * @example
     * // Get one Sauce
     * const sauce = await prisma.sauce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SauceFindUniqueOrThrowArgs>(args: SelectSubset<T, SauceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceFindFirstArgs} args - Arguments to find a Sauce
     * @example
     * // Get one Sauce
     * const sauce = await prisma.sauce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SauceFindFirstArgs>(args?: SelectSubset<T, SauceFindFirstArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceFindFirstOrThrowArgs} args - Arguments to find a Sauce
     * @example
     * // Get one Sauce
     * const sauce = await prisma.sauce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SauceFindFirstOrThrowArgs>(args?: SelectSubset<T, SauceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sauces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sauces
     * const sauces = await prisma.sauce.findMany()
     * 
     * // Get first 10 Sauces
     * const sauces = await prisma.sauce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sauceWithIdOnly = await prisma.sauce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SauceFindManyArgs>(args?: SelectSubset<T, SauceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sauce.
     * @param {SauceCreateArgs} args - Arguments to create a Sauce.
     * @example
     * // Create one Sauce
     * const Sauce = await prisma.sauce.create({
     *   data: {
     *     // ... data to create a Sauce
     *   }
     * })
     * 
     */
    create<T extends SauceCreateArgs>(args: SelectSubset<T, SauceCreateArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sauces.
     * @param {SauceCreateManyArgs} args - Arguments to create many Sauces.
     * @example
     * // Create many Sauces
     * const sauce = await prisma.sauce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SauceCreateManyArgs>(args?: SelectSubset<T, SauceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sauces and returns the data saved in the database.
     * @param {SauceCreateManyAndReturnArgs} args - Arguments to create many Sauces.
     * @example
     * // Create many Sauces
     * const sauce = await prisma.sauce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sauces and only return the `id`
     * const sauceWithIdOnly = await prisma.sauce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SauceCreateManyAndReturnArgs>(args?: SelectSubset<T, SauceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sauce.
     * @param {SauceDeleteArgs} args - Arguments to delete one Sauce.
     * @example
     * // Delete one Sauce
     * const Sauce = await prisma.sauce.delete({
     *   where: {
     *     // ... filter to delete one Sauce
     *   }
     * })
     * 
     */
    delete<T extends SauceDeleteArgs>(args: SelectSubset<T, SauceDeleteArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sauce.
     * @param {SauceUpdateArgs} args - Arguments to update one Sauce.
     * @example
     * // Update one Sauce
     * const sauce = await prisma.sauce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SauceUpdateArgs>(args: SelectSubset<T, SauceUpdateArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sauces.
     * @param {SauceDeleteManyArgs} args - Arguments to filter Sauces to delete.
     * @example
     * // Delete a few Sauces
     * const { count } = await prisma.sauce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SauceDeleteManyArgs>(args?: SelectSubset<T, SauceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sauces
     * const sauce = await prisma.sauce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SauceUpdateManyArgs>(args: SelectSubset<T, SauceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauces and returns the data updated in the database.
     * @param {SauceUpdateManyAndReturnArgs} args - Arguments to update many Sauces.
     * @example
     * // Update many Sauces
     * const sauce = await prisma.sauce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sauces and only return the `id`
     * const sauceWithIdOnly = await prisma.sauce.updateManyAndReturn({
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
    updateManyAndReturn<T extends SauceUpdateManyAndReturnArgs>(args: SelectSubset<T, SauceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sauce.
     * @param {SauceUpsertArgs} args - Arguments to update or create a Sauce.
     * @example
     * // Update or create a Sauce
     * const sauce = await prisma.sauce.upsert({
     *   create: {
     *     // ... data to create a Sauce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sauce we want to update
     *   }
     * })
     */
    upsert<T extends SauceUpsertArgs>(args: SelectSubset<T, SauceUpsertArgs<ExtArgs>>): Prisma__SauceClient<$Result.GetResult<Prisma.$SaucePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sauces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceCountArgs} args - Arguments to filter Sauces to count.
     * @example
     * // Count the number of Sauces
     * const count = await prisma.sauce.count({
     *   where: {
     *     // ... the filter for the Sauces we want to count
     *   }
     * })
    **/
    count<T extends SauceCountArgs>(
      args?: Subset<T, SauceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SauceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sauce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SauceAggregateArgs>(args: Subset<T, SauceAggregateArgs>): Prisma.PrismaPromise<GetSauceAggregateType<T>>

    /**
     * Group by Sauce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceGroupByArgs} args - Group by arguments.
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
      T extends SauceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SauceGroupByArgs['orderBy'] }
        : { orderBy?: SauceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SauceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSauceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sauce model
   */
  readonly fields: SauceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sauce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SauceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sauce model
   */
  interface SauceFieldRefs {
    readonly id: FieldRef<"Sauce", 'Int'>
    readonly name: FieldRef<"Sauce", 'String'>
    readonly productId: FieldRef<"Sauce", 'Int'>
    readonly description: FieldRef<"Sauce", 'String'>
    readonly createdAt: FieldRef<"Sauce", 'DateTime'>
    readonly updatedAt: FieldRef<"Sauce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sauce findUnique
   */
  export type SauceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter, which Sauce to fetch.
     */
    where: SauceWhereUniqueInput
  }

  /**
   * Sauce findUniqueOrThrow
   */
  export type SauceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter, which Sauce to fetch.
     */
    where: SauceWhereUniqueInput
  }

  /**
   * Sauce findFirst
   */
  export type SauceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter, which Sauce to fetch.
     */
    where?: SauceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauces to fetch.
     */
    orderBy?: SauceOrderByWithRelationInput | SauceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauces.
     */
    cursor?: SauceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauces.
     */
    distinct?: SauceScalarFieldEnum | SauceScalarFieldEnum[]
  }

  /**
   * Sauce findFirstOrThrow
   */
  export type SauceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter, which Sauce to fetch.
     */
    where?: SauceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauces to fetch.
     */
    orderBy?: SauceOrderByWithRelationInput | SauceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauces.
     */
    cursor?: SauceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauces.
     */
    distinct?: SauceScalarFieldEnum | SauceScalarFieldEnum[]
  }

  /**
   * Sauce findMany
   */
  export type SauceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter, which Sauces to fetch.
     */
    where?: SauceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauces to fetch.
     */
    orderBy?: SauceOrderByWithRelationInput | SauceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sauces.
     */
    cursor?: SauceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauces.
     */
    skip?: number
    distinct?: SauceScalarFieldEnum | SauceScalarFieldEnum[]
  }

  /**
   * Sauce create
   */
  export type SauceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * The data needed to create a Sauce.
     */
    data: XOR<SauceCreateInput, SauceUncheckedCreateInput>
  }

  /**
   * Sauce createMany
   */
  export type SauceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sauces.
     */
    data: SauceCreateManyInput | SauceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sauce createManyAndReturn
   */
  export type SauceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * The data used to create many Sauces.
     */
    data: SauceCreateManyInput | SauceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sauce update
   */
  export type SauceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * The data needed to update a Sauce.
     */
    data: XOR<SauceUpdateInput, SauceUncheckedUpdateInput>
    /**
     * Choose, which Sauce to update.
     */
    where: SauceWhereUniqueInput
  }

  /**
   * Sauce updateMany
   */
  export type SauceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sauces.
     */
    data: XOR<SauceUpdateManyMutationInput, SauceUncheckedUpdateManyInput>
    /**
     * Filter which Sauces to update
     */
    where?: SauceWhereInput
    /**
     * Limit how many Sauces to update.
     */
    limit?: number
  }

  /**
   * Sauce updateManyAndReturn
   */
  export type SauceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * The data used to update Sauces.
     */
    data: XOR<SauceUpdateManyMutationInput, SauceUncheckedUpdateManyInput>
    /**
     * Filter which Sauces to update
     */
    where?: SauceWhereInput
    /**
     * Limit how many Sauces to update.
     */
    limit?: number
  }

  /**
   * Sauce upsert
   */
  export type SauceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * The filter to search for the Sauce to update in case it exists.
     */
    where: SauceWhereUniqueInput
    /**
     * In case the Sauce found by the `where` argument doesn't exist, create a new Sauce with this data.
     */
    create: XOR<SauceCreateInput, SauceUncheckedCreateInput>
    /**
     * In case the Sauce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SauceUpdateInput, SauceUncheckedUpdateInput>
  }

  /**
   * Sauce delete
   */
  export type SauceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
    /**
     * Filter which Sauce to delete.
     */
    where: SauceWhereUniqueInput
  }

  /**
   * Sauce deleteMany
   */
  export type SauceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauces to delete
     */
    where?: SauceWhereInput
    /**
     * Limit how many Sauces to delete.
     */
    limit?: number
  }

  /**
   * Sauce without action
   */
  export type SauceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauce
     */
    select?: SauceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauce
     */
    omit?: SauceOmit<ExtArgs> | null
  }


  /**
   * Model SauceIngredient
   */

  export type AggregateSauceIngredient = {
    _count: SauceIngredientCountAggregateOutputType | null
    _avg: SauceIngredientAvgAggregateOutputType | null
    _sum: SauceIngredientSumAggregateOutputType | null
    _min: SauceIngredientMinAggregateOutputType | null
    _max: SauceIngredientMaxAggregateOutputType | null
  }

  export type SauceIngredientAvgAggregateOutputType = {
    id: number | null
    sauceId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type SauceIngredientSumAggregateOutputType = {
    id: number | null
    sauceId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type SauceIngredientMinAggregateOutputType = {
    id: number | null
    sauceId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type SauceIngredientMaxAggregateOutputType = {
    id: number | null
    sauceId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type SauceIngredientCountAggregateOutputType = {
    id: number
    sauceId: number
    ingredientId: number
    quantity: number
    _all: number
  }


  export type SauceIngredientAvgAggregateInputType = {
    id?: true
    sauceId?: true
    ingredientId?: true
    quantity?: true
  }

  export type SauceIngredientSumAggregateInputType = {
    id?: true
    sauceId?: true
    ingredientId?: true
    quantity?: true
  }

  export type SauceIngredientMinAggregateInputType = {
    id?: true
    sauceId?: true
    ingredientId?: true
    quantity?: true
  }

  export type SauceIngredientMaxAggregateInputType = {
    id?: true
    sauceId?: true
    ingredientId?: true
    quantity?: true
  }

  export type SauceIngredientCountAggregateInputType = {
    id?: true
    sauceId?: true
    ingredientId?: true
    quantity?: true
    _all?: true
  }

  export type SauceIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SauceIngredient to aggregate.
     */
    where?: SauceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SauceIngredients to fetch.
     */
    orderBy?: SauceIngredientOrderByWithRelationInput | SauceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SauceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SauceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SauceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SauceIngredients
    **/
    _count?: true | SauceIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SauceIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SauceIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SauceIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SauceIngredientMaxAggregateInputType
  }

  export type GetSauceIngredientAggregateType<T extends SauceIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateSauceIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSauceIngredient[P]>
      : GetScalarType<T[P], AggregateSauceIngredient[P]>
  }




  export type SauceIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauceIngredientWhereInput
    orderBy?: SauceIngredientOrderByWithAggregationInput | SauceIngredientOrderByWithAggregationInput[]
    by: SauceIngredientScalarFieldEnum[] | SauceIngredientScalarFieldEnum
    having?: SauceIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SauceIngredientCountAggregateInputType | true
    _avg?: SauceIngredientAvgAggregateInputType
    _sum?: SauceIngredientSumAggregateInputType
    _min?: SauceIngredientMinAggregateInputType
    _max?: SauceIngredientMaxAggregateInputType
  }

  export type SauceIngredientGroupByOutputType = {
    id: number
    sauceId: number
    ingredientId: number
    quantity: number
    _count: SauceIngredientCountAggregateOutputType | null
    _avg: SauceIngredientAvgAggregateOutputType | null
    _sum: SauceIngredientSumAggregateOutputType | null
    _min: SauceIngredientMinAggregateOutputType | null
    _max: SauceIngredientMaxAggregateOutputType | null
  }

  type GetSauceIngredientGroupByPayload<T extends SauceIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SauceIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SauceIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SauceIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], SauceIngredientGroupByOutputType[P]>
        }
      >
    >


  export type SauceIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sauceId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["sauceIngredient"]>

  export type SauceIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sauceId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["sauceIngredient"]>

  export type SauceIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sauceId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["sauceIngredient"]>

  export type SauceIngredientSelectScalar = {
    id?: boolean
    sauceId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }

  export type SauceIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sauceId" | "ingredientId" | "quantity", ExtArgs["result"]["sauceIngredient"]>

  export type $SauceIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SauceIngredient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sauceId: number
      ingredientId: number
      quantity: number
    }, ExtArgs["result"]["sauceIngredient"]>
    composites: {}
  }

  type SauceIngredientGetPayload<S extends boolean | null | undefined | SauceIngredientDefaultArgs> = $Result.GetResult<Prisma.$SauceIngredientPayload, S>

  type SauceIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SauceIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SauceIngredientCountAggregateInputType | true
    }

  export interface SauceIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SauceIngredient'], meta: { name: 'SauceIngredient' } }
    /**
     * Find zero or one SauceIngredient that matches the filter.
     * @param {SauceIngredientFindUniqueArgs} args - Arguments to find a SauceIngredient
     * @example
     * // Get one SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SauceIngredientFindUniqueArgs>(args: SelectSubset<T, SauceIngredientFindUniqueArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SauceIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SauceIngredientFindUniqueOrThrowArgs} args - Arguments to find a SauceIngredient
     * @example
     * // Get one SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SauceIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, SauceIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SauceIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientFindFirstArgs} args - Arguments to find a SauceIngredient
     * @example
     * // Get one SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SauceIngredientFindFirstArgs>(args?: SelectSubset<T, SauceIngredientFindFirstArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SauceIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientFindFirstOrThrowArgs} args - Arguments to find a SauceIngredient
     * @example
     * // Get one SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SauceIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, SauceIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SauceIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SauceIngredients
     * const sauceIngredients = await prisma.sauceIngredient.findMany()
     * 
     * // Get first 10 SauceIngredients
     * const sauceIngredients = await prisma.sauceIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sauceIngredientWithIdOnly = await prisma.sauceIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SauceIngredientFindManyArgs>(args?: SelectSubset<T, SauceIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SauceIngredient.
     * @param {SauceIngredientCreateArgs} args - Arguments to create a SauceIngredient.
     * @example
     * // Create one SauceIngredient
     * const SauceIngredient = await prisma.sauceIngredient.create({
     *   data: {
     *     // ... data to create a SauceIngredient
     *   }
     * })
     * 
     */
    create<T extends SauceIngredientCreateArgs>(args: SelectSubset<T, SauceIngredientCreateArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SauceIngredients.
     * @param {SauceIngredientCreateManyArgs} args - Arguments to create many SauceIngredients.
     * @example
     * // Create many SauceIngredients
     * const sauceIngredient = await prisma.sauceIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SauceIngredientCreateManyArgs>(args?: SelectSubset<T, SauceIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SauceIngredients and returns the data saved in the database.
     * @param {SauceIngredientCreateManyAndReturnArgs} args - Arguments to create many SauceIngredients.
     * @example
     * // Create many SauceIngredients
     * const sauceIngredient = await prisma.sauceIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SauceIngredients and only return the `id`
     * const sauceIngredientWithIdOnly = await prisma.sauceIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SauceIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, SauceIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SauceIngredient.
     * @param {SauceIngredientDeleteArgs} args - Arguments to delete one SauceIngredient.
     * @example
     * // Delete one SauceIngredient
     * const SauceIngredient = await prisma.sauceIngredient.delete({
     *   where: {
     *     // ... filter to delete one SauceIngredient
     *   }
     * })
     * 
     */
    delete<T extends SauceIngredientDeleteArgs>(args: SelectSubset<T, SauceIngredientDeleteArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SauceIngredient.
     * @param {SauceIngredientUpdateArgs} args - Arguments to update one SauceIngredient.
     * @example
     * // Update one SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SauceIngredientUpdateArgs>(args: SelectSubset<T, SauceIngredientUpdateArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SauceIngredients.
     * @param {SauceIngredientDeleteManyArgs} args - Arguments to filter SauceIngredients to delete.
     * @example
     * // Delete a few SauceIngredients
     * const { count } = await prisma.sauceIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SauceIngredientDeleteManyArgs>(args?: SelectSubset<T, SauceIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SauceIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SauceIngredients
     * const sauceIngredient = await prisma.sauceIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SauceIngredientUpdateManyArgs>(args: SelectSubset<T, SauceIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SauceIngredients and returns the data updated in the database.
     * @param {SauceIngredientUpdateManyAndReturnArgs} args - Arguments to update many SauceIngredients.
     * @example
     * // Update many SauceIngredients
     * const sauceIngredient = await prisma.sauceIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SauceIngredients and only return the `id`
     * const sauceIngredientWithIdOnly = await prisma.sauceIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends SauceIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, SauceIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SauceIngredient.
     * @param {SauceIngredientUpsertArgs} args - Arguments to update or create a SauceIngredient.
     * @example
     * // Update or create a SauceIngredient
     * const sauceIngredient = await prisma.sauceIngredient.upsert({
     *   create: {
     *     // ... data to create a SauceIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SauceIngredient we want to update
     *   }
     * })
     */
    upsert<T extends SauceIngredientUpsertArgs>(args: SelectSubset<T, SauceIngredientUpsertArgs<ExtArgs>>): Prisma__SauceIngredientClient<$Result.GetResult<Prisma.$SauceIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SauceIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientCountArgs} args - Arguments to filter SauceIngredients to count.
     * @example
     * // Count the number of SauceIngredients
     * const count = await prisma.sauceIngredient.count({
     *   where: {
     *     // ... the filter for the SauceIngredients we want to count
     *   }
     * })
    **/
    count<T extends SauceIngredientCountArgs>(
      args?: Subset<T, SauceIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SauceIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SauceIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SauceIngredientAggregateArgs>(args: Subset<T, SauceIngredientAggregateArgs>): Prisma.PrismaPromise<GetSauceIngredientAggregateType<T>>

    /**
     * Group by SauceIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauceIngredientGroupByArgs} args - Group by arguments.
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
      T extends SauceIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SauceIngredientGroupByArgs['orderBy'] }
        : { orderBy?: SauceIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SauceIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSauceIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SauceIngredient model
   */
  readonly fields: SauceIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SauceIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SauceIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SauceIngredient model
   */
  interface SauceIngredientFieldRefs {
    readonly id: FieldRef<"SauceIngredient", 'Int'>
    readonly sauceId: FieldRef<"SauceIngredient", 'Int'>
    readonly ingredientId: FieldRef<"SauceIngredient", 'Int'>
    readonly quantity: FieldRef<"SauceIngredient", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SauceIngredient findUnique
   */
  export type SauceIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter, which SauceIngredient to fetch.
     */
    where: SauceIngredientWhereUniqueInput
  }

  /**
   * SauceIngredient findUniqueOrThrow
   */
  export type SauceIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter, which SauceIngredient to fetch.
     */
    where: SauceIngredientWhereUniqueInput
  }

  /**
   * SauceIngredient findFirst
   */
  export type SauceIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter, which SauceIngredient to fetch.
     */
    where?: SauceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SauceIngredients to fetch.
     */
    orderBy?: SauceIngredientOrderByWithRelationInput | SauceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SauceIngredients.
     */
    cursor?: SauceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SauceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SauceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SauceIngredients.
     */
    distinct?: SauceIngredientScalarFieldEnum | SauceIngredientScalarFieldEnum[]
  }

  /**
   * SauceIngredient findFirstOrThrow
   */
  export type SauceIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter, which SauceIngredient to fetch.
     */
    where?: SauceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SauceIngredients to fetch.
     */
    orderBy?: SauceIngredientOrderByWithRelationInput | SauceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SauceIngredients.
     */
    cursor?: SauceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SauceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SauceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SauceIngredients.
     */
    distinct?: SauceIngredientScalarFieldEnum | SauceIngredientScalarFieldEnum[]
  }

  /**
   * SauceIngredient findMany
   */
  export type SauceIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter, which SauceIngredients to fetch.
     */
    where?: SauceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SauceIngredients to fetch.
     */
    orderBy?: SauceIngredientOrderByWithRelationInput | SauceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SauceIngredients.
     */
    cursor?: SauceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SauceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SauceIngredients.
     */
    skip?: number
    distinct?: SauceIngredientScalarFieldEnum | SauceIngredientScalarFieldEnum[]
  }

  /**
   * SauceIngredient create
   */
  export type SauceIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * The data needed to create a SauceIngredient.
     */
    data: XOR<SauceIngredientCreateInput, SauceIngredientUncheckedCreateInput>
  }

  /**
   * SauceIngredient createMany
   */
  export type SauceIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SauceIngredients.
     */
    data: SauceIngredientCreateManyInput | SauceIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SauceIngredient createManyAndReturn
   */
  export type SauceIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many SauceIngredients.
     */
    data: SauceIngredientCreateManyInput | SauceIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SauceIngredient update
   */
  export type SauceIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * The data needed to update a SauceIngredient.
     */
    data: XOR<SauceIngredientUpdateInput, SauceIngredientUncheckedUpdateInput>
    /**
     * Choose, which SauceIngredient to update.
     */
    where: SauceIngredientWhereUniqueInput
  }

  /**
   * SauceIngredient updateMany
   */
  export type SauceIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SauceIngredients.
     */
    data: XOR<SauceIngredientUpdateManyMutationInput, SauceIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SauceIngredients to update
     */
    where?: SauceIngredientWhereInput
    /**
     * Limit how many SauceIngredients to update.
     */
    limit?: number
  }

  /**
   * SauceIngredient updateManyAndReturn
   */
  export type SauceIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * The data used to update SauceIngredients.
     */
    data: XOR<SauceIngredientUpdateManyMutationInput, SauceIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SauceIngredients to update
     */
    where?: SauceIngredientWhereInput
    /**
     * Limit how many SauceIngredients to update.
     */
    limit?: number
  }

  /**
   * SauceIngredient upsert
   */
  export type SauceIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * The filter to search for the SauceIngredient to update in case it exists.
     */
    where: SauceIngredientWhereUniqueInput
    /**
     * In case the SauceIngredient found by the `where` argument doesn't exist, create a new SauceIngredient with this data.
     */
    create: XOR<SauceIngredientCreateInput, SauceIngredientUncheckedCreateInput>
    /**
     * In case the SauceIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SauceIngredientUpdateInput, SauceIngredientUncheckedUpdateInput>
  }

  /**
   * SauceIngredient delete
   */
  export type SauceIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
    /**
     * Filter which SauceIngredient to delete.
     */
    where: SauceIngredientWhereUniqueInput
  }

  /**
   * SauceIngredient deleteMany
   */
  export type SauceIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SauceIngredients to delete
     */
    where?: SauceIngredientWhereInput
    /**
     * Limit how many SauceIngredients to delete.
     */
    limit?: number
  }

  /**
   * SauceIngredient without action
   */
  export type SauceIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SauceIngredient
     */
    select?: SauceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SauceIngredient
     */
    omit?: SauceIngredientOmit<ExtArgs> | null
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

  export type $NutritionalInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutritionalInfo"
    objects: {}
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    productCode: 'productCode',
    name: 'name',
    description: 'description',
    image: 'image',
    productWeight: 'productWeight',
    price: 'price',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    unit: 'unit',
    netWeight: 'netWeight',
    origin: 'origin',
    usedBy: 'usedBy',
    batchCode: 'batchCode',
    manufacturer: 'manufacturer',
    vendor: 'vendor',
    packSize: 'packSize',
    netContent: 'netContent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const ProductIngredientScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    ingredientId: 'ingredientId',
    quantity: 'quantity'
  };

  export type ProductIngredientScalarFieldEnum = (typeof ProductIngredientScalarFieldEnum)[keyof typeof ProductIngredientScalarFieldEnum]


  export const SauceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    productId: 'productId',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SauceScalarFieldEnum = (typeof SauceScalarFieldEnum)[keyof typeof SauceScalarFieldEnum]


  export const SauceIngredientScalarFieldEnum: {
    id: 'id',
    sauceId: 'sauceId',
    ingredientId: 'ingredientId',
    quantity: 'quantity'
  };

  export type SauceIngredientScalarFieldEnum = (typeof SauceIngredientScalarFieldEnum)[keyof typeof SauceIngredientScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


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
    price?: FloatFilter<"Product"> | number
    companyId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    productWeight?: SortOrder
    price?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    price?: FloatFilter<"Product"> | number
    companyId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }, "id" | "productCode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    productWeight?: SortOrder
    price?: SortOrder
    companyId?: SortOrderInput | SortOrder
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
    price?: FloatWithAggregatesFilter<"Product"> | number
    companyId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    code?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    description?: StringNullableFilter<"Ingredient"> | string | null
    unit?: StringFilter<"Ingredient"> | string
    netWeight?: StringNullableFilter<"Ingredient"> | string | null
    origin?: StringNullableFilter<"Ingredient"> | string | null
    usedBy?: DateTimeNullableFilter<"Ingredient"> | Date | string | null
    batchCode?: StringNullableFilter<"Ingredient"> | string | null
    manufacturer?: StringNullableFilter<"Ingredient"> | string | null
    vendor?: StringNullableFilter<"Ingredient"> | string | null
    packSize?: StringNullableFilter<"Ingredient"> | string | null
    netContent?: StringNullableFilter<"Ingredient"> | string | null
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    netWeight?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    usedBy?: SortOrderInput | SortOrder
    batchCode?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    packSize?: SortOrderInput | SortOrder
    netContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    description?: StringNullableFilter<"Ingredient"> | string | null
    unit?: StringFilter<"Ingredient"> | string
    netWeight?: StringNullableFilter<"Ingredient"> | string | null
    origin?: StringNullableFilter<"Ingredient"> | string | null
    usedBy?: DateTimeNullableFilter<"Ingredient"> | Date | string | null
    batchCode?: StringNullableFilter<"Ingredient"> | string | null
    manufacturer?: StringNullableFilter<"Ingredient"> | string | null
    vendor?: StringNullableFilter<"Ingredient"> | string | null
    packSize?: StringNullableFilter<"Ingredient"> | string | null
    netContent?: StringNullableFilter<"Ingredient"> | string | null
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
  }, "id" | "code">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    netWeight?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    usedBy?: SortOrderInput | SortOrder
    batchCode?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    packSize?: SortOrderInput | SortOrder
    netContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    code?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    description?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    unit?: StringWithAggregatesFilter<"Ingredient"> | string
    netWeight?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    origin?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    usedBy?: DateTimeNullableWithAggregatesFilter<"Ingredient"> | Date | string | null
    batchCode?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    manufacturer?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    vendor?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    packSize?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    netContent?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type ProductIngredientWhereInput = {
    AND?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    OR?: ProductIngredientWhereInput[]
    NOT?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    id?: IntFilter<"ProductIngredient"> | number
    productId?: IntFilter<"ProductIngredient"> | number
    ingredientId?: IntFilter<"ProductIngredient"> | number
    quantity?: FloatFilter<"ProductIngredient"> | number
  }

  export type ProductIngredientOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    OR?: ProductIngredientWhereInput[]
    NOT?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    productId?: IntFilter<"ProductIngredient"> | number
    ingredientId?: IntFilter<"ProductIngredient"> | number
    quantity?: FloatFilter<"ProductIngredient"> | number
  }, "id">

  export type ProductIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    _count?: ProductIngredientCountOrderByAggregateInput
    _avg?: ProductIngredientAvgOrderByAggregateInput
    _max?: ProductIngredientMaxOrderByAggregateInput
    _min?: ProductIngredientMinOrderByAggregateInput
    _sum?: ProductIngredientSumOrderByAggregateInput
  }

  export type ProductIngredientScalarWhereWithAggregatesInput = {
    AND?: ProductIngredientScalarWhereWithAggregatesInput | ProductIngredientScalarWhereWithAggregatesInput[]
    OR?: ProductIngredientScalarWhereWithAggregatesInput[]
    NOT?: ProductIngredientScalarWhereWithAggregatesInput | ProductIngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductIngredient"> | number
    productId?: IntWithAggregatesFilter<"ProductIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"ProductIngredient"> | number
    quantity?: FloatWithAggregatesFilter<"ProductIngredient"> | number
  }

  export type SauceWhereInput = {
    AND?: SauceWhereInput | SauceWhereInput[]
    OR?: SauceWhereInput[]
    NOT?: SauceWhereInput | SauceWhereInput[]
    id?: IntFilter<"Sauce"> | number
    name?: StringFilter<"Sauce"> | string
    productId?: IntFilter<"Sauce"> | number
    description?: StringNullableFilter<"Sauce"> | string | null
    createdAt?: DateTimeFilter<"Sauce"> | Date | string
    updatedAt?: DateTimeFilter<"Sauce"> | Date | string
  }

  export type SauceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SauceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SauceWhereInput | SauceWhereInput[]
    OR?: SauceWhereInput[]
    NOT?: SauceWhereInput | SauceWhereInput[]
    name?: StringFilter<"Sauce"> | string
    productId?: IntFilter<"Sauce"> | number
    description?: StringNullableFilter<"Sauce"> | string | null
    createdAt?: DateTimeFilter<"Sauce"> | Date | string
    updatedAt?: DateTimeFilter<"Sauce"> | Date | string
  }, "id">

  export type SauceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SauceCountOrderByAggregateInput
    _avg?: SauceAvgOrderByAggregateInput
    _max?: SauceMaxOrderByAggregateInput
    _min?: SauceMinOrderByAggregateInput
    _sum?: SauceSumOrderByAggregateInput
  }

  export type SauceScalarWhereWithAggregatesInput = {
    AND?: SauceScalarWhereWithAggregatesInput | SauceScalarWhereWithAggregatesInput[]
    OR?: SauceScalarWhereWithAggregatesInput[]
    NOT?: SauceScalarWhereWithAggregatesInput | SauceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sauce"> | number
    name?: StringWithAggregatesFilter<"Sauce"> | string
    productId?: IntWithAggregatesFilter<"Sauce"> | number
    description?: StringNullableWithAggregatesFilter<"Sauce"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sauce"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sauce"> | Date | string
  }

  export type SauceIngredientWhereInput = {
    AND?: SauceIngredientWhereInput | SauceIngredientWhereInput[]
    OR?: SauceIngredientWhereInput[]
    NOT?: SauceIngredientWhereInput | SauceIngredientWhereInput[]
    id?: IntFilter<"SauceIngredient"> | number
    sauceId?: IntFilter<"SauceIngredient"> | number
    ingredientId?: IntFilter<"SauceIngredient"> | number
    quantity?: FloatFilter<"SauceIngredient"> | number
  }

  export type SauceIngredientOrderByWithRelationInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SauceIngredientWhereInput | SauceIngredientWhereInput[]
    OR?: SauceIngredientWhereInput[]
    NOT?: SauceIngredientWhereInput | SauceIngredientWhereInput[]
    sauceId?: IntFilter<"SauceIngredient"> | number
    ingredientId?: IntFilter<"SauceIngredient"> | number
    quantity?: FloatFilter<"SauceIngredient"> | number
  }, "id">

  export type SauceIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    _count?: SauceIngredientCountOrderByAggregateInput
    _avg?: SauceIngredientAvgOrderByAggregateInput
    _max?: SauceIngredientMaxOrderByAggregateInput
    _min?: SauceIngredientMinOrderByAggregateInput
    _sum?: SauceIngredientSumOrderByAggregateInput
  }

  export type SauceIngredientScalarWhereWithAggregatesInput = {
    AND?: SauceIngredientScalarWhereWithAggregatesInput | SauceIngredientScalarWhereWithAggregatesInput[]
    OR?: SauceIngredientScalarWhereWithAggregatesInput[]
    NOT?: SauceIngredientScalarWhereWithAggregatesInput | SauceIngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SauceIngredient"> | number
    sauceId?: IntWithAggregatesFilter<"SauceIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"SauceIngredient"> | number
    quantity?: FloatWithAggregatesFilter<"SauceIngredient"> | number
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

  export type ProductCreateInput = {
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    price: number
    companyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    price: number
    companyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: number
    productCode: string
    name: string
    description: string
    image?: string | null
    productWeight: string
    price: number
    companyId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productWeight?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
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
    price?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    code: string
    name: string
    description?: string | null
    unit: string
    netWeight?: string | null
    origin?: string | null
    usedBy?: Date | string | null
    batchCode?: string | null
    manufacturer?: string | null
    vendor?: string | null
    packSize?: string | null
    netContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    unit: string
    netWeight?: string | null
    origin?: string | null
    usedBy?: Date | string | null
    batchCode?: string | null
    manufacturer?: string | null
    vendor?: string | null
    packSize?: string | null
    netContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    netWeight?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    packSize?: NullableStringFieldUpdateOperationsInput | string | null
    netContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    netWeight?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    packSize?: NullableStringFieldUpdateOperationsInput | string | null
    netContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyInput = {
    id?: number
    code: string
    name: string
    description?: string | null
    unit: string
    netWeight?: string | null
    origin?: string | null
    usedBy?: Date | string | null
    batchCode?: string | null
    manufacturer?: string | null
    vendor?: string | null
    packSize?: string | null
    netContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    netWeight?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    packSize?: NullableStringFieldUpdateOperationsInput | string | null
    netContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    netWeight?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    packSize?: NullableStringFieldUpdateOperationsInput | string | null
    netContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientCreateInput = {
    productId: number
    ingredientId: number
    quantity: number
  }

  export type ProductIngredientUncheckedCreateInput = {
    id?: number
    productId: number
    ingredientId: number
    quantity: number
  }

  export type ProductIngredientUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductIngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductIngredientCreateManyInput = {
    id?: number
    productId: number
    ingredientId: number
    quantity: number
  }

  export type ProductIngredientUpdateManyMutationInput = {
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductIngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SauceCreateInput = {
    name: string
    productId: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SauceUncheckedCreateInput = {
    id?: number
    name: string
    productId: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SauceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauceCreateManyInput = {
    id?: number
    name: string
    productId: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SauceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SauceIngredientCreateInput = {
    sauceId: number
    ingredientId: number
    quantity: number
  }

  export type SauceIngredientUncheckedCreateInput = {
    id?: number
    sauceId: number
    ingredientId: number
    quantity: number
  }

  export type SauceIngredientUpdateInput = {
    sauceId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SauceIngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sauceId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SauceIngredientCreateManyInput = {
    id?: number
    sauceId: number
    ingredientId: number
    quantity: number
  }

  export type SauceIngredientUpdateManyMutationInput = {
    sauceId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SauceIngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sauceId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
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
    productId: number
    calories: number
    fat: number
    protein: number
    sugar: number
    fibre: number
    salt: number
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
    productId?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    salt?: FloatFieldUpdateOperationsInput | number
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
    productId?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    productWeight?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
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
    price?: SortOrder
    companyId?: SortOrder
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
    price?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    companyId?: SortOrder
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

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    netWeight?: SortOrder
    origin?: SortOrder
    usedBy?: SortOrder
    batchCode?: SortOrder
    manufacturer?: SortOrder
    vendor?: SortOrder
    packSize?: SortOrder
    netContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    netWeight?: SortOrder
    origin?: SortOrder
    usedBy?: SortOrder
    batchCode?: SortOrder
    manufacturer?: SortOrder
    vendor?: SortOrder
    packSize?: SortOrder
    netContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    netWeight?: SortOrder
    origin?: SortOrder
    usedBy?: SortOrder
    batchCode?: SortOrder
    manufacturer?: SortOrder
    vendor?: SortOrder
    packSize?: SortOrder
    netContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SauceAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type SauceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SauceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SauceSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type SauceIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceIngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type SauceIngredientSumOrderByAggregateInput = {
    id?: SortOrder
    sauceId?: SortOrder
    ingredientId?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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