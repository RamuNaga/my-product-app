
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
 * Model WorkOrder
 * 
 */
export type WorkOrder = $Result.DefaultSelection<Prisma.$WorkOrderPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model ProductionPlan
 * 
 */
export type ProductionPlan = $Result.DefaultSelection<Prisma.$ProductionPlanPayload>
/**
 * Model ProductionIssue
 * 
 */
export type ProductionIssue = $Result.DefaultSelection<Prisma.$ProductionIssuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkOrderStatus: {
  REQUESTED: 'REQUESTED',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type WorkOrderStatus = (typeof WorkOrderStatus)[keyof typeof WorkOrderStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const PurchaseOrderStatus: {
  PENDING: 'PENDING',
  ORDERED: 'ORDERED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus]


export const IssueType: {
  MACHINERY: 'MACHINERY',
  PACKING: 'PACKING',
  LABOUR: 'LABOUR',
  QUALITY: 'QUALITY',
  OTHER: 'OTHER'
};

export type IssueType = (typeof IssueType)[keyof typeof IssueType]

}

export type WorkOrderStatus = $Enums.WorkOrderStatus

export const WorkOrderStatus: typeof $Enums.WorkOrderStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type PurchaseOrderStatus = $Enums.PurchaseOrderStatus

export const PurchaseOrderStatus: typeof $Enums.PurchaseOrderStatus

export type IssueType = $Enums.IssueType

export const IssueType: typeof $Enums.IssueType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WorkOrders
 * const workOrders = await prisma.workOrder.findMany()
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
   * // Fetch zero or more WorkOrders
   * const workOrders = await prisma.workOrder.findMany()
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
   * `prisma.workOrder`: Exposes CRUD operations for the **WorkOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrders
    * const workOrders = await prisma.workOrder.findMany()
    * ```
    */
  get workOrder(): Prisma.WorkOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionPlan`: Exposes CRUD operations for the **ProductionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionPlans
    * const productionPlans = await prisma.productionPlan.findMany()
    * ```
    */
  get productionPlan(): Prisma.ProductionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionIssue`: Exposes CRUD operations for the **ProductionIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionIssues
    * const productionIssues = await prisma.productionIssue.findMany()
    * ```
    */
  get productionIssue(): Prisma.ProductionIssueDelegate<ExtArgs, ClientOptions>;
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
    WorkOrder: 'WorkOrder',
    PurchaseOrder: 'PurchaseOrder',
    ProductionPlan: 'ProductionPlan',
    ProductionIssue: 'ProductionIssue'
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
      modelProps: "workOrder" | "purchaseOrder" | "productionPlan" | "productionIssue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkOrder: {
        payload: Prisma.$WorkOrderPayload<ExtArgs>
        fields: Prisma.WorkOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findFirst: {
            args: Prisma.WorkOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findMany: {
            args: Prisma.WorkOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          create: {
            args: Prisma.WorkOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          createMany: {
            args: Prisma.WorkOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          delete: {
            args: Prisma.WorkOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          update: {
            args: Prisma.WorkOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          deleteMany: {
            args: Prisma.WorkOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          upsert: {
            args: Prisma.WorkOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          aggregate: {
            args: Prisma.WorkOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkOrder>
          }
          groupBy: {
            args: Prisma.WorkOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      ProductionPlan: {
        payload: Prisma.$ProductionPlanPayload<ExtArgs>
        fields: Prisma.ProductionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          findFirst: {
            args: Prisma.ProductionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          findMany: {
            args: Prisma.ProductionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>[]
          }
          create: {
            args: Prisma.ProductionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          createMany: {
            args: Prisma.ProductionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>[]
          }
          delete: {
            args: Prisma.ProductionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          update: {
            args: Prisma.ProductionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          deleteMany: {
            args: Prisma.ProductionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>[]
          }
          upsert: {
            args: Prisma.ProductionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          aggregate: {
            args: Prisma.ProductionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionPlan>
          }
          groupBy: {
            args: Prisma.ProductionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionPlanCountAggregateOutputType> | number
          }
        }
      }
      ProductionIssue: {
        payload: Prisma.$ProductionIssuePayload<ExtArgs>
        fields: Prisma.ProductionIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          findFirst: {
            args: Prisma.ProductionIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          findMany: {
            args: Prisma.ProductionIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>[]
          }
          create: {
            args: Prisma.ProductionIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          createMany: {
            args: Prisma.ProductionIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionIssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>[]
          }
          delete: {
            args: Prisma.ProductionIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          update: {
            args: Prisma.ProductionIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          deleteMany: {
            args: Prisma.ProductionIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionIssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>[]
          }
          upsert: {
            args: Prisma.ProductionIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionIssuePayload>
          }
          aggregate: {
            args: Prisma.ProductionIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionIssue>
          }
          groupBy: {
            args: Prisma.ProductionIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionIssueCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionIssueCountAggregateOutputType> | number
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
    workOrder?: WorkOrderOmit
    purchaseOrder?: PurchaseOrderOmit
    productionPlan?: ProductionPlanOmit
    productionIssue?: ProductionIssueOmit
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
   * Model WorkOrder
   */

  export type AggregateWorkOrder = {
    _count: WorkOrderCountAggregateOutputType | null
    _avg: WorkOrderAvgAggregateOutputType | null
    _sum: WorkOrderSumAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  export type WorkOrderAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    createdById: number | null
    approvedById: number | null
    companyId: number | null
  }

  export type WorkOrderSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    createdById: number | null
    approvedById: number | null
    companyId: number | null
  }

  export type WorkOrderMinAggregateOutputType = {
    id: number | null
    workOrderCode: string | null
    productId: number | null
    clientLocation: string | null
    vendorOrClient: string | null
    quantity: number | null
    deliveryDate: Date | null
    description: string | null
    status: $Enums.WorkOrderStatus | null
    createdById: number | null
    approvedById: number | null
    companyId: number | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOrderMaxAggregateOutputType = {
    id: number | null
    workOrderCode: string | null
    productId: number | null
    clientLocation: string | null
    vendorOrClient: string | null
    quantity: number | null
    deliveryDate: Date | null
    description: string | null
    status: $Enums.WorkOrderStatus | null
    createdById: number | null
    approvedById: number | null
    companyId: number | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOrderCountAggregateOutputType = {
    id: number
    workOrderCode: number
    productId: number
    clientLocation: number
    vendorOrClient: number
    quantity: number
    deliveryDate: number
    description: number
    status: number
    createdById: number
    approvedById: number
    companyId: number
    priority: number
    attachments: number
    assignedTo: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkOrderAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    createdById?: true
    approvedById?: true
    companyId?: true
  }

  export type WorkOrderSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    createdById?: true
    approvedById?: true
    companyId?: true
  }

  export type WorkOrderMinAggregateInputType = {
    id?: true
    workOrderCode?: true
    productId?: true
    clientLocation?: true
    vendorOrClient?: true
    quantity?: true
    deliveryDate?: true
    description?: true
    status?: true
    createdById?: true
    approvedById?: true
    companyId?: true
    priority?: true
    assignedTo?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOrderMaxAggregateInputType = {
    id?: true
    workOrderCode?: true
    productId?: true
    clientLocation?: true
    vendorOrClient?: true
    quantity?: true
    deliveryDate?: true
    description?: true
    status?: true
    createdById?: true
    approvedById?: true
    companyId?: true
    priority?: true
    assignedTo?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOrderCountAggregateInputType = {
    id?: true
    workOrderCode?: true
    productId?: true
    clientLocation?: true
    vendorOrClient?: true
    quantity?: true
    deliveryDate?: true
    description?: true
    status?: true
    createdById?: true
    approvedById?: true
    companyId?: true
    priority?: true
    attachments?: true
    assignedTo?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrder to aggregate.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrders
    **/
    _count?: true | WorkOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderMaxAggregateInputType
  }

  export type GetWorkOrderAggregateType<T extends WorkOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrder[P]>
      : GetScalarType<T[P], AggregateWorkOrder[P]>
  }




  export type WorkOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithAggregationInput | WorkOrderOrderByWithAggregationInput[]
    by: WorkOrderScalarFieldEnum[] | WorkOrderScalarFieldEnum
    having?: WorkOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderCountAggregateInputType | true
    _avg?: WorkOrderAvgAggregateInputType
    _sum?: WorkOrderSumAggregateInputType
    _min?: WorkOrderMinAggregateInputType
    _max?: WorkOrderMaxAggregateInputType
  }

  export type WorkOrderGroupByOutputType = {
    id: number
    workOrderCode: string
    productId: number
    clientLocation: string
    vendorOrClient: string
    quantity: number
    deliveryDate: Date
    description: string | null
    status: $Enums.WorkOrderStatus
    createdById: number
    approvedById: number | null
    companyId: number | null
    priority: $Enums.Priority | null
    attachments: string[]
    assignedTo: string | null
    comments: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkOrderCountAggregateOutputType | null
    _avg: WorkOrderAvgAggregateOutputType | null
    _sum: WorkOrderSumAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  type GetWorkOrderGroupByPayload<T extends WorkOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderCode?: boolean
    productId?: boolean
    clientLocation?: boolean
    vendorOrClient?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    description?: boolean
    status?: boolean
    createdById?: boolean
    approvedById?: boolean
    companyId?: boolean
    priority?: boolean
    attachments?: boolean
    assignedTo?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderCode?: boolean
    productId?: boolean
    clientLocation?: boolean
    vendorOrClient?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    description?: boolean
    status?: boolean
    createdById?: boolean
    approvedById?: boolean
    companyId?: boolean
    priority?: boolean
    attachments?: boolean
    assignedTo?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderCode?: boolean
    productId?: boolean
    clientLocation?: boolean
    vendorOrClient?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    description?: boolean
    status?: boolean
    createdById?: boolean
    approvedById?: boolean
    companyId?: boolean
    priority?: boolean
    attachments?: boolean
    assignedTo?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectScalar = {
    id?: boolean
    workOrderCode?: boolean
    productId?: boolean
    clientLocation?: boolean
    vendorOrClient?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    description?: boolean
    status?: boolean
    createdById?: boolean
    approvedById?: boolean
    companyId?: boolean
    priority?: boolean
    attachments?: boolean
    assignedTo?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workOrderCode" | "productId" | "clientLocation" | "vendorOrClient" | "quantity" | "deliveryDate" | "description" | "status" | "createdById" | "approvedById" | "companyId" | "priority" | "attachments" | "assignedTo" | "comments" | "createdAt" | "updatedAt", ExtArgs["result"]["workOrder"]>

  export type $WorkOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workOrderCode: string
      productId: number
      clientLocation: string
      vendorOrClient: string
      quantity: number
      deliveryDate: Date
      description: string | null
      status: $Enums.WorkOrderStatus
      createdById: number
      approvedById: number | null
      companyId: number | null
      priority: $Enums.Priority | null
      attachments: string[]
      assignedTo: string | null
      comments: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workOrder"]>
    composites: {}
  }

  type WorkOrderGetPayload<S extends boolean | null | undefined | WorkOrderDefaultArgs> = $Result.GetResult<Prisma.$WorkOrderPayload, S>

  type WorkOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkOrderCountAggregateInputType | true
    }

  export interface WorkOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkOrder'], meta: { name: 'WorkOrder' } }
    /**
     * Find zero or one WorkOrder that matches the filter.
     * @param {WorkOrderFindUniqueArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkOrderFindUniqueArgs>(args: SelectSubset<T, WorkOrderFindUniqueArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkOrderFindUniqueOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkOrderFindFirstArgs>(args?: SelectSubset<T, WorkOrderFindFirstArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrders
     * const workOrders = await prisma.workOrder.findMany()
     * 
     * // Get first 10 WorkOrders
     * const workOrders = await prisma.workOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOrderWithIdOnly = await prisma.workOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkOrderFindManyArgs>(args?: SelectSubset<T, WorkOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkOrder.
     * @param {WorkOrderCreateArgs} args - Arguments to create a WorkOrder.
     * @example
     * // Create one WorkOrder
     * const WorkOrder = await prisma.workOrder.create({
     *   data: {
     *     // ... data to create a WorkOrder
     *   }
     * })
     * 
     */
    create<T extends WorkOrderCreateArgs>(args: SelectSubset<T, WorkOrderCreateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkOrders.
     * @param {WorkOrderCreateManyArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkOrderCreateManyArgs>(args?: SelectSubset<T, WorkOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkOrders and returns the data saved in the database.
     * @param {WorkOrderCreateManyAndReturnArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkOrders and only return the `id`
     * const workOrderWithIdOnly = await prisma.workOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkOrder.
     * @param {WorkOrderDeleteArgs} args - Arguments to delete one WorkOrder.
     * @example
     * // Delete one WorkOrder
     * const WorkOrder = await prisma.workOrder.delete({
     *   where: {
     *     // ... filter to delete one WorkOrder
     *   }
     * })
     * 
     */
    delete<T extends WorkOrderDeleteArgs>(args: SelectSubset<T, WorkOrderDeleteArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkOrder.
     * @param {WorkOrderUpdateArgs} args - Arguments to update one WorkOrder.
     * @example
     * // Update one WorkOrder
     * const workOrder = await prisma.workOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkOrderUpdateArgs>(args: SelectSubset<T, WorkOrderUpdateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkOrders.
     * @param {WorkOrderDeleteManyArgs} args - Arguments to filter WorkOrders to delete.
     * @example
     * // Delete a few WorkOrders
     * const { count } = await prisma.workOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkOrderDeleteManyArgs>(args?: SelectSubset<T, WorkOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkOrderUpdateManyArgs>(args: SelectSubset<T, WorkOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders and returns the data updated in the database.
     * @param {WorkOrderUpdateManyAndReturnArgs} args - Arguments to update many WorkOrders.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkOrders and only return the `id`
     * const workOrderWithIdOnly = await prisma.workOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkOrder.
     * @param {WorkOrderUpsertArgs} args - Arguments to update or create a WorkOrder.
     * @example
     * // Update or create a WorkOrder
     * const workOrder = await prisma.workOrder.upsert({
     *   create: {
     *     // ... data to create a WorkOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrder we want to update
     *   }
     * })
     */
    upsert<T extends WorkOrderUpsertArgs>(args: SelectSubset<T, WorkOrderUpsertArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderCountArgs} args - Arguments to filter WorkOrders to count.
     * @example
     * // Count the number of WorkOrders
     * const count = await prisma.workOrder.count({
     *   where: {
     *     // ... the filter for the WorkOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderCountArgs>(
      args?: Subset<T, WorkOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkOrderAggregateArgs>(args: Subset<T, WorkOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAggregateType<T>>

    /**
     * Group by WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderGroupByArgs} args - Group by arguments.
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
      T extends WorkOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkOrder model
   */
  readonly fields: WorkOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WorkOrder model
   */
  interface WorkOrderFieldRefs {
    readonly id: FieldRef<"WorkOrder", 'Int'>
    readonly workOrderCode: FieldRef<"WorkOrder", 'String'>
    readonly productId: FieldRef<"WorkOrder", 'Int'>
    readonly clientLocation: FieldRef<"WorkOrder", 'String'>
    readonly vendorOrClient: FieldRef<"WorkOrder", 'String'>
    readonly quantity: FieldRef<"WorkOrder", 'Int'>
    readonly deliveryDate: FieldRef<"WorkOrder", 'DateTime'>
    readonly description: FieldRef<"WorkOrder", 'String'>
    readonly status: FieldRef<"WorkOrder", 'WorkOrderStatus'>
    readonly createdById: FieldRef<"WorkOrder", 'Int'>
    readonly approvedById: FieldRef<"WorkOrder", 'Int'>
    readonly companyId: FieldRef<"WorkOrder", 'Int'>
    readonly priority: FieldRef<"WorkOrder", 'Priority'>
    readonly attachments: FieldRef<"WorkOrder", 'String[]'>
    readonly assignedTo: FieldRef<"WorkOrder", 'String'>
    readonly comments: FieldRef<"WorkOrder", 'String'>
    readonly createdAt: FieldRef<"WorkOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkOrder findUnique
   */
  export type WorkOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findUniqueOrThrow
   */
  export type WorkOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findFirst
   */
  export type WorkOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findFirstOrThrow
   */
  export type WorkOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findMany
   */
  export type WorkOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter, which WorkOrders to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder create
   */
  export type WorkOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkOrder.
     */
    data: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
  }

  /**
   * WorkOrder createMany
   */
  export type WorkOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkOrder createManyAndReturn
   */
  export type WorkOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkOrder update
   */
  export type WorkOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkOrder.
     */
    data: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
    /**
     * Choose, which WorkOrder to update.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder updateMany
   */
  export type WorkOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
  }

  /**
   * WorkOrder updateManyAndReturn
   */
  export type WorkOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
  }

  /**
   * WorkOrder upsert
   */
  export type WorkOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkOrder to update in case it exists.
     */
    where: WorkOrderWhereUniqueInput
    /**
     * In case the WorkOrder found by the `where` argument doesn't exist, create a new WorkOrder with this data.
     */
    create: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
    /**
     * In case the WorkOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
  }

  /**
   * WorkOrder delete
   */
  export type WorkOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Filter which WorkOrder to delete.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder deleteMany
   */
  export type WorkOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrders to delete
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to delete.
     */
    limit?: number
  }

  /**
   * WorkOrder without action
   */
  export type WorkOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    supplierId: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    supplierId: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    poNumber: string | null
    workOrderId: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    supplierId: number | null
    deliveryDate: Date | null
    status: $Enums.PurchaseOrderStatus | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    poNumber: string | null
    workOrderId: number | null
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    supplierId: number | null
    deliveryDate: Date | null
    status: $Enums.PurchaseOrderStatus | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    poNumber: number
    workOrderId: number
    productId: number
    ingredientId: number
    quantity: number
    supplierId: number
    deliveryDate: number
    status: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    workOrderId?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    supplierId?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    workOrderId?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    supplierId?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    poNumber?: true
    workOrderId?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    supplierId?: true
    deliveryDate?: true
    status?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    poNumber?: true
    workOrderId?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    supplierId?: true
    deliveryDate?: true
    status?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    poNumber?: true
    workOrderId?: true
    productId?: true
    ingredientId?: true
    quantity?: true
    supplierId?: true
    deliveryDate?: true
    status?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    poNumber: string
    workOrderId: number
    productId: number
    ingredientId: number
    quantity: number
    supplierId: number
    deliveryDate: Date
    status: $Enums.PurchaseOrderStatus
    comments: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poNumber?: boolean
    workOrderId?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    supplierId?: boolean
    deliveryDate?: boolean
    status?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poNumber?: boolean
    workOrderId?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    supplierId?: boolean
    deliveryDate?: boolean
    status?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poNumber?: boolean
    workOrderId?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    supplierId?: boolean
    deliveryDate?: boolean
    status?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    poNumber?: boolean
    workOrderId?: boolean
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    supplierId?: boolean
    deliveryDate?: boolean
    status?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poNumber" | "workOrderId" | "productId" | "ingredientId" | "quantity" | "supplierId" | "deliveryDate" | "status" | "comments" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrder"]>

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      poNumber: string
      workOrderId: number
      productId: number
      ingredientId: number
      quantity: number
      supplierId: number
      deliveryDate: Date
      status: $Enums.PurchaseOrderStatus
      comments: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly poNumber: FieldRef<"PurchaseOrder", 'String'>
    readonly workOrderId: FieldRef<"PurchaseOrder", 'Int'>
    readonly productId: FieldRef<"PurchaseOrder", 'Int'>
    readonly ingredientId: FieldRef<"PurchaseOrder", 'Int'>
    readonly quantity: FieldRef<"PurchaseOrder", 'Int'>
    readonly supplierId: FieldRef<"PurchaseOrder", 'Int'>
    readonly deliveryDate: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly status: FieldRef<"PurchaseOrder", 'PurchaseOrderStatus'>
    readonly comments: FieldRef<"PurchaseOrder", 'String'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
  }


  /**
   * Model ProductionPlan
   */

  export type AggregateProductionPlan = {
    _count: ProductionPlanCountAggregateOutputType | null
    _avg: ProductionPlanAvgAggregateOutputType | null
    _sum: ProductionPlanSumAggregateOutputType | null
    _min: ProductionPlanMinAggregateOutputType | null
    _max: ProductionPlanMaxAggregateOutputType | null
  }

  export type ProductionPlanAvgAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    lineNumber: number | null
    hiskRiskLabour: number | null
    lowRiskLabour: number | null
    packLabour: number | null
    targetPerMin: number | null
    actualProduced: number | null
  }

  export type ProductionPlanSumAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    lineNumber: number | null
    hiskRiskLabour: number | null
    lowRiskLabour: number | null
    packLabour: number | null
    targetPerMin: number | null
    actualProduced: number | null
  }

  export type ProductionPlanMinAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    lineNumber: number | null
    startTime: Date | null
    endTime: Date | null
    hiskRiskLabour: number | null
    lowRiskLabour: number | null
    packLabour: number | null
    targetPerMin: number | null
    actualProduced: number | null
    issues: string | null
  }

  export type ProductionPlanMaxAggregateOutputType = {
    id: number | null
    workOrderId: number | null
    lineNumber: number | null
    startTime: Date | null
    endTime: Date | null
    hiskRiskLabour: number | null
    lowRiskLabour: number | null
    packLabour: number | null
    targetPerMin: number | null
    actualProduced: number | null
    issues: string | null
  }

  export type ProductionPlanCountAggregateOutputType = {
    id: number
    workOrderId: number
    lineNumber: number
    startTime: number
    endTime: number
    hiskRiskLabour: number
    lowRiskLabour: number
    packLabour: number
    targetPerMin: number
    actualProduced: number
    issues: number
    _all: number
  }


  export type ProductionPlanAvgAggregateInputType = {
    id?: true
    workOrderId?: true
    lineNumber?: true
    hiskRiskLabour?: true
    lowRiskLabour?: true
    packLabour?: true
    targetPerMin?: true
    actualProduced?: true
  }

  export type ProductionPlanSumAggregateInputType = {
    id?: true
    workOrderId?: true
    lineNumber?: true
    hiskRiskLabour?: true
    lowRiskLabour?: true
    packLabour?: true
    targetPerMin?: true
    actualProduced?: true
  }

  export type ProductionPlanMinAggregateInputType = {
    id?: true
    workOrderId?: true
    lineNumber?: true
    startTime?: true
    endTime?: true
    hiskRiskLabour?: true
    lowRiskLabour?: true
    packLabour?: true
    targetPerMin?: true
    actualProduced?: true
    issues?: true
  }

  export type ProductionPlanMaxAggregateInputType = {
    id?: true
    workOrderId?: true
    lineNumber?: true
    startTime?: true
    endTime?: true
    hiskRiskLabour?: true
    lowRiskLabour?: true
    packLabour?: true
    targetPerMin?: true
    actualProduced?: true
    issues?: true
  }

  export type ProductionPlanCountAggregateInputType = {
    id?: true
    workOrderId?: true
    lineNumber?: true
    startTime?: true
    endTime?: true
    hiskRiskLabour?: true
    lowRiskLabour?: true
    packLabour?: true
    targetPerMin?: true
    actualProduced?: true
    issues?: true
    _all?: true
  }

  export type ProductionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionPlan to aggregate.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionPlans
    **/
    _count?: true | ProductionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionPlanMaxAggregateInputType
  }

  export type GetProductionPlanAggregateType<T extends ProductionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionPlan[P]>
      : GetScalarType<T[P], AggregateProductionPlan[P]>
  }




  export type ProductionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionPlanWhereInput
    orderBy?: ProductionPlanOrderByWithAggregationInput | ProductionPlanOrderByWithAggregationInput[]
    by: ProductionPlanScalarFieldEnum[] | ProductionPlanScalarFieldEnum
    having?: ProductionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionPlanCountAggregateInputType | true
    _avg?: ProductionPlanAvgAggregateInputType
    _sum?: ProductionPlanSumAggregateInputType
    _min?: ProductionPlanMinAggregateInputType
    _max?: ProductionPlanMaxAggregateInputType
  }

  export type ProductionPlanGroupByOutputType = {
    id: number
    workOrderId: number
    lineNumber: number
    startTime: Date
    endTime: Date | null
    hiskRiskLabour: number
    lowRiskLabour: number
    packLabour: number
    targetPerMin: number
    actualProduced: number | null
    issues: string | null
    _count: ProductionPlanCountAggregateOutputType | null
    _avg: ProductionPlanAvgAggregateOutputType | null
    _sum: ProductionPlanSumAggregateOutputType | null
    _min: ProductionPlanMinAggregateOutputType | null
    _max: ProductionPlanMaxAggregateOutputType | null
  }

  type GetProductionPlanGroupByPayload<T extends ProductionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionPlanGroupByOutputType[P]>
        }
      >
    >


  export type ProductionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    lineNumber?: boolean
    startTime?: boolean
    endTime?: boolean
    hiskRiskLabour?: boolean
    lowRiskLabour?: boolean
    packLabour?: boolean
    targetPerMin?: boolean
    actualProduced?: boolean
    issues?: boolean
  }, ExtArgs["result"]["productionPlan"]>

  export type ProductionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    lineNumber?: boolean
    startTime?: boolean
    endTime?: boolean
    hiskRiskLabour?: boolean
    lowRiskLabour?: boolean
    packLabour?: boolean
    targetPerMin?: boolean
    actualProduced?: boolean
    issues?: boolean
  }, ExtArgs["result"]["productionPlan"]>

  export type ProductionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    lineNumber?: boolean
    startTime?: boolean
    endTime?: boolean
    hiskRiskLabour?: boolean
    lowRiskLabour?: boolean
    packLabour?: boolean
    targetPerMin?: boolean
    actualProduced?: boolean
    issues?: boolean
  }, ExtArgs["result"]["productionPlan"]>

  export type ProductionPlanSelectScalar = {
    id?: boolean
    workOrderId?: boolean
    lineNumber?: boolean
    startTime?: boolean
    endTime?: boolean
    hiskRiskLabour?: boolean
    lowRiskLabour?: boolean
    packLabour?: boolean
    targetPerMin?: boolean
    actualProduced?: boolean
    issues?: boolean
  }

  export type ProductionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workOrderId" | "lineNumber" | "startTime" | "endTime" | "hiskRiskLabour" | "lowRiskLabour" | "packLabour" | "targetPerMin" | "actualProduced" | "issues", ExtArgs["result"]["productionPlan"]>

  export type $ProductionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionPlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workOrderId: number
      lineNumber: number
      startTime: Date
      endTime: Date | null
      hiskRiskLabour: number
      lowRiskLabour: number
      packLabour: number
      targetPerMin: number
      actualProduced: number | null
      issues: string | null
    }, ExtArgs["result"]["productionPlan"]>
    composites: {}
  }

  type ProductionPlanGetPayload<S extends boolean | null | undefined | ProductionPlanDefaultArgs> = $Result.GetResult<Prisma.$ProductionPlanPayload, S>

  type ProductionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionPlanCountAggregateInputType | true
    }

  export interface ProductionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionPlan'], meta: { name: 'ProductionPlan' } }
    /**
     * Find zero or one ProductionPlan that matches the filter.
     * @param {ProductionPlanFindUniqueArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionPlanFindUniqueArgs>(args: SelectSubset<T, ProductionPlanFindUniqueArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionPlanFindUniqueOrThrowArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindFirstArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionPlanFindFirstArgs>(args?: SelectSubset<T, ProductionPlanFindFirstArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindFirstOrThrowArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionPlans
     * const productionPlans = await prisma.productionPlan.findMany()
     * 
     * // Get first 10 ProductionPlans
     * const productionPlans = await prisma.productionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionPlanWithIdOnly = await prisma.productionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionPlanFindManyArgs>(args?: SelectSubset<T, ProductionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionPlan.
     * @param {ProductionPlanCreateArgs} args - Arguments to create a ProductionPlan.
     * @example
     * // Create one ProductionPlan
     * const ProductionPlan = await prisma.productionPlan.create({
     *   data: {
     *     // ... data to create a ProductionPlan
     *   }
     * })
     * 
     */
    create<T extends ProductionPlanCreateArgs>(args: SelectSubset<T, ProductionPlanCreateArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionPlans.
     * @param {ProductionPlanCreateManyArgs} args - Arguments to create many ProductionPlans.
     * @example
     * // Create many ProductionPlans
     * const productionPlan = await prisma.productionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionPlanCreateManyArgs>(args?: SelectSubset<T, ProductionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionPlans and returns the data saved in the database.
     * @param {ProductionPlanCreateManyAndReturnArgs} args - Arguments to create many ProductionPlans.
     * @example
     * // Create many ProductionPlans
     * const productionPlan = await prisma.productionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionPlans and only return the `id`
     * const productionPlanWithIdOnly = await prisma.productionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionPlan.
     * @param {ProductionPlanDeleteArgs} args - Arguments to delete one ProductionPlan.
     * @example
     * // Delete one ProductionPlan
     * const ProductionPlan = await prisma.productionPlan.delete({
     *   where: {
     *     // ... filter to delete one ProductionPlan
     *   }
     * })
     * 
     */
    delete<T extends ProductionPlanDeleteArgs>(args: SelectSubset<T, ProductionPlanDeleteArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionPlan.
     * @param {ProductionPlanUpdateArgs} args - Arguments to update one ProductionPlan.
     * @example
     * // Update one ProductionPlan
     * const productionPlan = await prisma.productionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionPlanUpdateArgs>(args: SelectSubset<T, ProductionPlanUpdateArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionPlans.
     * @param {ProductionPlanDeleteManyArgs} args - Arguments to filter ProductionPlans to delete.
     * @example
     * // Delete a few ProductionPlans
     * const { count } = await prisma.productionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionPlanDeleteManyArgs>(args?: SelectSubset<T, ProductionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionPlans
     * const productionPlan = await prisma.productionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionPlanUpdateManyArgs>(args: SelectSubset<T, ProductionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionPlans and returns the data updated in the database.
     * @param {ProductionPlanUpdateManyAndReturnArgs} args - Arguments to update many ProductionPlans.
     * @example
     * // Update many ProductionPlans
     * const productionPlan = await prisma.productionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionPlans and only return the `id`
     * const productionPlanWithIdOnly = await prisma.productionPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionPlan.
     * @param {ProductionPlanUpsertArgs} args - Arguments to update or create a ProductionPlan.
     * @example
     * // Update or create a ProductionPlan
     * const productionPlan = await prisma.productionPlan.upsert({
     *   create: {
     *     // ... data to create a ProductionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionPlan we want to update
     *   }
     * })
     */
    upsert<T extends ProductionPlanUpsertArgs>(args: SelectSubset<T, ProductionPlanUpsertArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanCountArgs} args - Arguments to filter ProductionPlans to count.
     * @example
     * // Count the number of ProductionPlans
     * const count = await prisma.productionPlan.count({
     *   where: {
     *     // ... the filter for the ProductionPlans we want to count
     *   }
     * })
    **/
    count<T extends ProductionPlanCountArgs>(
      args?: Subset<T, ProductionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionPlanAggregateArgs>(args: Subset<T, ProductionPlanAggregateArgs>): Prisma.PrismaPromise<GetProductionPlanAggregateType<T>>

    /**
     * Group by ProductionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanGroupByArgs} args - Group by arguments.
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
      T extends ProductionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionPlanGroupByArgs['orderBy'] }
        : { orderBy?: ProductionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionPlan model
   */
  readonly fields: ProductionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProductionPlan model
   */
  interface ProductionPlanFieldRefs {
    readonly id: FieldRef<"ProductionPlan", 'Int'>
    readonly workOrderId: FieldRef<"ProductionPlan", 'Int'>
    readonly lineNumber: FieldRef<"ProductionPlan", 'Int'>
    readonly startTime: FieldRef<"ProductionPlan", 'DateTime'>
    readonly endTime: FieldRef<"ProductionPlan", 'DateTime'>
    readonly hiskRiskLabour: FieldRef<"ProductionPlan", 'Int'>
    readonly lowRiskLabour: FieldRef<"ProductionPlan", 'Int'>
    readonly packLabour: FieldRef<"ProductionPlan", 'Int'>
    readonly targetPerMin: FieldRef<"ProductionPlan", 'Int'>
    readonly actualProduced: FieldRef<"ProductionPlan", 'Int'>
    readonly issues: FieldRef<"ProductionPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductionPlan findUnique
   */
  export type ProductionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan findUniqueOrThrow
   */
  export type ProductionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan findFirst
   */
  export type ProductionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionPlans.
     */
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan findFirstOrThrow
   */
  export type ProductionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionPlans.
     */
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan findMany
   */
  export type ProductionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter, which ProductionPlans to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan create
   */
  export type ProductionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductionPlan.
     */
    data: XOR<ProductionPlanCreateInput, ProductionPlanUncheckedCreateInput>
  }

  /**
   * ProductionPlan createMany
   */
  export type ProductionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionPlans.
     */
    data: ProductionPlanCreateManyInput | ProductionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionPlan createManyAndReturn
   */
  export type ProductionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionPlans.
     */
    data: ProductionPlanCreateManyInput | ProductionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionPlan update
   */
  export type ProductionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductionPlan.
     */
    data: XOR<ProductionPlanUpdateInput, ProductionPlanUncheckedUpdateInput>
    /**
     * Choose, which ProductionPlan to update.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan updateMany
   */
  export type ProductionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionPlans.
     */
    data: XOR<ProductionPlanUpdateManyMutationInput, ProductionPlanUncheckedUpdateManyInput>
    /**
     * Filter which ProductionPlans to update
     */
    where?: ProductionPlanWhereInput
    /**
     * Limit how many ProductionPlans to update.
     */
    limit?: number
  }

  /**
   * ProductionPlan updateManyAndReturn
   */
  export type ProductionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * The data used to update ProductionPlans.
     */
    data: XOR<ProductionPlanUpdateManyMutationInput, ProductionPlanUncheckedUpdateManyInput>
    /**
     * Filter which ProductionPlans to update
     */
    where?: ProductionPlanWhereInput
    /**
     * Limit how many ProductionPlans to update.
     */
    limit?: number
  }

  /**
   * ProductionPlan upsert
   */
  export type ProductionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductionPlan to update in case it exists.
     */
    where: ProductionPlanWhereUniqueInput
    /**
     * In case the ProductionPlan found by the `where` argument doesn't exist, create a new ProductionPlan with this data.
     */
    create: XOR<ProductionPlanCreateInput, ProductionPlanUncheckedCreateInput>
    /**
     * In case the ProductionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionPlanUpdateInput, ProductionPlanUncheckedUpdateInput>
  }

  /**
   * ProductionPlan delete
   */
  export type ProductionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Filter which ProductionPlan to delete.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan deleteMany
   */
  export type ProductionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionPlans to delete
     */
    where?: ProductionPlanWhereInput
    /**
     * Limit how many ProductionPlans to delete.
     */
    limit?: number
  }

  /**
   * ProductionPlan without action
   */
  export type ProductionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
  }


  /**
   * Model ProductionIssue
   */

  export type AggregateProductionIssue = {
    _count: ProductionIssueCountAggregateOutputType | null
    _avg: ProductionIssueAvgAggregateOutputType | null
    _sum: ProductionIssueSumAggregateOutputType | null
    _min: ProductionIssueMinAggregateOutputType | null
    _max: ProductionIssueMaxAggregateOutputType | null
  }

  export type ProductionIssueAvgAggregateOutputType = {
    id: number | null
    planId: number | null
  }

  export type ProductionIssueSumAggregateOutputType = {
    id: number | null
    planId: number | null
  }

  export type ProductionIssueMinAggregateOutputType = {
    id: number | null
    planId: number | null
    issueType: $Enums.IssueType | null
    description: string | null
    occurredAt: Date | null
    resolvedAt: Date | null
  }

  export type ProductionIssueMaxAggregateOutputType = {
    id: number | null
    planId: number | null
    issueType: $Enums.IssueType | null
    description: string | null
    occurredAt: Date | null
    resolvedAt: Date | null
  }

  export type ProductionIssueCountAggregateOutputType = {
    id: number
    planId: number
    issueType: number
    description: number
    occurredAt: number
    resolvedAt: number
    _all: number
  }


  export type ProductionIssueAvgAggregateInputType = {
    id?: true
    planId?: true
  }

  export type ProductionIssueSumAggregateInputType = {
    id?: true
    planId?: true
  }

  export type ProductionIssueMinAggregateInputType = {
    id?: true
    planId?: true
    issueType?: true
    description?: true
    occurredAt?: true
    resolvedAt?: true
  }

  export type ProductionIssueMaxAggregateInputType = {
    id?: true
    planId?: true
    issueType?: true
    description?: true
    occurredAt?: true
    resolvedAt?: true
  }

  export type ProductionIssueCountAggregateInputType = {
    id?: true
    planId?: true
    issueType?: true
    description?: true
    occurredAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type ProductionIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionIssue to aggregate.
     */
    where?: ProductionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionIssues to fetch.
     */
    orderBy?: ProductionIssueOrderByWithRelationInput | ProductionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionIssues
    **/
    _count?: true | ProductionIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionIssueMaxAggregateInputType
  }

  export type GetProductionIssueAggregateType<T extends ProductionIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionIssue[P]>
      : GetScalarType<T[P], AggregateProductionIssue[P]>
  }




  export type ProductionIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionIssueWhereInput
    orderBy?: ProductionIssueOrderByWithAggregationInput | ProductionIssueOrderByWithAggregationInput[]
    by: ProductionIssueScalarFieldEnum[] | ProductionIssueScalarFieldEnum
    having?: ProductionIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionIssueCountAggregateInputType | true
    _avg?: ProductionIssueAvgAggregateInputType
    _sum?: ProductionIssueSumAggregateInputType
    _min?: ProductionIssueMinAggregateInputType
    _max?: ProductionIssueMaxAggregateInputType
  }

  export type ProductionIssueGroupByOutputType = {
    id: number
    planId: number
    issueType: $Enums.IssueType
    description: string
    occurredAt: Date
    resolvedAt: Date | null
    _count: ProductionIssueCountAggregateOutputType | null
    _avg: ProductionIssueAvgAggregateOutputType | null
    _sum: ProductionIssueSumAggregateOutputType | null
    _min: ProductionIssueMinAggregateOutputType | null
    _max: ProductionIssueMaxAggregateOutputType | null
  }

  type GetProductionIssueGroupByPayload<T extends ProductionIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionIssueGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionIssueGroupByOutputType[P]>
        }
      >
    >


  export type ProductionIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    issueType?: boolean
    description?: boolean
    occurredAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["productionIssue"]>

  export type ProductionIssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    issueType?: boolean
    description?: boolean
    occurredAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["productionIssue"]>

  export type ProductionIssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    issueType?: boolean
    description?: boolean
    occurredAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["productionIssue"]>

  export type ProductionIssueSelectScalar = {
    id?: boolean
    planId?: boolean
    issueType?: boolean
    description?: boolean
    occurredAt?: boolean
    resolvedAt?: boolean
  }

  export type ProductionIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "issueType" | "description" | "occurredAt" | "resolvedAt", ExtArgs["result"]["productionIssue"]>

  export type $ProductionIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionIssue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planId: number
      issueType: $Enums.IssueType
      description: string
      occurredAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["productionIssue"]>
    composites: {}
  }

  type ProductionIssueGetPayload<S extends boolean | null | undefined | ProductionIssueDefaultArgs> = $Result.GetResult<Prisma.$ProductionIssuePayload, S>

  type ProductionIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionIssueCountAggregateInputType | true
    }

  export interface ProductionIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionIssue'], meta: { name: 'ProductionIssue' } }
    /**
     * Find zero or one ProductionIssue that matches the filter.
     * @param {ProductionIssueFindUniqueArgs} args - Arguments to find a ProductionIssue
     * @example
     * // Get one ProductionIssue
     * const productionIssue = await prisma.productionIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionIssueFindUniqueArgs>(args: SelectSubset<T, ProductionIssueFindUniqueArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionIssueFindUniqueOrThrowArgs} args - Arguments to find a ProductionIssue
     * @example
     * // Get one ProductionIssue
     * const productionIssue = await prisma.productionIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueFindFirstArgs} args - Arguments to find a ProductionIssue
     * @example
     * // Get one ProductionIssue
     * const productionIssue = await prisma.productionIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionIssueFindFirstArgs>(args?: SelectSubset<T, ProductionIssueFindFirstArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueFindFirstOrThrowArgs} args - Arguments to find a ProductionIssue
     * @example
     * // Get one ProductionIssue
     * const productionIssue = await prisma.productionIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionIssues
     * const productionIssues = await prisma.productionIssue.findMany()
     * 
     * // Get first 10 ProductionIssues
     * const productionIssues = await prisma.productionIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionIssueWithIdOnly = await prisma.productionIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionIssueFindManyArgs>(args?: SelectSubset<T, ProductionIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionIssue.
     * @param {ProductionIssueCreateArgs} args - Arguments to create a ProductionIssue.
     * @example
     * // Create one ProductionIssue
     * const ProductionIssue = await prisma.productionIssue.create({
     *   data: {
     *     // ... data to create a ProductionIssue
     *   }
     * })
     * 
     */
    create<T extends ProductionIssueCreateArgs>(args: SelectSubset<T, ProductionIssueCreateArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionIssues.
     * @param {ProductionIssueCreateManyArgs} args - Arguments to create many ProductionIssues.
     * @example
     * // Create many ProductionIssues
     * const productionIssue = await prisma.productionIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionIssueCreateManyArgs>(args?: SelectSubset<T, ProductionIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionIssues and returns the data saved in the database.
     * @param {ProductionIssueCreateManyAndReturnArgs} args - Arguments to create many ProductionIssues.
     * @example
     * // Create many ProductionIssues
     * const productionIssue = await prisma.productionIssue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionIssues and only return the `id`
     * const productionIssueWithIdOnly = await prisma.productionIssue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionIssueCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionIssue.
     * @param {ProductionIssueDeleteArgs} args - Arguments to delete one ProductionIssue.
     * @example
     * // Delete one ProductionIssue
     * const ProductionIssue = await prisma.productionIssue.delete({
     *   where: {
     *     // ... filter to delete one ProductionIssue
     *   }
     * })
     * 
     */
    delete<T extends ProductionIssueDeleteArgs>(args: SelectSubset<T, ProductionIssueDeleteArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionIssue.
     * @param {ProductionIssueUpdateArgs} args - Arguments to update one ProductionIssue.
     * @example
     * // Update one ProductionIssue
     * const productionIssue = await prisma.productionIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionIssueUpdateArgs>(args: SelectSubset<T, ProductionIssueUpdateArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionIssues.
     * @param {ProductionIssueDeleteManyArgs} args - Arguments to filter ProductionIssues to delete.
     * @example
     * // Delete a few ProductionIssues
     * const { count } = await prisma.productionIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionIssueDeleteManyArgs>(args?: SelectSubset<T, ProductionIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionIssues
     * const productionIssue = await prisma.productionIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionIssueUpdateManyArgs>(args: SelectSubset<T, ProductionIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionIssues and returns the data updated in the database.
     * @param {ProductionIssueUpdateManyAndReturnArgs} args - Arguments to update many ProductionIssues.
     * @example
     * // Update many ProductionIssues
     * const productionIssue = await prisma.productionIssue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionIssues and only return the `id`
     * const productionIssueWithIdOnly = await prisma.productionIssue.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductionIssueUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionIssue.
     * @param {ProductionIssueUpsertArgs} args - Arguments to update or create a ProductionIssue.
     * @example
     * // Update or create a ProductionIssue
     * const productionIssue = await prisma.productionIssue.upsert({
     *   create: {
     *     // ... data to create a ProductionIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionIssue we want to update
     *   }
     * })
     */
    upsert<T extends ProductionIssueUpsertArgs>(args: SelectSubset<T, ProductionIssueUpsertArgs<ExtArgs>>): Prisma__ProductionIssueClient<$Result.GetResult<Prisma.$ProductionIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueCountArgs} args - Arguments to filter ProductionIssues to count.
     * @example
     * // Count the number of ProductionIssues
     * const count = await prisma.productionIssue.count({
     *   where: {
     *     // ... the filter for the ProductionIssues we want to count
     *   }
     * })
    **/
    count<T extends ProductionIssueCountArgs>(
      args?: Subset<T, ProductionIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionIssueAggregateArgs>(args: Subset<T, ProductionIssueAggregateArgs>): Prisma.PrismaPromise<GetProductionIssueAggregateType<T>>

    /**
     * Group by ProductionIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionIssueGroupByArgs} args - Group by arguments.
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
      T extends ProductionIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionIssueGroupByArgs['orderBy'] }
        : { orderBy?: ProductionIssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionIssue model
   */
  readonly fields: ProductionIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProductionIssue model
   */
  interface ProductionIssueFieldRefs {
    readonly id: FieldRef<"ProductionIssue", 'Int'>
    readonly planId: FieldRef<"ProductionIssue", 'Int'>
    readonly issueType: FieldRef<"ProductionIssue", 'IssueType'>
    readonly description: FieldRef<"ProductionIssue", 'String'>
    readonly occurredAt: FieldRef<"ProductionIssue", 'DateTime'>
    readonly resolvedAt: FieldRef<"ProductionIssue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductionIssue findUnique
   */
  export type ProductionIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter, which ProductionIssue to fetch.
     */
    where: ProductionIssueWhereUniqueInput
  }

  /**
   * ProductionIssue findUniqueOrThrow
   */
  export type ProductionIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter, which ProductionIssue to fetch.
     */
    where: ProductionIssueWhereUniqueInput
  }

  /**
   * ProductionIssue findFirst
   */
  export type ProductionIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter, which ProductionIssue to fetch.
     */
    where?: ProductionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionIssues to fetch.
     */
    orderBy?: ProductionIssueOrderByWithRelationInput | ProductionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionIssues.
     */
    cursor?: ProductionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionIssues.
     */
    distinct?: ProductionIssueScalarFieldEnum | ProductionIssueScalarFieldEnum[]
  }

  /**
   * ProductionIssue findFirstOrThrow
   */
  export type ProductionIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter, which ProductionIssue to fetch.
     */
    where?: ProductionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionIssues to fetch.
     */
    orderBy?: ProductionIssueOrderByWithRelationInput | ProductionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionIssues.
     */
    cursor?: ProductionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionIssues.
     */
    distinct?: ProductionIssueScalarFieldEnum | ProductionIssueScalarFieldEnum[]
  }

  /**
   * ProductionIssue findMany
   */
  export type ProductionIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter, which ProductionIssues to fetch.
     */
    where?: ProductionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionIssues to fetch.
     */
    orderBy?: ProductionIssueOrderByWithRelationInput | ProductionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionIssues.
     */
    cursor?: ProductionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionIssues.
     */
    skip?: number
    distinct?: ProductionIssueScalarFieldEnum | ProductionIssueScalarFieldEnum[]
  }

  /**
   * ProductionIssue create
   */
  export type ProductionIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductionIssue.
     */
    data: XOR<ProductionIssueCreateInput, ProductionIssueUncheckedCreateInput>
  }

  /**
   * ProductionIssue createMany
   */
  export type ProductionIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionIssues.
     */
    data: ProductionIssueCreateManyInput | ProductionIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionIssue createManyAndReturn
   */
  export type ProductionIssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionIssues.
     */
    data: ProductionIssueCreateManyInput | ProductionIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionIssue update
   */
  export type ProductionIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductionIssue.
     */
    data: XOR<ProductionIssueUpdateInput, ProductionIssueUncheckedUpdateInput>
    /**
     * Choose, which ProductionIssue to update.
     */
    where: ProductionIssueWhereUniqueInput
  }

  /**
   * ProductionIssue updateMany
   */
  export type ProductionIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionIssues.
     */
    data: XOR<ProductionIssueUpdateManyMutationInput, ProductionIssueUncheckedUpdateManyInput>
    /**
     * Filter which ProductionIssues to update
     */
    where?: ProductionIssueWhereInput
    /**
     * Limit how many ProductionIssues to update.
     */
    limit?: number
  }

  /**
   * ProductionIssue updateManyAndReturn
   */
  export type ProductionIssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * The data used to update ProductionIssues.
     */
    data: XOR<ProductionIssueUpdateManyMutationInput, ProductionIssueUncheckedUpdateManyInput>
    /**
     * Filter which ProductionIssues to update
     */
    where?: ProductionIssueWhereInput
    /**
     * Limit how many ProductionIssues to update.
     */
    limit?: number
  }

  /**
   * ProductionIssue upsert
   */
  export type ProductionIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductionIssue to update in case it exists.
     */
    where: ProductionIssueWhereUniqueInput
    /**
     * In case the ProductionIssue found by the `where` argument doesn't exist, create a new ProductionIssue with this data.
     */
    create: XOR<ProductionIssueCreateInput, ProductionIssueUncheckedCreateInput>
    /**
     * In case the ProductionIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionIssueUpdateInput, ProductionIssueUncheckedUpdateInput>
  }

  /**
   * ProductionIssue delete
   */
  export type ProductionIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
    /**
     * Filter which ProductionIssue to delete.
     */
    where: ProductionIssueWhereUniqueInput
  }

  /**
   * ProductionIssue deleteMany
   */
  export type ProductionIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionIssues to delete
     */
    where?: ProductionIssueWhereInput
    /**
     * Limit how many ProductionIssues to delete.
     */
    limit?: number
  }

  /**
   * ProductionIssue without action
   */
  export type ProductionIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionIssue
     */
    select?: ProductionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionIssue
     */
    omit?: ProductionIssueOmit<ExtArgs> | null
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


  export const WorkOrderScalarFieldEnum: {
    id: 'id',
    workOrderCode: 'workOrderCode',
    productId: 'productId',
    clientLocation: 'clientLocation',
    vendorOrClient: 'vendorOrClient',
    quantity: 'quantity',
    deliveryDate: 'deliveryDate',
    description: 'description',
    status: 'status',
    createdById: 'createdById',
    approvedById: 'approvedById',
    companyId: 'companyId',
    priority: 'priority',
    attachments: 'attachments',
    assignedTo: 'assignedTo',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    poNumber: 'poNumber',
    workOrderId: 'workOrderId',
    productId: 'productId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    supplierId: 'supplierId',
    deliveryDate: 'deliveryDate',
    status: 'status',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const ProductionPlanScalarFieldEnum: {
    id: 'id',
    workOrderId: 'workOrderId',
    lineNumber: 'lineNumber',
    startTime: 'startTime',
    endTime: 'endTime',
    hiskRiskLabour: 'hiskRiskLabour',
    lowRiskLabour: 'lowRiskLabour',
    packLabour: 'packLabour',
    targetPerMin: 'targetPerMin',
    actualProduced: 'actualProduced',
    issues: 'issues'
  };

  export type ProductionPlanScalarFieldEnum = (typeof ProductionPlanScalarFieldEnum)[keyof typeof ProductionPlanScalarFieldEnum]


  export const ProductionIssueScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    issueType: 'issueType',
    description: 'description',
    occurredAt: 'occurredAt',
    resolvedAt: 'resolvedAt'
  };

  export type ProductionIssueScalarFieldEnum = (typeof ProductionIssueScalarFieldEnum)[keyof typeof ProductionIssueScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WorkOrderStatus'
   */
  export type EnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus'>
    


  /**
   * Reference to a field of type 'WorkOrderStatus[]'
   */
  export type ListEnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'PurchaseOrderStatus'
   */
  export type EnumPurchaseOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseOrderStatus'>
    


  /**
   * Reference to a field of type 'PurchaseOrderStatus[]'
   */
  export type ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseOrderStatus[]'>
    


  /**
   * Reference to a field of type 'IssueType'
   */
  export type EnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType'>
    


  /**
   * Reference to a field of type 'IssueType[]'
   */
  export type ListEnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkOrderWhereInput = {
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    id?: IntFilter<"WorkOrder"> | number
    workOrderCode?: StringFilter<"WorkOrder"> | string
    productId?: IntFilter<"WorkOrder"> | number
    clientLocation?: StringFilter<"WorkOrder"> | string
    vendorOrClient?: StringFilter<"WorkOrder"> | string
    quantity?: IntFilter<"WorkOrder"> | number
    deliveryDate?: DateTimeFilter<"WorkOrder"> | Date | string
    description?: StringNullableFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    createdById?: IntFilter<"WorkOrder"> | number
    approvedById?: IntNullableFilter<"WorkOrder"> | number | null
    companyId?: IntNullableFilter<"WorkOrder"> | number | null
    priority?: EnumPriorityNullableFilter<"WorkOrder"> | $Enums.Priority | null
    attachments?: StringNullableListFilter<"WorkOrder">
    assignedTo?: StringNullableFilter<"WorkOrder"> | string | null
    comments?: StringNullableFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkOrder"> | Date | string
  }

  export type WorkOrderOrderByWithRelationInput = {
    id?: SortOrder
    workOrderCode?: SortOrder
    productId?: SortOrder
    clientLocation?: SortOrder
    vendorOrClient?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    attachments?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workOrderCode?: string
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    productId?: IntFilter<"WorkOrder"> | number
    clientLocation?: StringFilter<"WorkOrder"> | string
    vendorOrClient?: StringFilter<"WorkOrder"> | string
    quantity?: IntFilter<"WorkOrder"> | number
    deliveryDate?: DateTimeFilter<"WorkOrder"> | Date | string
    description?: StringNullableFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    createdById?: IntFilter<"WorkOrder"> | number
    approvedById?: IntNullableFilter<"WorkOrder"> | number | null
    companyId?: IntNullableFilter<"WorkOrder"> | number | null
    priority?: EnumPriorityNullableFilter<"WorkOrder"> | $Enums.Priority | null
    attachments?: StringNullableListFilter<"WorkOrder">
    assignedTo?: StringNullableFilter<"WorkOrder"> | string | null
    comments?: StringNullableFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkOrder"> | Date | string
  }, "id" | "workOrderCode">

  export type WorkOrderOrderByWithAggregationInput = {
    id?: SortOrder
    workOrderCode?: SortOrder
    productId?: SortOrder
    clientLocation?: SortOrder
    vendorOrClient?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    attachments?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkOrderCountOrderByAggregateInput
    _avg?: WorkOrderAvgOrderByAggregateInput
    _max?: WorkOrderMaxOrderByAggregateInput
    _min?: WorkOrderMinOrderByAggregateInput
    _sum?: WorkOrderSumOrderByAggregateInput
  }

  export type WorkOrderScalarWhereWithAggregatesInput = {
    AND?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    OR?: WorkOrderScalarWhereWithAggregatesInput[]
    NOT?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkOrder"> | number
    workOrderCode?: StringWithAggregatesFilter<"WorkOrder"> | string
    productId?: IntWithAggregatesFilter<"WorkOrder"> | number
    clientLocation?: StringWithAggregatesFilter<"WorkOrder"> | string
    vendorOrClient?: StringWithAggregatesFilter<"WorkOrder"> | string
    quantity?: IntWithAggregatesFilter<"WorkOrder"> | number
    deliveryDate?: DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
    description?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusWithAggregatesFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    createdById?: IntWithAggregatesFilter<"WorkOrder"> | number
    approvedById?: IntNullableWithAggregatesFilter<"WorkOrder"> | number | null
    companyId?: IntNullableWithAggregatesFilter<"WorkOrder"> | number | null
    priority?: EnumPriorityNullableWithAggregatesFilter<"WorkOrder"> | $Enums.Priority | null
    attachments?: StringNullableListFilter<"WorkOrder">
    assignedTo?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    comments?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    poNumber?: StringFilter<"PurchaseOrder"> | string
    workOrderId?: IntFilter<"PurchaseOrder"> | number
    productId?: IntFilter<"PurchaseOrder"> | number
    ingredientId?: IntFilter<"PurchaseOrder"> | number
    quantity?: IntFilter<"PurchaseOrder"> | number
    supplierId?: IntFilter<"PurchaseOrder"> | number
    deliveryDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    comments?: StringNullableFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    poNumber?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
    deliveryDate?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    poNumber?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    workOrderId?: IntFilter<"PurchaseOrder"> | number
    productId?: IntFilter<"PurchaseOrder"> | number
    ingredientId?: IntFilter<"PurchaseOrder"> | number
    quantity?: IntFilter<"PurchaseOrder"> | number
    supplierId?: IntFilter<"PurchaseOrder"> | number
    deliveryDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    comments?: StringNullableFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
  }, "id" | "poNumber">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    poNumber?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
    deliveryDate?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    poNumber?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    workOrderId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    productId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    ingredientId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    quantity?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    supplierId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    deliveryDate?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    comments?: StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
  }

  export type ProductionPlanWhereInput = {
    AND?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    OR?: ProductionPlanWhereInput[]
    NOT?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    id?: IntFilter<"ProductionPlan"> | number
    workOrderId?: IntFilter<"ProductionPlan"> | number
    lineNumber?: IntFilter<"ProductionPlan"> | number
    startTime?: DateTimeFilter<"ProductionPlan"> | Date | string
    endTime?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    hiskRiskLabour?: IntFilter<"ProductionPlan"> | number
    lowRiskLabour?: IntFilter<"ProductionPlan"> | number
    packLabour?: IntFilter<"ProductionPlan"> | number
    targetPerMin?: IntFilter<"ProductionPlan"> | number
    actualProduced?: IntNullableFilter<"ProductionPlan"> | number | null
    issues?: StringNullableFilter<"ProductionPlan"> | string | null
  }

  export type ProductionPlanOrderByWithRelationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
  }

  export type ProductionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    OR?: ProductionPlanWhereInput[]
    NOT?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    workOrderId?: IntFilter<"ProductionPlan"> | number
    lineNumber?: IntFilter<"ProductionPlan"> | number
    startTime?: DateTimeFilter<"ProductionPlan"> | Date | string
    endTime?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    hiskRiskLabour?: IntFilter<"ProductionPlan"> | number
    lowRiskLabour?: IntFilter<"ProductionPlan"> | number
    packLabour?: IntFilter<"ProductionPlan"> | number
    targetPerMin?: IntFilter<"ProductionPlan"> | number
    actualProduced?: IntNullableFilter<"ProductionPlan"> | number | null
    issues?: StringNullableFilter<"ProductionPlan"> | string | null
  }, "id">

  export type ProductionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    _count?: ProductionPlanCountOrderByAggregateInput
    _avg?: ProductionPlanAvgOrderByAggregateInput
    _max?: ProductionPlanMaxOrderByAggregateInput
    _min?: ProductionPlanMinOrderByAggregateInput
    _sum?: ProductionPlanSumOrderByAggregateInput
  }

  export type ProductionPlanScalarWhereWithAggregatesInput = {
    AND?: ProductionPlanScalarWhereWithAggregatesInput | ProductionPlanScalarWhereWithAggregatesInput[]
    OR?: ProductionPlanScalarWhereWithAggregatesInput[]
    NOT?: ProductionPlanScalarWhereWithAggregatesInput | ProductionPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductionPlan"> | number
    workOrderId?: IntWithAggregatesFilter<"ProductionPlan"> | number
    lineNumber?: IntWithAggregatesFilter<"ProductionPlan"> | number
    startTime?: DateTimeWithAggregatesFilter<"ProductionPlan"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"ProductionPlan"> | Date | string | null
    hiskRiskLabour?: IntWithAggregatesFilter<"ProductionPlan"> | number
    lowRiskLabour?: IntWithAggregatesFilter<"ProductionPlan"> | number
    packLabour?: IntWithAggregatesFilter<"ProductionPlan"> | number
    targetPerMin?: IntWithAggregatesFilter<"ProductionPlan"> | number
    actualProduced?: IntNullableWithAggregatesFilter<"ProductionPlan"> | number | null
    issues?: StringNullableWithAggregatesFilter<"ProductionPlan"> | string | null
  }

  export type ProductionIssueWhereInput = {
    AND?: ProductionIssueWhereInput | ProductionIssueWhereInput[]
    OR?: ProductionIssueWhereInput[]
    NOT?: ProductionIssueWhereInput | ProductionIssueWhereInput[]
    id?: IntFilter<"ProductionIssue"> | number
    planId?: IntFilter<"ProductionIssue"> | number
    issueType?: EnumIssueTypeFilter<"ProductionIssue"> | $Enums.IssueType
    description?: StringFilter<"ProductionIssue"> | string
    occurredAt?: DateTimeFilter<"ProductionIssue"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"ProductionIssue"> | Date | string | null
  }

  export type ProductionIssueOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    issueType?: SortOrder
    description?: SortOrder
    occurredAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
  }

  export type ProductionIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductionIssueWhereInput | ProductionIssueWhereInput[]
    OR?: ProductionIssueWhereInput[]
    NOT?: ProductionIssueWhereInput | ProductionIssueWhereInput[]
    planId?: IntFilter<"ProductionIssue"> | number
    issueType?: EnumIssueTypeFilter<"ProductionIssue"> | $Enums.IssueType
    description?: StringFilter<"ProductionIssue"> | string
    occurredAt?: DateTimeFilter<"ProductionIssue"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"ProductionIssue"> | Date | string | null
  }, "id">

  export type ProductionIssueOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    issueType?: SortOrder
    description?: SortOrder
    occurredAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: ProductionIssueCountOrderByAggregateInput
    _avg?: ProductionIssueAvgOrderByAggregateInput
    _max?: ProductionIssueMaxOrderByAggregateInput
    _min?: ProductionIssueMinOrderByAggregateInput
    _sum?: ProductionIssueSumOrderByAggregateInput
  }

  export type ProductionIssueScalarWhereWithAggregatesInput = {
    AND?: ProductionIssueScalarWhereWithAggregatesInput | ProductionIssueScalarWhereWithAggregatesInput[]
    OR?: ProductionIssueScalarWhereWithAggregatesInput[]
    NOT?: ProductionIssueScalarWhereWithAggregatesInput | ProductionIssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductionIssue"> | number
    planId?: IntWithAggregatesFilter<"ProductionIssue"> | number
    issueType?: EnumIssueTypeWithAggregatesFilter<"ProductionIssue"> | $Enums.IssueType
    description?: StringWithAggregatesFilter<"ProductionIssue"> | string
    occurredAt?: DateTimeWithAggregatesFilter<"ProductionIssue"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"ProductionIssue"> | Date | string | null
  }

  export type WorkOrderCreateInput = {
    workOrderCode: string
    productId: number
    clientLocation: string
    vendorOrClient: string
    quantity: number
    deliveryDate: Date | string
    description?: string | null
    status?: $Enums.WorkOrderStatus
    createdById: number
    approvedById?: number | null
    companyId?: number | null
    priority?: $Enums.Priority | null
    attachments?: WorkOrderCreateattachmentsInput | string[]
    assignedTo?: string | null
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderUncheckedCreateInput = {
    id?: number
    workOrderCode: string
    productId: number
    clientLocation: string
    vendorOrClient: string
    quantity: number
    deliveryDate: Date | string
    description?: string | null
    status?: $Enums.WorkOrderStatus
    createdById: number
    approvedById?: number | null
    companyId?: number | null
    priority?: $Enums.Priority | null
    attachments?: WorkOrderCreateattachmentsInput | string[]
    assignedTo?: string | null
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderUpdateInput = {
    workOrderCode?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    clientLocation?: StringFieldUpdateOperationsInput | string
    vendorOrClient?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    createdById?: IntFieldUpdateOperationsInput | number
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    attachments?: WorkOrderUpdateattachmentsInput | string[]
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workOrderCode?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    clientLocation?: StringFieldUpdateOperationsInput | string
    vendorOrClient?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    createdById?: IntFieldUpdateOperationsInput | number
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    attachments?: WorkOrderUpdateattachmentsInput | string[]
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderCreateManyInput = {
    id?: number
    workOrderCode: string
    productId: number
    clientLocation: string
    vendorOrClient: string
    quantity: number
    deliveryDate: Date | string
    description?: string | null
    status?: $Enums.WorkOrderStatus
    createdById: number
    approvedById?: number | null
    companyId?: number | null
    priority?: $Enums.Priority | null
    attachments?: WorkOrderCreateattachmentsInput | string[]
    assignedTo?: string | null
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderUpdateManyMutationInput = {
    workOrderCode?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    clientLocation?: StringFieldUpdateOperationsInput | string
    vendorOrClient?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    createdById?: IntFieldUpdateOperationsInput | number
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    attachments?: WorkOrderUpdateattachmentsInput | string[]
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workOrderCode?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    clientLocation?: StringFieldUpdateOperationsInput | string
    vendorOrClient?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    createdById?: IntFieldUpdateOperationsInput | number
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    attachments?: WorkOrderUpdateattachmentsInput | string[]
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    poNumber: string
    workOrderId: number
    productId: number
    ingredientId: number
    quantity: number
    supplierId: number
    deliveryDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    poNumber: string
    workOrderId: number
    productId: number
    ingredientId: number
    quantity: number
    supplierId: number
    deliveryDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUpdateInput = {
    poNumber?: StringFieldUpdateOperationsInput | string
    workOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    poNumber?: StringFieldUpdateOperationsInput | string
    workOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    poNumber: string
    workOrderId: number
    productId: number
    ingredientId: number
    quantity: number
    supplierId: number
    deliveryDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    poNumber?: StringFieldUpdateOperationsInput | string
    workOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    poNumber?: StringFieldUpdateOperationsInput | string
    workOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionPlanCreateInput = {
    workOrderId: number
    lineNumber: number
    startTime: Date | string
    endTime?: Date | string | null
    hiskRiskLabour: number
    lowRiskLabour: number
    packLabour: number
    targetPerMin: number
    actualProduced?: number | null
    issues?: string | null
  }

  export type ProductionPlanUncheckedCreateInput = {
    id?: number
    workOrderId: number
    lineNumber: number
    startTime: Date | string
    endTime?: Date | string | null
    hiskRiskLabour: number
    lowRiskLabour: number
    packLabour: number
    targetPerMin: number
    actualProduced?: number | null
    issues?: string | null
  }

  export type ProductionPlanUpdateInput = {
    workOrderId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hiskRiskLabour?: IntFieldUpdateOperationsInput | number
    lowRiskLabour?: IntFieldUpdateOperationsInput | number
    packLabour?: IntFieldUpdateOperationsInput | number
    targetPerMin?: IntFieldUpdateOperationsInput | number
    actualProduced?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workOrderId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hiskRiskLabour?: IntFieldUpdateOperationsInput | number
    lowRiskLabour?: IntFieldUpdateOperationsInput | number
    packLabour?: IntFieldUpdateOperationsInput | number
    targetPerMin?: IntFieldUpdateOperationsInput | number
    actualProduced?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionPlanCreateManyInput = {
    id?: number
    workOrderId: number
    lineNumber: number
    startTime: Date | string
    endTime?: Date | string | null
    hiskRiskLabour: number
    lowRiskLabour: number
    packLabour: number
    targetPerMin: number
    actualProduced?: number | null
    issues?: string | null
  }

  export type ProductionPlanUpdateManyMutationInput = {
    workOrderId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hiskRiskLabour?: IntFieldUpdateOperationsInput | number
    lowRiskLabour?: IntFieldUpdateOperationsInput | number
    packLabour?: IntFieldUpdateOperationsInput | number
    targetPerMin?: IntFieldUpdateOperationsInput | number
    actualProduced?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workOrderId?: IntFieldUpdateOperationsInput | number
    lineNumber?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hiskRiskLabour?: IntFieldUpdateOperationsInput | number
    lowRiskLabour?: IntFieldUpdateOperationsInput | number
    packLabour?: IntFieldUpdateOperationsInput | number
    targetPerMin?: IntFieldUpdateOperationsInput | number
    actualProduced?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionIssueCreateInput = {
    planId: number
    issueType: $Enums.IssueType
    description: string
    occurredAt: Date | string
    resolvedAt?: Date | string | null
  }

  export type ProductionIssueUncheckedCreateInput = {
    id?: number
    planId: number
    issueType: $Enums.IssueType
    description: string
    occurredAt: Date | string
    resolvedAt?: Date | string | null
  }

  export type ProductionIssueUpdateInput = {
    planId?: IntFieldUpdateOperationsInput | number
    issueType?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionIssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    issueType?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionIssueCreateManyInput = {
    id?: number
    planId: number
    issueType: $Enums.IssueType
    description: string
    occurredAt: Date | string
    resolvedAt?: Date | string | null
  }

  export type ProductionIssueUpdateManyMutationInput = {
    planId?: IntFieldUpdateOperationsInput | number
    issueType?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionIssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    issueType?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
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

  export type EnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkOrderCountOrderByAggregateInput = {
    id?: SortOrder
    workOrderCode?: SortOrder
    productId?: SortOrder
    clientLocation?: SortOrder
    vendorOrClient?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrder
    companyId?: SortOrder
    priority?: SortOrder
    attachments?: SortOrder
    assignedTo?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrder
    companyId?: SortOrder
  }

  export type WorkOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    workOrderCode?: SortOrder
    productId?: SortOrder
    clientLocation?: SortOrder
    vendorOrClient?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrder
    companyId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderMinOrderByAggregateInput = {
    id?: SortOrder
    workOrderCode?: SortOrder
    productId?: SortOrder
    clientLocation?: SortOrder
    vendorOrClient?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrder
    companyId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdById?: SortOrder
    approvedById?: SortOrder
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

  export type EnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
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

  export type EnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type EnumPurchaseOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    poNumber?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
    deliveryDate?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    poNumber?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
    deliveryDate?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    poNumber?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
    deliveryDate?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    supplierId?: SortOrder
  }

  export type EnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
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

  export type ProductionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrder
    issues?: SortOrder
  }

  export type ProductionPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrder
  }

  export type ProductionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrder
    issues?: SortOrder
  }

  export type ProductionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrder
    issues?: SortOrder
  }

  export type ProductionPlanSumOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    lineNumber?: SortOrder
    hiskRiskLabour?: SortOrder
    lowRiskLabour?: SortOrder
    packLabour?: SortOrder
    targetPerMin?: SortOrder
    actualProduced?: SortOrder
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

  export type EnumIssueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeFilter<$PrismaModel> | $Enums.IssueType
  }

  export type ProductionIssueCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    issueType?: SortOrder
    description?: SortOrder
    occurredAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ProductionIssueAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
  }

  export type ProductionIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    issueType?: SortOrder
    description?: SortOrder
    occurredAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ProductionIssueMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    issueType?: SortOrder
    description?: SortOrder
    occurredAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ProductionIssueSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
  }

  export type EnumIssueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel> | $Enums.IssueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeFilter<$PrismaModel>
  }

  export type WorkOrderCreateattachmentsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumWorkOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkOrderStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority | null
  }

  export type WorkOrderUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPurchaseOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseOrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumIssueTypeFieldUpdateOperationsInput = {
    set?: $Enums.IssueType
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

  export type NestedEnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
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

  export type NestedEnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
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

  export type NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
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

  export type NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
  }

  export type NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseOrderStatus[] | ListEnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
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

  export type NestedEnumIssueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeFilter<$PrismaModel> | $Enums.IssueType
  }

  export type NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel> | $Enums.IssueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeFilter<$PrismaModel>
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