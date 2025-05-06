
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Feirante
 * 
 */
export type Feirante = $Result.DefaultSelection<Prisma.$FeirantePayload>
/**
 * Model Banco
 * 
 */
export type Banco = $Result.DefaultSelection<Prisma.$BancoPayload>
/**
 * Model EnderecoBanco
 * 
 */
export type EnderecoBanco = $Result.DefaultSelection<Prisma.$EnderecoBancoPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  CLIENTE: 'CLIENTE',
  FEIRANTE: 'FEIRANTE'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const Opcs: {
  CAMISA: 'CAMISA',
  CALCA: 'CALCA',
  SHORT: 'SHORT',
  ACESSORIOS: 'ACESSORIOS',
  TENIS: 'TENIS',
  BRINQUEDO: 'BRINQUEDO',
  ELETRONICOS: 'ELETRONICOS',
  SALTO: 'SALTO',
  JEANS: 'JEANS',
  INFANTIL: 'INFANTIL',
  BOLSA: 'BOLSA',
  NATUREZA: 'NATUREZA',
  UTENSILIOS: 'UTENSILIOS',
  COMIDA: 'COMIDA'
};

export type Opcs = (typeof Opcs)[keyof typeof Opcs]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type Opcs = $Enums.Opcs

export const Opcs: typeof $Enums.Opcs

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feirante`: Exposes CRUD operations for the **Feirante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feirantes
    * const feirantes = await prisma.feirante.findMany()
    * ```
    */
  get feirante(): Prisma.FeiranteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banco`: Exposes CRUD operations for the **Banco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bancos
    * const bancos = await prisma.banco.findMany()
    * ```
    */
  get banco(): Prisma.BancoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enderecoBanco`: Exposes CRUD operations for the **EnderecoBanco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnderecoBancos
    * const enderecoBancos = await prisma.enderecoBanco.findMany()
    * ```
    */
  get enderecoBanco(): Prisma.EnderecoBancoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Feirante: 'Feirante',
    Banco: 'Banco',
    EnderecoBanco: 'EnderecoBanco',
    Favorito: 'Favorito',
    Avaliacao: 'Avaliacao'
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
      modelProps: "usuario" | "cliente" | "feirante" | "banco" | "enderecoBanco" | "favorito" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Feirante: {
        payload: Prisma.$FeirantePayload<ExtArgs>
        fields: Prisma.FeiranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeiranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeiranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          findFirst: {
            args: Prisma.FeiranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeiranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          findMany: {
            args: Prisma.FeiranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>[]
          }
          create: {
            args: Prisma.FeiranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          createMany: {
            args: Prisma.FeiranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeiranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>[]
          }
          delete: {
            args: Prisma.FeiranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          update: {
            args: Prisma.FeiranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          deleteMany: {
            args: Prisma.FeiranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeiranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeiranteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>[]
          }
          upsert: {
            args: Prisma.FeiranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeirantePayload>
          }
          aggregate: {
            args: Prisma.FeiranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeirante>
          }
          groupBy: {
            args: Prisma.FeiranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeiranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeiranteCountArgs<ExtArgs>
            result: $Utils.Optional<FeiranteCountAggregateOutputType> | number
          }
        }
      }
      Banco: {
        payload: Prisma.$BancoPayload<ExtArgs>
        fields: Prisma.BancoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BancoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BancoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findFirst: {
            args: Prisma.BancoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BancoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findMany: {
            args: Prisma.BancoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          create: {
            args: Prisma.BancoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          createMany: {
            args: Prisma.BancoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BancoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          delete: {
            args: Prisma.BancoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          update: {
            args: Prisma.BancoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          deleteMany: {
            args: Prisma.BancoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BancoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BancoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          upsert: {
            args: Prisma.BancoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          aggregate: {
            args: Prisma.BancoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanco>
          }
          groupBy: {
            args: Prisma.BancoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BancoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BancoCountArgs<ExtArgs>
            result: $Utils.Optional<BancoCountAggregateOutputType> | number
          }
        }
      }
      EnderecoBanco: {
        payload: Prisma.$EnderecoBancoPayload<ExtArgs>
        fields: Prisma.EnderecoBancoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoBancoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoBancoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoBancoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoBancoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          findMany: {
            args: Prisma.EnderecoBancoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>[]
          }
          create: {
            args: Prisma.EnderecoBancoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          createMany: {
            args: Prisma.EnderecoBancoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoBancoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoBancoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          update: {
            args: Prisma.EnderecoBancoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoBancoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoBancoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoBancoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoBancoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoBancoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoBancoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnderecoBanco>
          }
          groupBy: {
            args: Prisma.EnderecoBancoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoBancoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoBancoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoBancoCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
    feirante?: FeiranteOmit
    banco?: BancoOmit
    enderecoBanco?: EnderecoBancoOmit
    favorito?: FavoritoOmit
    avaliacao?: AvaliacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    favoritos: number
    avaliacoes: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | ClienteCountOutputTypeCountFavoritosArgs
    avaliacoes?: boolean | ClienteCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type FeiranteCountOutputType
   */

  export type FeiranteCountOutputType = {
    bancos: number
  }

  export type FeiranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bancos?: boolean | FeiranteCountOutputTypeCountBancosArgs
  }

  // Custom InputTypes
  /**
   * FeiranteCountOutputType without action
   */
  export type FeiranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeiranteCountOutputType
     */
    select?: FeiranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeiranteCountOutputType without action
   */
  export type FeiranteCountOutputTypeCountBancosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancoWhereInput
  }


  /**
   * Count Type BancoCountOutputType
   */

  export type BancoCountOutputType = {
    favoritos: number
    avaliacoes: number
  }

  export type BancoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | BancoCountOutputTypeCountFavoritosArgs
    avaliacoes?: boolean | BancoCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoCountOutputType
     */
    select?: BancoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    tipo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    cliente?: boolean | Usuario$clienteArgs<ExtArgs>
    feirante?: boolean | Usuario$feiranteArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "tipo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Usuario$clienteArgs<ExtArgs>
    feirante?: boolean | Usuario$feiranteArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
      feirante: Prisma.$FeirantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      senha: string
      tipo: $Enums.TipoUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends Usuario$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feirante<T extends Usuario$feiranteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$feiranteArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.cliente
   */
  export type Usuario$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Usuario.feirante
   */
  export type Usuario$feiranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    where?: FeiranteWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    dataNascimento: Date | null
    genero: string | null
    telefone: string | null
    usuarioId: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    dataNascimento: Date | null
    genero: string | null
    telefone: string | null
    usuarioId: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    dataNascimento: number
    genero: number
    telefone: number
    interesses: number
    usuarioId: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    genero?: true
    telefone?: true
    usuarioId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    genero?: true
    telefone?: true
    usuarioId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    genero?: true
    telefone?: true
    interesses?: true
    usuarioId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    dataNascimento: Date
    genero: string
    telefone: string | null
    interesses: $Enums.Opcs[]
    usuarioId: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    genero?: boolean
    telefone?: boolean
    interesses?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    favoritos?: boolean | Cliente$favoritosArgs<ExtArgs>
    avaliacoes?: boolean | Cliente$avaliacoesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    genero?: boolean
    telefone?: boolean
    interesses?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    genero?: boolean
    telefone?: boolean
    interesses?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    genero?: boolean
    telefone?: boolean
    interesses?: boolean
    usuarioId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "dataNascimento" | "genero" | "telefone" | "interesses" | "usuarioId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    favoritos?: boolean | Cliente$favoritosArgs<ExtArgs>
    avaliacoes?: boolean | Cliente$avaliacoesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      dataNascimento: Date
      genero: string
      telefone: string | null
      interesses: $Enums.Opcs[]
      usuarioId: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoritos<T extends Cliente$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Cliente$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly dataNascimento: FieldRef<"Cliente", 'DateTime'>
    readonly genero: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly interesses: FieldRef<"Cliente", 'Opcs[]'>
    readonly usuarioId: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.favoritos
   */
  export type Cliente$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Cliente.avaliacoes
   */
  export type Cliente$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Feirante
   */

  export type AggregateFeirante = {
    _count: FeiranteCountAggregateOutputType | null
    _min: FeiranteMinAggregateOutputType | null
    _max: FeiranteMaxAggregateOutputType | null
  }

  export type FeiranteMinAggregateOutputType = {
    id: string | null
    nomeProprietario: string | null
    cadastroAssosiacao: string | null
    cpfCnpj: string | null
    telefone: string | null
    linkWhatsapp: string | null
    linkInstagram: string | null
    linkFacebook: string | null
    usuarioId: string | null
  }

  export type FeiranteMaxAggregateOutputType = {
    id: string | null
    nomeProprietario: string | null
    cadastroAssosiacao: string | null
    cpfCnpj: string | null
    telefone: string | null
    linkWhatsapp: string | null
    linkInstagram: string | null
    linkFacebook: string | null
    usuarioId: string | null
  }

  export type FeiranteCountAggregateOutputType = {
    id: number
    nomeProprietario: number
    cadastroAssosiacao: number
    cpfCnpj: number
    telefone: number
    linkWhatsapp: number
    linkInstagram: number
    linkFacebook: number
    usuarioId: number
    _all: number
  }


  export type FeiranteMinAggregateInputType = {
    id?: true
    nomeProprietario?: true
    cadastroAssosiacao?: true
    cpfCnpj?: true
    telefone?: true
    linkWhatsapp?: true
    linkInstagram?: true
    linkFacebook?: true
    usuarioId?: true
  }

  export type FeiranteMaxAggregateInputType = {
    id?: true
    nomeProprietario?: true
    cadastroAssosiacao?: true
    cpfCnpj?: true
    telefone?: true
    linkWhatsapp?: true
    linkInstagram?: true
    linkFacebook?: true
    usuarioId?: true
  }

  export type FeiranteCountAggregateInputType = {
    id?: true
    nomeProprietario?: true
    cadastroAssosiacao?: true
    cpfCnpj?: true
    telefone?: true
    linkWhatsapp?: true
    linkInstagram?: true
    linkFacebook?: true
    usuarioId?: true
    _all?: true
  }

  export type FeiranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feirante to aggregate.
     */
    where?: FeiranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feirantes to fetch.
     */
    orderBy?: FeiranteOrderByWithRelationInput | FeiranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeiranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feirantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feirantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feirantes
    **/
    _count?: true | FeiranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeiranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeiranteMaxAggregateInputType
  }

  export type GetFeiranteAggregateType<T extends FeiranteAggregateArgs> = {
        [P in keyof T & keyof AggregateFeirante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeirante[P]>
      : GetScalarType<T[P], AggregateFeirante[P]>
  }




  export type FeiranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeiranteWhereInput
    orderBy?: FeiranteOrderByWithAggregationInput | FeiranteOrderByWithAggregationInput[]
    by: FeiranteScalarFieldEnum[] | FeiranteScalarFieldEnum
    having?: FeiranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeiranteCountAggregateInputType | true
    _min?: FeiranteMinAggregateInputType
    _max?: FeiranteMaxAggregateInputType
  }

  export type FeiranteGroupByOutputType = {
    id: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone: string | null
    linkWhatsapp: string | null
    linkInstagram: string | null
    linkFacebook: string | null
    usuarioId: string
    _count: FeiranteCountAggregateOutputType | null
    _min: FeiranteMinAggregateOutputType | null
    _max: FeiranteMaxAggregateOutputType | null
  }

  type GetFeiranteGroupByPayload<T extends FeiranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeiranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeiranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeiranteGroupByOutputType[P]>
            : GetScalarType<T[P], FeiranteGroupByOutputType[P]>
        }
      >
    >


  export type FeiranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProprietario?: boolean
    cadastroAssosiacao?: boolean
    cpfCnpj?: boolean
    telefone?: boolean
    linkWhatsapp?: boolean
    linkInstagram?: boolean
    linkFacebook?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    bancos?: boolean | Feirante$bancosArgs<ExtArgs>
    _count?: boolean | FeiranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feirante"]>

  export type FeiranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProprietario?: boolean
    cadastroAssosiacao?: boolean
    cpfCnpj?: boolean
    telefone?: boolean
    linkWhatsapp?: boolean
    linkInstagram?: boolean
    linkFacebook?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feirante"]>

  export type FeiranteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProprietario?: boolean
    cadastroAssosiacao?: boolean
    cpfCnpj?: boolean
    telefone?: boolean
    linkWhatsapp?: boolean
    linkInstagram?: boolean
    linkFacebook?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feirante"]>

  export type FeiranteSelectScalar = {
    id?: boolean
    nomeProprietario?: boolean
    cadastroAssosiacao?: boolean
    cpfCnpj?: boolean
    telefone?: boolean
    linkWhatsapp?: boolean
    linkInstagram?: boolean
    linkFacebook?: boolean
    usuarioId?: boolean
  }

  export type FeiranteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeProprietario" | "cadastroAssosiacao" | "cpfCnpj" | "telefone" | "linkWhatsapp" | "linkInstagram" | "linkFacebook" | "usuarioId", ExtArgs["result"]["feirante"]>
  export type FeiranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    bancos?: boolean | Feirante$bancosArgs<ExtArgs>
    _count?: boolean | FeiranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeiranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FeiranteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FeirantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feirante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      bancos: Prisma.$BancoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeProprietario: string
      cadastroAssosiacao: string
      cpfCnpj: string
      telefone: string | null
      linkWhatsapp: string | null
      linkInstagram: string | null
      linkFacebook: string | null
      usuarioId: string
    }, ExtArgs["result"]["feirante"]>
    composites: {}
  }

  type FeiranteGetPayload<S extends boolean | null | undefined | FeiranteDefaultArgs> = $Result.GetResult<Prisma.$FeirantePayload, S>

  type FeiranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeiranteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeiranteCountAggregateInputType | true
    }

  export interface FeiranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feirante'], meta: { name: 'Feirante' } }
    /**
     * Find zero or one Feirante that matches the filter.
     * @param {FeiranteFindUniqueArgs} args - Arguments to find a Feirante
     * @example
     * // Get one Feirante
     * const feirante = await prisma.feirante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeiranteFindUniqueArgs>(args: SelectSubset<T, FeiranteFindUniqueArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feirante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeiranteFindUniqueOrThrowArgs} args - Arguments to find a Feirante
     * @example
     * // Get one Feirante
     * const feirante = await prisma.feirante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeiranteFindUniqueOrThrowArgs>(args: SelectSubset<T, FeiranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feirante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteFindFirstArgs} args - Arguments to find a Feirante
     * @example
     * // Get one Feirante
     * const feirante = await prisma.feirante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeiranteFindFirstArgs>(args?: SelectSubset<T, FeiranteFindFirstArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feirante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteFindFirstOrThrowArgs} args - Arguments to find a Feirante
     * @example
     * // Get one Feirante
     * const feirante = await prisma.feirante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeiranteFindFirstOrThrowArgs>(args?: SelectSubset<T, FeiranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feirantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feirantes
     * const feirantes = await prisma.feirante.findMany()
     * 
     * // Get first 10 Feirantes
     * const feirantes = await prisma.feirante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feiranteWithIdOnly = await prisma.feirante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeiranteFindManyArgs>(args?: SelectSubset<T, FeiranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feirante.
     * @param {FeiranteCreateArgs} args - Arguments to create a Feirante.
     * @example
     * // Create one Feirante
     * const Feirante = await prisma.feirante.create({
     *   data: {
     *     // ... data to create a Feirante
     *   }
     * })
     * 
     */
    create<T extends FeiranteCreateArgs>(args: SelectSubset<T, FeiranteCreateArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feirantes.
     * @param {FeiranteCreateManyArgs} args - Arguments to create many Feirantes.
     * @example
     * // Create many Feirantes
     * const feirante = await prisma.feirante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeiranteCreateManyArgs>(args?: SelectSubset<T, FeiranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feirantes and returns the data saved in the database.
     * @param {FeiranteCreateManyAndReturnArgs} args - Arguments to create many Feirantes.
     * @example
     * // Create many Feirantes
     * const feirante = await prisma.feirante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feirantes and only return the `id`
     * const feiranteWithIdOnly = await prisma.feirante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeiranteCreateManyAndReturnArgs>(args?: SelectSubset<T, FeiranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feirante.
     * @param {FeiranteDeleteArgs} args - Arguments to delete one Feirante.
     * @example
     * // Delete one Feirante
     * const Feirante = await prisma.feirante.delete({
     *   where: {
     *     // ... filter to delete one Feirante
     *   }
     * })
     * 
     */
    delete<T extends FeiranteDeleteArgs>(args: SelectSubset<T, FeiranteDeleteArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feirante.
     * @param {FeiranteUpdateArgs} args - Arguments to update one Feirante.
     * @example
     * // Update one Feirante
     * const feirante = await prisma.feirante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeiranteUpdateArgs>(args: SelectSubset<T, FeiranteUpdateArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feirantes.
     * @param {FeiranteDeleteManyArgs} args - Arguments to filter Feirantes to delete.
     * @example
     * // Delete a few Feirantes
     * const { count } = await prisma.feirante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeiranteDeleteManyArgs>(args?: SelectSubset<T, FeiranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feirantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feirantes
     * const feirante = await prisma.feirante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeiranteUpdateManyArgs>(args: SelectSubset<T, FeiranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feirantes and returns the data updated in the database.
     * @param {FeiranteUpdateManyAndReturnArgs} args - Arguments to update many Feirantes.
     * @example
     * // Update many Feirantes
     * const feirante = await prisma.feirante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feirantes and only return the `id`
     * const feiranteWithIdOnly = await prisma.feirante.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeiranteUpdateManyAndReturnArgs>(args: SelectSubset<T, FeiranteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feirante.
     * @param {FeiranteUpsertArgs} args - Arguments to update or create a Feirante.
     * @example
     * // Update or create a Feirante
     * const feirante = await prisma.feirante.upsert({
     *   create: {
     *     // ... data to create a Feirante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feirante we want to update
     *   }
     * })
     */
    upsert<T extends FeiranteUpsertArgs>(args: SelectSubset<T, FeiranteUpsertArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feirantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteCountArgs} args - Arguments to filter Feirantes to count.
     * @example
     * // Count the number of Feirantes
     * const count = await prisma.feirante.count({
     *   where: {
     *     // ... the filter for the Feirantes we want to count
     *   }
     * })
    **/
    count<T extends FeiranteCountArgs>(
      args?: Subset<T, FeiranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeiranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feirante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeiranteAggregateArgs>(args: Subset<T, FeiranteAggregateArgs>): Prisma.PrismaPromise<GetFeiranteAggregateType<T>>

    /**
     * Group by Feirante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeiranteGroupByArgs} args - Group by arguments.
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
      T extends FeiranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeiranteGroupByArgs['orderBy'] }
        : { orderBy?: FeiranteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeiranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeiranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feirante model
   */
  readonly fields: FeiranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feirante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeiranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bancos<T extends Feirante$bancosArgs<ExtArgs> = {}>(args?: Subset<T, Feirante$bancosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Feirante model
   */
  interface FeiranteFieldRefs {
    readonly id: FieldRef<"Feirante", 'String'>
    readonly nomeProprietario: FieldRef<"Feirante", 'String'>
    readonly cadastroAssosiacao: FieldRef<"Feirante", 'String'>
    readonly cpfCnpj: FieldRef<"Feirante", 'String'>
    readonly telefone: FieldRef<"Feirante", 'String'>
    readonly linkWhatsapp: FieldRef<"Feirante", 'String'>
    readonly linkInstagram: FieldRef<"Feirante", 'String'>
    readonly linkFacebook: FieldRef<"Feirante", 'String'>
    readonly usuarioId: FieldRef<"Feirante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feirante findUnique
   */
  export type FeiranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter, which Feirante to fetch.
     */
    where: FeiranteWhereUniqueInput
  }

  /**
   * Feirante findUniqueOrThrow
   */
  export type FeiranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter, which Feirante to fetch.
     */
    where: FeiranteWhereUniqueInput
  }

  /**
   * Feirante findFirst
   */
  export type FeiranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter, which Feirante to fetch.
     */
    where?: FeiranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feirantes to fetch.
     */
    orderBy?: FeiranteOrderByWithRelationInput | FeiranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feirantes.
     */
    cursor?: FeiranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feirantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feirantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feirantes.
     */
    distinct?: FeiranteScalarFieldEnum | FeiranteScalarFieldEnum[]
  }

  /**
   * Feirante findFirstOrThrow
   */
  export type FeiranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter, which Feirante to fetch.
     */
    where?: FeiranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feirantes to fetch.
     */
    orderBy?: FeiranteOrderByWithRelationInput | FeiranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feirantes.
     */
    cursor?: FeiranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feirantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feirantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feirantes.
     */
    distinct?: FeiranteScalarFieldEnum | FeiranteScalarFieldEnum[]
  }

  /**
   * Feirante findMany
   */
  export type FeiranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter, which Feirantes to fetch.
     */
    where?: FeiranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feirantes to fetch.
     */
    orderBy?: FeiranteOrderByWithRelationInput | FeiranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feirantes.
     */
    cursor?: FeiranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feirantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feirantes.
     */
    skip?: number
    distinct?: FeiranteScalarFieldEnum | FeiranteScalarFieldEnum[]
  }

  /**
   * Feirante create
   */
  export type FeiranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * The data needed to create a Feirante.
     */
    data: XOR<FeiranteCreateInput, FeiranteUncheckedCreateInput>
  }

  /**
   * Feirante createMany
   */
  export type FeiranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feirantes.
     */
    data: FeiranteCreateManyInput | FeiranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feirante createManyAndReturn
   */
  export type FeiranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * The data used to create many Feirantes.
     */
    data: FeiranteCreateManyInput | FeiranteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feirante update
   */
  export type FeiranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * The data needed to update a Feirante.
     */
    data: XOR<FeiranteUpdateInput, FeiranteUncheckedUpdateInput>
    /**
     * Choose, which Feirante to update.
     */
    where: FeiranteWhereUniqueInput
  }

  /**
   * Feirante updateMany
   */
  export type FeiranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feirantes.
     */
    data: XOR<FeiranteUpdateManyMutationInput, FeiranteUncheckedUpdateManyInput>
    /**
     * Filter which Feirantes to update
     */
    where?: FeiranteWhereInput
    /**
     * Limit how many Feirantes to update.
     */
    limit?: number
  }

  /**
   * Feirante updateManyAndReturn
   */
  export type FeiranteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * The data used to update Feirantes.
     */
    data: XOR<FeiranteUpdateManyMutationInput, FeiranteUncheckedUpdateManyInput>
    /**
     * Filter which Feirantes to update
     */
    where?: FeiranteWhereInput
    /**
     * Limit how many Feirantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feirante upsert
   */
  export type FeiranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * The filter to search for the Feirante to update in case it exists.
     */
    where: FeiranteWhereUniqueInput
    /**
     * In case the Feirante found by the `where` argument doesn't exist, create a new Feirante with this data.
     */
    create: XOR<FeiranteCreateInput, FeiranteUncheckedCreateInput>
    /**
     * In case the Feirante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeiranteUpdateInput, FeiranteUncheckedUpdateInput>
  }

  /**
   * Feirante delete
   */
  export type FeiranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
    /**
     * Filter which Feirante to delete.
     */
    where: FeiranteWhereUniqueInput
  }

  /**
   * Feirante deleteMany
   */
  export type FeiranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feirantes to delete
     */
    where?: FeiranteWhereInput
    /**
     * Limit how many Feirantes to delete.
     */
    limit?: number
  }

  /**
   * Feirante.bancos
   */
  export type Feirante$bancosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    where?: BancoWhereInput
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    cursor?: BancoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Feirante without action
   */
  export type FeiranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feirante
     */
    select?: FeiranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feirante
     */
    omit?: FeiranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeiranteInclude<ExtArgs> | null
  }


  /**
   * Model Banco
   */

  export type AggregateBanco = {
    _count: BancoCountAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  export type BancoMinAggregateOutputType = {
    id: string | null
    nomeMarca: string | null
    foto: string | null
    horario: string | null
    descricao: string | null
    enderecoId: string | null
    feiranteId: string | null
  }

  export type BancoMaxAggregateOutputType = {
    id: string | null
    nomeMarca: string | null
    foto: string | null
    horario: string | null
    descricao: string | null
    enderecoId: string | null
    feiranteId: string | null
  }

  export type BancoCountAggregateOutputType = {
    id: number
    nomeMarca: number
    foto: number
    horario: number
    descricao: number
    tipoProdutos: number
    enderecoId: number
    feiranteId: number
    _all: number
  }


  export type BancoMinAggregateInputType = {
    id?: true
    nomeMarca?: true
    foto?: true
    horario?: true
    descricao?: true
    enderecoId?: true
    feiranteId?: true
  }

  export type BancoMaxAggregateInputType = {
    id?: true
    nomeMarca?: true
    foto?: true
    horario?: true
    descricao?: true
    enderecoId?: true
    feiranteId?: true
  }

  export type BancoCountAggregateInputType = {
    id?: true
    nomeMarca?: true
    foto?: true
    horario?: true
    descricao?: true
    tipoProdutos?: true
    enderecoId?: true
    feiranteId?: true
    _all?: true
  }

  export type BancoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banco to aggregate.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bancos
    **/
    _count?: true | BancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BancoMaxAggregateInputType
  }

  export type GetBancoAggregateType<T extends BancoAggregateArgs> = {
        [P in keyof T & keyof AggregateBanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanco[P]>
      : GetScalarType<T[P], AggregateBanco[P]>
  }




  export type BancoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancoWhereInput
    orderBy?: BancoOrderByWithAggregationInput | BancoOrderByWithAggregationInput[]
    by: BancoScalarFieldEnum[] | BancoScalarFieldEnum
    having?: BancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BancoCountAggregateInputType | true
    _min?: BancoMinAggregateInputType
    _max?: BancoMaxAggregateInputType
  }

  export type BancoGroupByOutputType = {
    id: string
    nomeMarca: string
    foto: string | null
    horario: string
    descricao: string
    tipoProdutos: $Enums.Opcs[]
    enderecoId: string | null
    feiranteId: string
    _count: BancoCountAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  type GetBancoGroupByPayload<T extends BancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BancoGroupByOutputType[P]>
            : GetScalarType<T[P], BancoGroupByOutputType[P]>
        }
      >
    >


  export type BancoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMarca?: boolean
    foto?: boolean
    horario?: boolean
    descricao?: boolean
    tipoProdutos?: boolean
    enderecoId?: boolean
    feiranteId?: boolean
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
    favoritos?: boolean | Banco$favoritosArgs<ExtArgs>
    avaliacoes?: boolean | Banco$avaliacoesArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMarca?: boolean
    foto?: boolean
    horario?: boolean
    descricao?: boolean
    tipoProdutos?: boolean
    enderecoId?: boolean
    feiranteId?: boolean
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMarca?: boolean
    foto?: boolean
    horario?: boolean
    descricao?: boolean
    tipoProdutos?: boolean
    enderecoId?: boolean
    feiranteId?: boolean
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectScalar = {
    id?: boolean
    nomeMarca?: boolean
    foto?: boolean
    horario?: boolean
    descricao?: boolean
    tipoProdutos?: boolean
    enderecoId?: boolean
    feiranteId?: boolean
  }

  export type BancoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeMarca" | "foto" | "horario" | "descricao" | "tipoProdutos" | "enderecoId" | "feiranteId", ExtArgs["result"]["banco"]>
  export type BancoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
    favoritos?: boolean | Banco$favoritosArgs<ExtArgs>
    avaliacoes?: boolean | Banco$avaliacoesArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BancoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
  }
  export type BancoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | Banco$enderecoArgs<ExtArgs>
    feirante?: boolean | FeiranteDefaultArgs<ExtArgs>
  }

  export type $BancoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banco"
    objects: {
      endereco: Prisma.$EnderecoBancoPayload<ExtArgs> | null
      feirante: Prisma.$FeirantePayload<ExtArgs>
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeMarca: string
      foto: string | null
      horario: string
      descricao: string
      tipoProdutos: $Enums.Opcs[]
      enderecoId: string | null
      feiranteId: string
    }, ExtArgs["result"]["banco"]>
    composites: {}
  }

  type BancoGetPayload<S extends boolean | null | undefined | BancoDefaultArgs> = $Result.GetResult<Prisma.$BancoPayload, S>

  type BancoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BancoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BancoCountAggregateInputType | true
    }

  export interface BancoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banco'], meta: { name: 'Banco' } }
    /**
     * Find zero or one Banco that matches the filter.
     * @param {BancoFindUniqueArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BancoFindUniqueArgs>(args: SelectSubset<T, BancoFindUniqueArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BancoFindUniqueOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BancoFindUniqueOrThrowArgs>(args: SelectSubset<T, BancoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BancoFindFirstArgs>(args?: SelectSubset<T, BancoFindFirstArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BancoFindFirstOrThrowArgs>(args?: SelectSubset<T, BancoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bancos
     * const bancos = await prisma.banco.findMany()
     * 
     * // Get first 10 Bancos
     * const bancos = await prisma.banco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bancoWithIdOnly = await prisma.banco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BancoFindManyArgs>(args?: SelectSubset<T, BancoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banco.
     * @param {BancoCreateArgs} args - Arguments to create a Banco.
     * @example
     * // Create one Banco
     * const Banco = await prisma.banco.create({
     *   data: {
     *     // ... data to create a Banco
     *   }
     * })
     * 
     */
    create<T extends BancoCreateArgs>(args: SelectSubset<T, BancoCreateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bancos.
     * @param {BancoCreateManyArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BancoCreateManyArgs>(args?: SelectSubset<T, BancoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bancos and returns the data saved in the database.
     * @param {BancoCreateManyAndReturnArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BancoCreateManyAndReturnArgs>(args?: SelectSubset<T, BancoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banco.
     * @param {BancoDeleteArgs} args - Arguments to delete one Banco.
     * @example
     * // Delete one Banco
     * const Banco = await prisma.banco.delete({
     *   where: {
     *     // ... filter to delete one Banco
     *   }
     * })
     * 
     */
    delete<T extends BancoDeleteArgs>(args: SelectSubset<T, BancoDeleteArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banco.
     * @param {BancoUpdateArgs} args - Arguments to update one Banco.
     * @example
     * // Update one Banco
     * const banco = await prisma.banco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BancoUpdateArgs>(args: SelectSubset<T, BancoUpdateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bancos.
     * @param {BancoDeleteManyArgs} args - Arguments to filter Bancos to delete.
     * @example
     * // Delete a few Bancos
     * const { count } = await prisma.banco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BancoDeleteManyArgs>(args?: SelectSubset<T, BancoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BancoUpdateManyArgs>(args: SelectSubset<T, BancoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos and returns the data updated in the database.
     * @param {BancoUpdateManyAndReturnArgs} args - Arguments to update many Bancos.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.updateManyAndReturn({
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
    updateManyAndReturn<T extends BancoUpdateManyAndReturnArgs>(args: SelectSubset<T, BancoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banco.
     * @param {BancoUpsertArgs} args - Arguments to update or create a Banco.
     * @example
     * // Update or create a Banco
     * const banco = await prisma.banco.upsert({
     *   create: {
     *     // ... data to create a Banco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banco we want to update
     *   }
     * })
     */
    upsert<T extends BancoUpsertArgs>(args: SelectSubset<T, BancoUpsertArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoCountArgs} args - Arguments to filter Bancos to count.
     * @example
     * // Count the number of Bancos
     * const count = await prisma.banco.count({
     *   where: {
     *     // ... the filter for the Bancos we want to count
     *   }
     * })
    **/
    count<T extends BancoCountArgs>(
      args?: Subset<T, BancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BancoAggregateArgs>(args: Subset<T, BancoAggregateArgs>): Prisma.PrismaPromise<GetBancoAggregateType<T>>

    /**
     * Group by Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoGroupByArgs} args - Group by arguments.
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
      T extends BancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BancoGroupByArgs['orderBy'] }
        : { orderBy?: BancoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banco model
   */
  readonly fields: BancoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BancoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends Banco$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, Banco$enderecoArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feirante<T extends FeiranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeiranteDefaultArgs<ExtArgs>>): Prisma__FeiranteClient<$Result.GetResult<Prisma.$FeirantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoritos<T extends Banco$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Banco$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Banco$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Banco$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Banco model
   */
  interface BancoFieldRefs {
    readonly id: FieldRef<"Banco", 'String'>
    readonly nomeMarca: FieldRef<"Banco", 'String'>
    readonly foto: FieldRef<"Banco", 'String'>
    readonly horario: FieldRef<"Banco", 'String'>
    readonly descricao: FieldRef<"Banco", 'String'>
    readonly tipoProdutos: FieldRef<"Banco", 'Opcs[]'>
    readonly enderecoId: FieldRef<"Banco", 'String'>
    readonly feiranteId: FieldRef<"Banco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banco findUnique
   */
  export type BancoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findUniqueOrThrow
   */
  export type BancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findFirst
   */
  export type BancoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findFirstOrThrow
   */
  export type BancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findMany
   */
  export type BancoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Bancos to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco create
   */
  export type BancoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to create a Banco.
     */
    data: XOR<BancoCreateInput, BancoUncheckedCreateInput>
  }

  /**
   * Banco createMany
   */
  export type BancoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banco createManyAndReturn
   */
  export type BancoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banco update
   */
  export type BancoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to update a Banco.
     */
    data: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
    /**
     * Choose, which Banco to update.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco updateMany
   */
  export type BancoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
  }

  /**
   * Banco updateManyAndReturn
   */
  export type BancoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banco upsert
   */
  export type BancoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The filter to search for the Banco to update in case it exists.
     */
    where: BancoWhereUniqueInput
    /**
     * In case the Banco found by the `where` argument doesn't exist, create a new Banco with this data.
     */
    create: XOR<BancoCreateInput, BancoUncheckedCreateInput>
    /**
     * In case the Banco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
  }

  /**
   * Banco delete
   */
  export type BancoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter which Banco to delete.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco deleteMany
   */
  export type BancoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bancos to delete
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to delete.
     */
    limit?: number
  }

  /**
   * Banco.endereco
   */
  export type Banco$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    where?: EnderecoBancoWhereInput
  }

  /**
   * Banco.favoritos
   */
  export type Banco$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Banco.avaliacoes
   */
  export type Banco$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Banco without action
   */
  export type BancoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
  }


  /**
   * Model EnderecoBanco
   */

  export type AggregateEnderecoBanco = {
    _count: EnderecoBancoCountAggregateOutputType | null
    _avg: EnderecoBancoAvgAggregateOutputType | null
    _sum: EnderecoBancoSumAggregateOutputType | null
    _min: EnderecoBancoMinAggregateOutputType | null
    _max: EnderecoBancoMaxAggregateOutputType | null
  }

  export type EnderecoBancoAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EnderecoBancoSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EnderecoBancoMinAggregateOutputType = {
    id: string | null
    rua: string | null
    setor: string | null
    numero: string | null
    latitude: number | null
    longitude: number | null
  }

  export type EnderecoBancoMaxAggregateOutputType = {
    id: string | null
    rua: string | null
    setor: string | null
    numero: string | null
    latitude: number | null
    longitude: number | null
  }

  export type EnderecoBancoCountAggregateOutputType = {
    id: number
    rua: number
    setor: number
    numero: number
    latitude: number
    longitude: number
    _all: number
  }


  export type EnderecoBancoAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EnderecoBancoSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EnderecoBancoMinAggregateInputType = {
    id?: true
    rua?: true
    setor?: true
    numero?: true
    latitude?: true
    longitude?: true
  }

  export type EnderecoBancoMaxAggregateInputType = {
    id?: true
    rua?: true
    setor?: true
    numero?: true
    latitude?: true
    longitude?: true
  }

  export type EnderecoBancoCountAggregateInputType = {
    id?: true
    rua?: true
    setor?: true
    numero?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type EnderecoBancoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoBanco to aggregate.
     */
    where?: EnderecoBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoBancos to fetch.
     */
    orderBy?: EnderecoBancoOrderByWithRelationInput | EnderecoBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnderecoBancos
    **/
    _count?: true | EnderecoBancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoBancoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoBancoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoBancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoBancoMaxAggregateInputType
  }

  export type GetEnderecoBancoAggregateType<T extends EnderecoBancoAggregateArgs> = {
        [P in keyof T & keyof AggregateEnderecoBanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnderecoBanco[P]>
      : GetScalarType<T[P], AggregateEnderecoBanco[P]>
  }




  export type EnderecoBancoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoBancoWhereInput
    orderBy?: EnderecoBancoOrderByWithAggregationInput | EnderecoBancoOrderByWithAggregationInput[]
    by: EnderecoBancoScalarFieldEnum[] | EnderecoBancoScalarFieldEnum
    having?: EnderecoBancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoBancoCountAggregateInputType | true
    _avg?: EnderecoBancoAvgAggregateInputType
    _sum?: EnderecoBancoSumAggregateInputType
    _min?: EnderecoBancoMinAggregateInputType
    _max?: EnderecoBancoMaxAggregateInputType
  }

  export type EnderecoBancoGroupByOutputType = {
    id: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
    _count: EnderecoBancoCountAggregateOutputType | null
    _avg: EnderecoBancoAvgAggregateOutputType | null
    _sum: EnderecoBancoSumAggregateOutputType | null
    _min: EnderecoBancoMinAggregateOutputType | null
    _max: EnderecoBancoMaxAggregateOutputType | null
  }

  type GetEnderecoBancoGroupByPayload<T extends EnderecoBancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoBancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoBancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoBancoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoBancoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoBancoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    setor?: boolean
    numero?: boolean
    latitude?: boolean
    longitude?: boolean
    banco?: boolean | EnderecoBanco$bancoArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoBanco"]>

  export type EnderecoBancoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    setor?: boolean
    numero?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["enderecoBanco"]>

  export type EnderecoBancoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    setor?: boolean
    numero?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["enderecoBanco"]>

  export type EnderecoBancoSelectScalar = {
    id?: boolean
    rua?: boolean
    setor?: boolean
    numero?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type EnderecoBancoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rua" | "setor" | "numero" | "latitude" | "longitude", ExtArgs["result"]["enderecoBanco"]>
  export type EnderecoBancoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banco?: boolean | EnderecoBanco$bancoArgs<ExtArgs>
  }
  export type EnderecoBancoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnderecoBancoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnderecoBancoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnderecoBanco"
    objects: {
      banco: Prisma.$BancoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rua: string
      setor: string
      numero: string
      latitude: number
      longitude: number
    }, ExtArgs["result"]["enderecoBanco"]>
    composites: {}
  }

  type EnderecoBancoGetPayload<S extends boolean | null | undefined | EnderecoBancoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoBancoPayload, S>

  type EnderecoBancoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoBancoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoBancoCountAggregateInputType | true
    }

  export interface EnderecoBancoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnderecoBanco'], meta: { name: 'EnderecoBanco' } }
    /**
     * Find zero or one EnderecoBanco that matches the filter.
     * @param {EnderecoBancoFindUniqueArgs} args - Arguments to find a EnderecoBanco
     * @example
     * // Get one EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoBancoFindUniqueArgs>(args: SelectSubset<T, EnderecoBancoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnderecoBanco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoBancoFindUniqueOrThrowArgs} args - Arguments to find a EnderecoBanco
     * @example
     * // Get one EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoBancoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoBancoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoBanco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoFindFirstArgs} args - Arguments to find a EnderecoBanco
     * @example
     * // Get one EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoBancoFindFirstArgs>(args?: SelectSubset<T, EnderecoBancoFindFirstArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoBanco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoFindFirstOrThrowArgs} args - Arguments to find a EnderecoBanco
     * @example
     * // Get one EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoBancoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoBancoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnderecoBancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnderecoBancos
     * const enderecoBancos = await prisma.enderecoBanco.findMany()
     * 
     * // Get first 10 EnderecoBancos
     * const enderecoBancos = await prisma.enderecoBanco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoBancoWithIdOnly = await prisma.enderecoBanco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoBancoFindManyArgs>(args?: SelectSubset<T, EnderecoBancoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnderecoBanco.
     * @param {EnderecoBancoCreateArgs} args - Arguments to create a EnderecoBanco.
     * @example
     * // Create one EnderecoBanco
     * const EnderecoBanco = await prisma.enderecoBanco.create({
     *   data: {
     *     // ... data to create a EnderecoBanco
     *   }
     * })
     * 
     */
    create<T extends EnderecoBancoCreateArgs>(args: SelectSubset<T, EnderecoBancoCreateArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnderecoBancos.
     * @param {EnderecoBancoCreateManyArgs} args - Arguments to create many EnderecoBancos.
     * @example
     * // Create many EnderecoBancos
     * const enderecoBanco = await prisma.enderecoBanco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoBancoCreateManyArgs>(args?: SelectSubset<T, EnderecoBancoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnderecoBancos and returns the data saved in the database.
     * @param {EnderecoBancoCreateManyAndReturnArgs} args - Arguments to create many EnderecoBancos.
     * @example
     * // Create many EnderecoBancos
     * const enderecoBanco = await prisma.enderecoBanco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnderecoBancos and only return the `id`
     * const enderecoBancoWithIdOnly = await prisma.enderecoBanco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoBancoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoBancoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnderecoBanco.
     * @param {EnderecoBancoDeleteArgs} args - Arguments to delete one EnderecoBanco.
     * @example
     * // Delete one EnderecoBanco
     * const EnderecoBanco = await prisma.enderecoBanco.delete({
     *   where: {
     *     // ... filter to delete one EnderecoBanco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoBancoDeleteArgs>(args: SelectSubset<T, EnderecoBancoDeleteArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnderecoBanco.
     * @param {EnderecoBancoUpdateArgs} args - Arguments to update one EnderecoBanco.
     * @example
     * // Update one EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoBancoUpdateArgs>(args: SelectSubset<T, EnderecoBancoUpdateArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnderecoBancos.
     * @param {EnderecoBancoDeleteManyArgs} args - Arguments to filter EnderecoBancos to delete.
     * @example
     * // Delete a few EnderecoBancos
     * const { count } = await prisma.enderecoBanco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoBancoDeleteManyArgs>(args?: SelectSubset<T, EnderecoBancoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoBancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnderecoBancos
     * const enderecoBanco = await prisma.enderecoBanco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoBancoUpdateManyArgs>(args: SelectSubset<T, EnderecoBancoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoBancos and returns the data updated in the database.
     * @param {EnderecoBancoUpdateManyAndReturnArgs} args - Arguments to update many EnderecoBancos.
     * @example
     * // Update many EnderecoBancos
     * const enderecoBanco = await prisma.enderecoBanco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnderecoBancos and only return the `id`
     * const enderecoBancoWithIdOnly = await prisma.enderecoBanco.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnderecoBancoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoBancoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnderecoBanco.
     * @param {EnderecoBancoUpsertArgs} args - Arguments to update or create a EnderecoBanco.
     * @example
     * // Update or create a EnderecoBanco
     * const enderecoBanco = await prisma.enderecoBanco.upsert({
     *   create: {
     *     // ... data to create a EnderecoBanco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnderecoBanco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoBancoUpsertArgs>(args: SelectSubset<T, EnderecoBancoUpsertArgs<ExtArgs>>): Prisma__EnderecoBancoClient<$Result.GetResult<Prisma.$EnderecoBancoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnderecoBancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoCountArgs} args - Arguments to filter EnderecoBancos to count.
     * @example
     * // Count the number of EnderecoBancos
     * const count = await prisma.enderecoBanco.count({
     *   where: {
     *     // ... the filter for the EnderecoBancos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoBancoCountArgs>(
      args?: Subset<T, EnderecoBancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoBancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnderecoBanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoBancoAggregateArgs>(args: Subset<T, EnderecoBancoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoBancoAggregateType<T>>

    /**
     * Group by EnderecoBanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoBancoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoBancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoBancoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoBancoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoBancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoBancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnderecoBanco model
   */
  readonly fields: EnderecoBancoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnderecoBanco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoBancoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banco<T extends EnderecoBanco$bancoArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoBanco$bancoArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnderecoBanco model
   */
  interface EnderecoBancoFieldRefs {
    readonly id: FieldRef<"EnderecoBanco", 'String'>
    readonly rua: FieldRef<"EnderecoBanco", 'String'>
    readonly setor: FieldRef<"EnderecoBanco", 'String'>
    readonly numero: FieldRef<"EnderecoBanco", 'String'>
    readonly latitude: FieldRef<"EnderecoBanco", 'Float'>
    readonly longitude: FieldRef<"EnderecoBanco", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * EnderecoBanco findUnique
   */
  export type EnderecoBancoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoBanco to fetch.
     */
    where: EnderecoBancoWhereUniqueInput
  }

  /**
   * EnderecoBanco findUniqueOrThrow
   */
  export type EnderecoBancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoBanco to fetch.
     */
    where: EnderecoBancoWhereUniqueInput
  }

  /**
   * EnderecoBanco findFirst
   */
  export type EnderecoBancoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoBanco to fetch.
     */
    where?: EnderecoBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoBancos to fetch.
     */
    orderBy?: EnderecoBancoOrderByWithRelationInput | EnderecoBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoBancos.
     */
    cursor?: EnderecoBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoBancos.
     */
    distinct?: EnderecoBancoScalarFieldEnum | EnderecoBancoScalarFieldEnum[]
  }

  /**
   * EnderecoBanco findFirstOrThrow
   */
  export type EnderecoBancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoBanco to fetch.
     */
    where?: EnderecoBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoBancos to fetch.
     */
    orderBy?: EnderecoBancoOrderByWithRelationInput | EnderecoBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoBancos.
     */
    cursor?: EnderecoBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoBancos.
     */
    distinct?: EnderecoBancoScalarFieldEnum | EnderecoBancoScalarFieldEnum[]
  }

  /**
   * EnderecoBanco findMany
   */
  export type EnderecoBancoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoBancos to fetch.
     */
    where?: EnderecoBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoBancos to fetch.
     */
    orderBy?: EnderecoBancoOrderByWithRelationInput | EnderecoBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnderecoBancos.
     */
    cursor?: EnderecoBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoBancos.
     */
    skip?: number
    distinct?: EnderecoBancoScalarFieldEnum | EnderecoBancoScalarFieldEnum[]
  }

  /**
   * EnderecoBanco create
   */
  export type EnderecoBancoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * The data needed to create a EnderecoBanco.
     */
    data: XOR<EnderecoBancoCreateInput, EnderecoBancoUncheckedCreateInput>
  }

  /**
   * EnderecoBanco createMany
   */
  export type EnderecoBancoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnderecoBancos.
     */
    data: EnderecoBancoCreateManyInput | EnderecoBancoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnderecoBanco createManyAndReturn
   */
  export type EnderecoBancoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * The data used to create many EnderecoBancos.
     */
    data: EnderecoBancoCreateManyInput | EnderecoBancoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnderecoBanco update
   */
  export type EnderecoBancoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * The data needed to update a EnderecoBanco.
     */
    data: XOR<EnderecoBancoUpdateInput, EnderecoBancoUncheckedUpdateInput>
    /**
     * Choose, which EnderecoBanco to update.
     */
    where: EnderecoBancoWhereUniqueInput
  }

  /**
   * EnderecoBanco updateMany
   */
  export type EnderecoBancoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnderecoBancos.
     */
    data: XOR<EnderecoBancoUpdateManyMutationInput, EnderecoBancoUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoBancos to update
     */
    where?: EnderecoBancoWhereInput
    /**
     * Limit how many EnderecoBancos to update.
     */
    limit?: number
  }

  /**
   * EnderecoBanco updateManyAndReturn
   */
  export type EnderecoBancoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * The data used to update EnderecoBancos.
     */
    data: XOR<EnderecoBancoUpdateManyMutationInput, EnderecoBancoUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoBancos to update
     */
    where?: EnderecoBancoWhereInput
    /**
     * Limit how many EnderecoBancos to update.
     */
    limit?: number
  }

  /**
   * EnderecoBanco upsert
   */
  export type EnderecoBancoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * The filter to search for the EnderecoBanco to update in case it exists.
     */
    where: EnderecoBancoWhereUniqueInput
    /**
     * In case the EnderecoBanco found by the `where` argument doesn't exist, create a new EnderecoBanco with this data.
     */
    create: XOR<EnderecoBancoCreateInput, EnderecoBancoUncheckedCreateInput>
    /**
     * In case the EnderecoBanco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoBancoUpdateInput, EnderecoBancoUncheckedUpdateInput>
  }

  /**
   * EnderecoBanco delete
   */
  export type EnderecoBancoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
    /**
     * Filter which EnderecoBanco to delete.
     */
    where: EnderecoBancoWhereUniqueInput
  }

  /**
   * EnderecoBanco deleteMany
   */
  export type EnderecoBancoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoBancos to delete
     */
    where?: EnderecoBancoWhereInput
    /**
     * Limit how many EnderecoBancos to delete.
     */
    limit?: number
  }

  /**
   * EnderecoBanco.banco
   */
  export type EnderecoBanco$bancoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    where?: BancoWhereInput
  }

  /**
   * EnderecoBanco without action
   */
  export type EnderecoBancoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoBanco
     */
    select?: EnderecoBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoBanco
     */
    omit?: EnderecoBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoBancoInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    bancoId: string | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    bancoId: string | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    clienteId: number
    bancoId: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    clienteId?: true
    bancoId?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    bancoId?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    clienteId?: true
    bancoId?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    clienteId: string
    bancoId: string
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    bancoId?: boolean
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    bancoId?: boolean
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    bancoId?: boolean
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    bancoId?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "bancoId", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      banco: Prisma.$BancoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      bancoId: string
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
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
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banco<T extends BancoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancoDefaultArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly clienteId: FieldRef<"Favorito", 'String'>
    readonly bancoId: FieldRef<"Favorito", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: string | null
    nota: number | null
    comentario: string | null
    clienteId: string | null
    bancoId: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: string | null
    nota: number | null
    comentario: string | null
    clienteId: string | null
    bancoId: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    nota: number
    comentario: number
    clienteId: number
    bancoId: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    clienteId?: true
    bancoId?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    clienteId?: true
    bancoId?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    clienteId?: true
    bancoId?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: string
    nota: number
    comentario: string | null
    clienteId: string
    bancoId: string
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    clienteId?: boolean
    bancoId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    clienteId?: boolean
    bancoId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    clienteId?: boolean
    bancoId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    nota?: boolean
    comentario?: boolean
    clienteId?: boolean
    bancoId?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nota" | "comentario" | "clienteId" | "bancoId", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      banco: Prisma.$BancoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nota: number
      comentario: string | null
      clienteId: string
      bancoId: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    banco<T extends BancoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancoDefaultArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly clienteId: FieldRef<"Avaliacao", 'String'>
    readonly bancoId: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    dataNascimento: 'dataNascimento',
    genero: 'genero',
    telefone: 'telefone',
    interesses: 'interesses',
    usuarioId: 'usuarioId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FeiranteScalarFieldEnum: {
    id: 'id',
    nomeProprietario: 'nomeProprietario',
    cadastroAssosiacao: 'cadastroAssosiacao',
    cpfCnpj: 'cpfCnpj',
    telefone: 'telefone',
    linkWhatsapp: 'linkWhatsapp',
    linkInstagram: 'linkInstagram',
    linkFacebook: 'linkFacebook',
    usuarioId: 'usuarioId'
  };

  export type FeiranteScalarFieldEnum = (typeof FeiranteScalarFieldEnum)[keyof typeof FeiranteScalarFieldEnum]


  export const BancoScalarFieldEnum: {
    id: 'id',
    nomeMarca: 'nomeMarca',
    foto: 'foto',
    horario: 'horario',
    descricao: 'descricao',
    tipoProdutos: 'tipoProdutos',
    enderecoId: 'enderecoId',
    feiranteId: 'feiranteId'
  };

  export type BancoScalarFieldEnum = (typeof BancoScalarFieldEnum)[keyof typeof BancoScalarFieldEnum]


  export const EnderecoBancoScalarFieldEnum: {
    id: 'id',
    rua: 'rua',
    setor: 'setor',
    numero: 'numero',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type EnderecoBancoScalarFieldEnum = (typeof EnderecoBancoScalarFieldEnum)[keyof typeof EnderecoBancoScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    bancoId: 'bancoId'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    nota: 'nota',
    comentario: 'comentario',
    clienteId: 'clienteId',
    bancoId: 'bancoId'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Opcs[]'
   */
  export type ListEnumOpcsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Opcs[]'>
    


  /**
   * Reference to a field of type 'Opcs'
   */
  export type EnumOpcsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Opcs'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    feirante?: XOR<FeiranteNullableScalarRelationFilter, FeiranteWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    feirante?: FeiranteOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    feirante?: XOR<FeiranteNullableScalarRelationFilter, FeiranteWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: UuidFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    dataNascimento?: DateTimeFilter<"Cliente"> | Date | string
    genero?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    interesses?: EnumOpcsNullableListFilter<"Cliente">
    usuarioId?: UuidFilter<"Cliente"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    favoritos?: FavoritoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    telefone?: SortOrderInput | SortOrder
    interesses?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    usuarioId?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    dataNascimento?: DateTimeFilter<"Cliente"> | Date | string
    genero?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    interesses?: EnumOpcsNullableListFilter<"Cliente">
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    favoritos?: FavoritoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id" | "cpf" | "usuarioId">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    telefone?: SortOrderInput | SortOrder
    interesses?: SortOrder
    usuarioId?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    genero?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    interesses?: EnumOpcsNullableListFilter<"Cliente">
    usuarioId?: UuidWithAggregatesFilter<"Cliente"> | string
  }

  export type FeiranteWhereInput = {
    AND?: FeiranteWhereInput | FeiranteWhereInput[]
    OR?: FeiranteWhereInput[]
    NOT?: FeiranteWhereInput | FeiranteWhereInput[]
    id?: UuidFilter<"Feirante"> | string
    nomeProprietario?: StringFilter<"Feirante"> | string
    cadastroAssosiacao?: StringFilter<"Feirante"> | string
    cpfCnpj?: StringFilter<"Feirante"> | string
    telefone?: StringNullableFilter<"Feirante"> | string | null
    linkWhatsapp?: StringNullableFilter<"Feirante"> | string | null
    linkInstagram?: StringNullableFilter<"Feirante"> | string | null
    linkFacebook?: StringNullableFilter<"Feirante"> | string | null
    usuarioId?: UuidFilter<"Feirante"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    bancos?: BancoListRelationFilter
  }

  export type FeiranteOrderByWithRelationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    cadastroAssosiacao?: SortOrder
    cpfCnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    linkWhatsapp?: SortOrderInput | SortOrder
    linkInstagram?: SortOrderInput | SortOrder
    linkFacebook?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    bancos?: BancoOrderByRelationAggregateInput
  }

  export type FeiranteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: FeiranteWhereInput | FeiranteWhereInput[]
    OR?: FeiranteWhereInput[]
    NOT?: FeiranteWhereInput | FeiranteWhereInput[]
    nomeProprietario?: StringFilter<"Feirante"> | string
    cadastroAssosiacao?: StringFilter<"Feirante"> | string
    cpfCnpj?: StringFilter<"Feirante"> | string
    telefone?: StringNullableFilter<"Feirante"> | string | null
    linkWhatsapp?: StringNullableFilter<"Feirante"> | string | null
    linkInstagram?: StringNullableFilter<"Feirante"> | string | null
    linkFacebook?: StringNullableFilter<"Feirante"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    bancos?: BancoListRelationFilter
  }, "id" | "usuarioId">

  export type FeiranteOrderByWithAggregationInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    cadastroAssosiacao?: SortOrder
    cpfCnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    linkWhatsapp?: SortOrderInput | SortOrder
    linkInstagram?: SortOrderInput | SortOrder
    linkFacebook?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: FeiranteCountOrderByAggregateInput
    _max?: FeiranteMaxOrderByAggregateInput
    _min?: FeiranteMinOrderByAggregateInput
  }

  export type FeiranteScalarWhereWithAggregatesInput = {
    AND?: FeiranteScalarWhereWithAggregatesInput | FeiranteScalarWhereWithAggregatesInput[]
    OR?: FeiranteScalarWhereWithAggregatesInput[]
    NOT?: FeiranteScalarWhereWithAggregatesInput | FeiranteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Feirante"> | string
    nomeProprietario?: StringWithAggregatesFilter<"Feirante"> | string
    cadastroAssosiacao?: StringWithAggregatesFilter<"Feirante"> | string
    cpfCnpj?: StringWithAggregatesFilter<"Feirante"> | string
    telefone?: StringNullableWithAggregatesFilter<"Feirante"> | string | null
    linkWhatsapp?: StringNullableWithAggregatesFilter<"Feirante"> | string | null
    linkInstagram?: StringNullableWithAggregatesFilter<"Feirante"> | string | null
    linkFacebook?: StringNullableWithAggregatesFilter<"Feirante"> | string | null
    usuarioId?: UuidWithAggregatesFilter<"Feirante"> | string
  }

  export type BancoWhereInput = {
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    id?: UuidFilter<"Banco"> | string
    nomeMarca?: StringFilter<"Banco"> | string
    foto?: StringNullableFilter<"Banco"> | string | null
    horario?: StringFilter<"Banco"> | string
    descricao?: StringFilter<"Banco"> | string
    tipoProdutos?: EnumOpcsNullableListFilter<"Banco">
    enderecoId?: StringNullableFilter<"Banco"> | string | null
    feiranteId?: UuidFilter<"Banco"> | string
    endereco?: XOR<EnderecoBancoNullableScalarRelationFilter, EnderecoBancoWhereInput> | null
    feirante?: XOR<FeiranteScalarRelationFilter, FeiranteWhereInput>
    favoritos?: FavoritoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type BancoOrderByWithRelationInput = {
    id?: SortOrder
    nomeMarca?: SortOrder
    foto?: SortOrderInput | SortOrder
    horario?: SortOrder
    descricao?: SortOrder
    tipoProdutos?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    feiranteId?: SortOrder
    endereco?: EnderecoBancoOrderByWithRelationInput
    feirante?: FeiranteOrderByWithRelationInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type BancoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    enderecoId?: string
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    nomeMarca?: StringFilter<"Banco"> | string
    foto?: StringNullableFilter<"Banco"> | string | null
    horario?: StringFilter<"Banco"> | string
    descricao?: StringFilter<"Banco"> | string
    tipoProdutos?: EnumOpcsNullableListFilter<"Banco">
    feiranteId?: UuidFilter<"Banco"> | string
    endereco?: XOR<EnderecoBancoNullableScalarRelationFilter, EnderecoBancoWhereInput> | null
    feirante?: XOR<FeiranteScalarRelationFilter, FeiranteWhereInput>
    favoritos?: FavoritoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id" | "enderecoId">

  export type BancoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeMarca?: SortOrder
    foto?: SortOrderInput | SortOrder
    horario?: SortOrder
    descricao?: SortOrder
    tipoProdutos?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    feiranteId?: SortOrder
    _count?: BancoCountOrderByAggregateInput
    _max?: BancoMaxOrderByAggregateInput
    _min?: BancoMinOrderByAggregateInput
  }

  export type BancoScalarWhereWithAggregatesInput = {
    AND?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    OR?: BancoScalarWhereWithAggregatesInput[]
    NOT?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Banco"> | string
    nomeMarca?: StringWithAggregatesFilter<"Banco"> | string
    foto?: StringNullableWithAggregatesFilter<"Banco"> | string | null
    horario?: StringWithAggregatesFilter<"Banco"> | string
    descricao?: StringWithAggregatesFilter<"Banco"> | string
    tipoProdutos?: EnumOpcsNullableListFilter<"Banco">
    enderecoId?: StringNullableWithAggregatesFilter<"Banco"> | string | null
    feiranteId?: UuidWithAggregatesFilter<"Banco"> | string
  }

  export type EnderecoBancoWhereInput = {
    AND?: EnderecoBancoWhereInput | EnderecoBancoWhereInput[]
    OR?: EnderecoBancoWhereInput[]
    NOT?: EnderecoBancoWhereInput | EnderecoBancoWhereInput[]
    id?: StringFilter<"EnderecoBanco"> | string
    rua?: StringFilter<"EnderecoBanco"> | string
    setor?: StringFilter<"EnderecoBanco"> | string
    numero?: StringFilter<"EnderecoBanco"> | string
    latitude?: FloatFilter<"EnderecoBanco"> | number
    longitude?: FloatFilter<"EnderecoBanco"> | number
    banco?: XOR<BancoNullableScalarRelationFilter, BancoWhereInput> | null
  }

  export type EnderecoBancoOrderByWithRelationInput = {
    id?: SortOrder
    rua?: SortOrder
    setor?: SortOrder
    numero?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    banco?: BancoOrderByWithRelationInput
  }

  export type EnderecoBancoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnderecoBancoWhereInput | EnderecoBancoWhereInput[]
    OR?: EnderecoBancoWhereInput[]
    NOT?: EnderecoBancoWhereInput | EnderecoBancoWhereInput[]
    rua?: StringFilter<"EnderecoBanco"> | string
    setor?: StringFilter<"EnderecoBanco"> | string
    numero?: StringFilter<"EnderecoBanco"> | string
    latitude?: FloatFilter<"EnderecoBanco"> | number
    longitude?: FloatFilter<"EnderecoBanco"> | number
    banco?: XOR<BancoNullableScalarRelationFilter, BancoWhereInput> | null
  }, "id">

  export type EnderecoBancoOrderByWithAggregationInput = {
    id?: SortOrder
    rua?: SortOrder
    setor?: SortOrder
    numero?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: EnderecoBancoCountOrderByAggregateInput
    _avg?: EnderecoBancoAvgOrderByAggregateInput
    _max?: EnderecoBancoMaxOrderByAggregateInput
    _min?: EnderecoBancoMinOrderByAggregateInput
    _sum?: EnderecoBancoSumOrderByAggregateInput
  }

  export type EnderecoBancoScalarWhereWithAggregatesInput = {
    AND?: EnderecoBancoScalarWhereWithAggregatesInput | EnderecoBancoScalarWhereWithAggregatesInput[]
    OR?: EnderecoBancoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoBancoScalarWhereWithAggregatesInput | EnderecoBancoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnderecoBanco"> | string
    rua?: StringWithAggregatesFilter<"EnderecoBanco"> | string
    setor?: StringWithAggregatesFilter<"EnderecoBanco"> | string
    numero?: StringWithAggregatesFilter<"EnderecoBanco"> | string
    latitude?: FloatWithAggregatesFilter<"EnderecoBanco"> | number
    longitude?: FloatWithAggregatesFilter<"EnderecoBanco"> | number
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: StringFilter<"Favorito"> | string
    clienteId?: UuidFilter<"Favorito"> | string
    bancoId?: UuidFilter<"Favorito"> | string
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    banco?: BancoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clienteId_bancoId?: FavoritoClienteIdBancoIdCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    clienteId?: UuidFilter<"Favorito"> | string
    bancoId?: UuidFilter<"Favorito"> | string
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id" | "clienteId_bancoId">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorito"> | string
    clienteId?: UuidWithAggregatesFilter<"Favorito"> | string
    bancoId?: UuidWithAggregatesFilter<"Favorito"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    clienteId?: UuidFilter<"Avaliacao"> | string
    bancoId?: UuidFilter<"Avaliacao"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    banco?: BancoOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    clienteId?: UuidFilter<"Avaliacao"> | string
    bancoId?: UuidFilter<"Avaliacao"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    clienteId?: UuidWithAggregatesFilter<"Avaliacao"> | string
    bancoId?: UuidWithAggregatesFilter<"Avaliacao"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    cliente?: ClienteCreateNestedOneWithoutUsuarioInput
    feirante?: FeiranteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    cliente?: ClienteUncheckedCreateNestedOneWithoutUsuarioInput
    feirante?: FeiranteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    cliente?: ClienteUpdateOneWithoutUsuarioNestedInput
    feirante?: FeiranteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    cliente?: ClienteUncheckedUpdateOneWithoutUsuarioNestedInput
    feirante?: FeiranteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuario: UsuarioCreateNestedOneWithoutClienteInput
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuarioId: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuario?: UsuarioUpdateOneRequiredWithoutClienteNestedInput
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuarioId?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuarioId: string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type FeiranteCreateInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    usuario: UsuarioCreateNestedOneWithoutFeiranteInput
    bancos?: BancoCreateNestedManyWithoutFeiranteInput
  }

  export type FeiranteUncheckedCreateInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    usuarioId: string
    bancos?: BancoUncheckedCreateNestedManyWithoutFeiranteInput
  }

  export type FeiranteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutFeiranteNestedInput
    bancos?: BancoUpdateManyWithoutFeiranteNestedInput
  }

  export type FeiranteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    bancos?: BancoUncheckedUpdateManyWithoutFeiranteNestedInput
  }

  export type FeiranteCreateManyInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    usuarioId: string
  }

  export type FeiranteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeiranteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type BancoCreateInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoCreateNestedOneWithoutBancoInput
    feirante: FeiranteCreateNestedOneWithoutBancosInput
    favoritos?: FavoritoCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
    feiranteId: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoUpdateOneWithoutBancoNestedInput
    feirante?: FeiranteUpdateOneRequiredWithoutBancosNestedInput
    favoritos?: FavoritoUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
    feiranteId?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type BancoCreateManyInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
    feiranteId: string
  }

  export type BancoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
  }

  export type BancoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
    feiranteId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoBancoCreateInput = {
    id?: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
    banco?: BancoCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoBancoUncheckedCreateInput = {
    id?: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
    banco?: BancoUncheckedCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoBancoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    banco?: BancoUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoBancoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    banco?: BancoUncheckedUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoBancoCreateManyInput = {
    id?: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
  }

  export type EnderecoBancoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EnderecoBancoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type FavoritoCreateInput = {
    id?: string
    banco: BancoCreateNestedOneWithoutFavoritosInput
    cliente: ClienteCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    clienteId: string
    bancoId: string
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    banco?: BancoUpdateOneRequiredWithoutFavoritosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoCreateManyInput = {
    id?: string
    clienteId: string
    bancoId: string
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    id?: string
    nota: number
    comentario?: string | null
    cliente: ClienteCreateNestedOneWithoutAvaliacoesInput
    banco: BancoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: string
    nota: number
    comentario?: string | null
    clienteId: string
    bancoId: string
  }

  export type AvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutAvaliacoesNestedInput
    banco?: BancoUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: string
    nota: number
    comentario?: string | null
    clienteId: string
    bancoId: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type FeiranteNullableScalarRelationFilter = {
    is?: FeiranteWhereInput | null
    isNot?: FeiranteWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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

  export type EnumOpcsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Opcs[] | ListEnumOpcsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Opcs | EnumOpcsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Opcs[] | ListEnumOpcsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Opcs[] | ListEnumOpcsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    telefone?: SortOrder
    interesses?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    telefone?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    genero?: SortOrder
    telefone?: SortOrder
    usuarioId?: SortOrder
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

  export type BancoListRelationFilter = {
    every?: BancoWhereInput
    some?: BancoWhereInput
    none?: BancoWhereInput
  }

  export type BancoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeiranteCountOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    cadastroAssosiacao?: SortOrder
    cpfCnpj?: SortOrder
    telefone?: SortOrder
    linkWhatsapp?: SortOrder
    linkInstagram?: SortOrder
    linkFacebook?: SortOrder
    usuarioId?: SortOrder
  }

  export type FeiranteMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    cadastroAssosiacao?: SortOrder
    cpfCnpj?: SortOrder
    telefone?: SortOrder
    linkWhatsapp?: SortOrder
    linkInstagram?: SortOrder
    linkFacebook?: SortOrder
    usuarioId?: SortOrder
  }

  export type FeiranteMinOrderByAggregateInput = {
    id?: SortOrder
    nomeProprietario?: SortOrder
    cadastroAssosiacao?: SortOrder
    cpfCnpj?: SortOrder
    telefone?: SortOrder
    linkWhatsapp?: SortOrder
    linkInstagram?: SortOrder
    linkFacebook?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoBancoNullableScalarRelationFilter = {
    is?: EnderecoBancoWhereInput | null
    isNot?: EnderecoBancoWhereInput | null
  }

  export type FeiranteScalarRelationFilter = {
    is?: FeiranteWhereInput
    isNot?: FeiranteWhereInput
  }

  export type BancoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeMarca?: SortOrder
    foto?: SortOrder
    horario?: SortOrder
    descricao?: SortOrder
    tipoProdutos?: SortOrder
    enderecoId?: SortOrder
    feiranteId?: SortOrder
  }

  export type BancoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeMarca?: SortOrder
    foto?: SortOrder
    horario?: SortOrder
    descricao?: SortOrder
    enderecoId?: SortOrder
    feiranteId?: SortOrder
  }

  export type BancoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeMarca?: SortOrder
    foto?: SortOrder
    horario?: SortOrder
    descricao?: SortOrder
    enderecoId?: SortOrder
    feiranteId?: SortOrder
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

  export type BancoNullableScalarRelationFilter = {
    is?: BancoWhereInput | null
    isNot?: BancoWhereInput | null
  }

  export type EnderecoBancoCountOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    setor?: SortOrder
    numero?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnderecoBancoAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnderecoBancoMaxOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    setor?: SortOrder
    numero?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnderecoBancoMinOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    setor?: SortOrder
    numero?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnderecoBancoSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type BancoScalarRelationFilter = {
    is?: BancoWhereInput
    isNot?: BancoWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type FavoritoClienteIdBancoIdCompoundUniqueInput = {
    clienteId: string
    bancoId: string
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
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

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota?: SortOrder
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

  export type ClienteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput
    connect?: ClienteWhereUniqueInput
  }

  export type FeiranteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutUsuarioInput
    connect?: FeiranteWhereUniqueInput
  }

  export type ClienteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput
    connect?: ClienteWhereUniqueInput
  }

  export type FeiranteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutUsuarioInput
    connect?: FeiranteWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type ClienteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput
    upsert?: ClienteUpsertWithoutUsuarioInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutUsuarioInput, ClienteUpdateWithoutUsuarioInput>, ClienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type FeiranteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutUsuarioInput
    upsert?: FeiranteUpsertWithoutUsuarioInput
    disconnect?: FeiranteWhereInput | boolean
    delete?: FeiranteWhereInput | boolean
    connect?: FeiranteWhereUniqueInput
    update?: XOR<XOR<FeiranteUpdateToOneWithWhereWithoutUsuarioInput, FeiranteUpdateWithoutUsuarioInput>, FeiranteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClienteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput
    upsert?: ClienteUpsertWithoutUsuarioInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutUsuarioInput, ClienteUpdateWithoutUsuarioInput>, ClienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type FeiranteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutUsuarioInput
    upsert?: FeiranteUpsertWithoutUsuarioInput
    disconnect?: FeiranteWhereInput | boolean
    delete?: FeiranteWhereInput | boolean
    connect?: FeiranteWhereUniqueInput
    update?: XOR<XOR<FeiranteUpdateToOneWithWhereWithoutUsuarioInput, FeiranteUpdateWithoutUsuarioInput>, FeiranteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClienteCreateinteressesInput = {
    set: $Enums.Opcs[]
  }

  export type UsuarioCreateNestedOneWithoutClienteInput = {
    create?: XOR<UsuarioCreateWithoutClienteInput, UsuarioUncheckedCreateWithoutClienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClienteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FavoritoCreateNestedManyWithoutClienteInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateinteressesInput = {
    set?: $Enums.Opcs[]
    push?: $Enums.Opcs | $Enums.Opcs[]
  }

  export type UsuarioUpdateOneRequiredWithoutClienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutClienteInput, UsuarioUncheckedCreateWithoutClienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClienteInput
    upsert?: UsuarioUpsertWithoutClienteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutClienteInput, UsuarioUpdateWithoutClienteInput>, UsuarioUncheckedUpdateWithoutClienteInput>
  }

  export type FavoritoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutClienteInput | FavoritoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutClienteInput | FavoritoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutClienteInput | FavoritoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutClienteInput | AvaliacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutClienteInput | AvaliacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutClienteInput | AvaliacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutClienteInput | FavoritoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutClienteInput | FavoritoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutClienteInput | FavoritoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutClienteInput | AvaliacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutClienteInput | AvaliacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutClienteInput | AvaliacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFeiranteInput = {
    create?: XOR<UsuarioCreateWithoutFeiranteInput, UsuarioUncheckedCreateWithoutFeiranteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeiranteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BancoCreateNestedManyWithoutFeiranteInput = {
    create?: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput> | BancoCreateWithoutFeiranteInput[] | BancoUncheckedCreateWithoutFeiranteInput[]
    connectOrCreate?: BancoCreateOrConnectWithoutFeiranteInput | BancoCreateOrConnectWithoutFeiranteInput[]
    createMany?: BancoCreateManyFeiranteInputEnvelope
    connect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
  }

  export type BancoUncheckedCreateNestedManyWithoutFeiranteInput = {
    create?: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput> | BancoCreateWithoutFeiranteInput[] | BancoUncheckedCreateWithoutFeiranteInput[]
    connectOrCreate?: BancoCreateOrConnectWithoutFeiranteInput | BancoCreateOrConnectWithoutFeiranteInput[]
    createMany?: BancoCreateManyFeiranteInputEnvelope
    connect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutFeiranteNestedInput = {
    create?: XOR<UsuarioCreateWithoutFeiranteInput, UsuarioUncheckedCreateWithoutFeiranteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeiranteInput
    upsert?: UsuarioUpsertWithoutFeiranteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFeiranteInput, UsuarioUpdateWithoutFeiranteInput>, UsuarioUncheckedUpdateWithoutFeiranteInput>
  }

  export type BancoUpdateManyWithoutFeiranteNestedInput = {
    create?: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput> | BancoCreateWithoutFeiranteInput[] | BancoUncheckedCreateWithoutFeiranteInput[]
    connectOrCreate?: BancoCreateOrConnectWithoutFeiranteInput | BancoCreateOrConnectWithoutFeiranteInput[]
    upsert?: BancoUpsertWithWhereUniqueWithoutFeiranteInput | BancoUpsertWithWhereUniqueWithoutFeiranteInput[]
    createMany?: BancoCreateManyFeiranteInputEnvelope
    set?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    disconnect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    delete?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    connect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    update?: BancoUpdateWithWhereUniqueWithoutFeiranteInput | BancoUpdateWithWhereUniqueWithoutFeiranteInput[]
    updateMany?: BancoUpdateManyWithWhereWithoutFeiranteInput | BancoUpdateManyWithWhereWithoutFeiranteInput[]
    deleteMany?: BancoScalarWhereInput | BancoScalarWhereInput[]
  }

  export type BancoUncheckedUpdateManyWithoutFeiranteNestedInput = {
    create?: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput> | BancoCreateWithoutFeiranteInput[] | BancoUncheckedCreateWithoutFeiranteInput[]
    connectOrCreate?: BancoCreateOrConnectWithoutFeiranteInput | BancoCreateOrConnectWithoutFeiranteInput[]
    upsert?: BancoUpsertWithWhereUniqueWithoutFeiranteInput | BancoUpsertWithWhereUniqueWithoutFeiranteInput[]
    createMany?: BancoCreateManyFeiranteInputEnvelope
    set?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    disconnect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    delete?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    connect?: BancoWhereUniqueInput | BancoWhereUniqueInput[]
    update?: BancoUpdateWithWhereUniqueWithoutFeiranteInput | BancoUpdateWithWhereUniqueWithoutFeiranteInput[]
    updateMany?: BancoUpdateManyWithWhereWithoutFeiranteInput | BancoUpdateManyWithWhereWithoutFeiranteInput[]
    deleteMany?: BancoScalarWhereInput | BancoScalarWhereInput[]
  }

  export type BancoCreatetipoProdutosInput = {
    set: $Enums.Opcs[]
  }

  export type EnderecoBancoCreateNestedOneWithoutBancoInput = {
    create?: XOR<EnderecoBancoCreateWithoutBancoInput, EnderecoBancoUncheckedCreateWithoutBancoInput>
    connectOrCreate?: EnderecoBancoCreateOrConnectWithoutBancoInput
    connect?: EnderecoBancoWhereUniqueInput
  }

  export type FeiranteCreateNestedOneWithoutBancosInput = {
    create?: XOR<FeiranteCreateWithoutBancosInput, FeiranteUncheckedCreateWithoutBancosInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutBancosInput
    connect?: FeiranteWhereUniqueInput
  }

  export type FavoritoCreateNestedManyWithoutBancoInput = {
    create?: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput> | FavoritoCreateWithoutBancoInput[] | FavoritoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutBancoInput | FavoritoCreateOrConnectWithoutBancoInput[]
    createMany?: FavoritoCreateManyBancoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutBancoInput = {
    create?: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput> | AvaliacaoCreateWithoutBancoInput[] | AvaliacaoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutBancoInput | AvaliacaoCreateOrConnectWithoutBancoInput[]
    createMany?: AvaliacaoCreateManyBancoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutBancoInput = {
    create?: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput> | FavoritoCreateWithoutBancoInput[] | FavoritoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutBancoInput | FavoritoCreateOrConnectWithoutBancoInput[]
    createMany?: FavoritoCreateManyBancoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutBancoInput = {
    create?: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput> | AvaliacaoCreateWithoutBancoInput[] | AvaliacaoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutBancoInput | AvaliacaoCreateOrConnectWithoutBancoInput[]
    createMany?: AvaliacaoCreateManyBancoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type BancoUpdatetipoProdutosInput = {
    set?: $Enums.Opcs[]
    push?: $Enums.Opcs | $Enums.Opcs[]
  }

  export type EnderecoBancoUpdateOneWithoutBancoNestedInput = {
    create?: XOR<EnderecoBancoCreateWithoutBancoInput, EnderecoBancoUncheckedCreateWithoutBancoInput>
    connectOrCreate?: EnderecoBancoCreateOrConnectWithoutBancoInput
    upsert?: EnderecoBancoUpsertWithoutBancoInput
    disconnect?: EnderecoBancoWhereInput | boolean
    delete?: EnderecoBancoWhereInput | boolean
    connect?: EnderecoBancoWhereUniqueInput
    update?: XOR<XOR<EnderecoBancoUpdateToOneWithWhereWithoutBancoInput, EnderecoBancoUpdateWithoutBancoInput>, EnderecoBancoUncheckedUpdateWithoutBancoInput>
  }

  export type FeiranteUpdateOneRequiredWithoutBancosNestedInput = {
    create?: XOR<FeiranteCreateWithoutBancosInput, FeiranteUncheckedCreateWithoutBancosInput>
    connectOrCreate?: FeiranteCreateOrConnectWithoutBancosInput
    upsert?: FeiranteUpsertWithoutBancosInput
    connect?: FeiranteWhereUniqueInput
    update?: XOR<XOR<FeiranteUpdateToOneWithWhereWithoutBancosInput, FeiranteUpdateWithoutBancosInput>, FeiranteUncheckedUpdateWithoutBancosInput>
  }

  export type FavoritoUpdateManyWithoutBancoNestedInput = {
    create?: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput> | FavoritoCreateWithoutBancoInput[] | FavoritoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutBancoInput | FavoritoCreateOrConnectWithoutBancoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutBancoInput | FavoritoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: FavoritoCreateManyBancoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutBancoInput | FavoritoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutBancoInput | FavoritoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutBancoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput> | AvaliacaoCreateWithoutBancoInput[] | AvaliacaoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutBancoInput | AvaliacaoCreateOrConnectWithoutBancoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutBancoInput | AvaliacaoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: AvaliacaoCreateManyBancoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutBancoInput | AvaliacaoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutBancoInput | AvaliacaoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutBancoNestedInput = {
    create?: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput> | FavoritoCreateWithoutBancoInput[] | FavoritoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutBancoInput | FavoritoCreateOrConnectWithoutBancoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutBancoInput | FavoritoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: FavoritoCreateManyBancoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutBancoInput | FavoritoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutBancoInput | FavoritoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutBancoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput> | AvaliacaoCreateWithoutBancoInput[] | AvaliacaoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutBancoInput | AvaliacaoCreateOrConnectWithoutBancoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutBancoInput | AvaliacaoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: AvaliacaoCreateManyBancoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutBancoInput | AvaliacaoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutBancoInput | AvaliacaoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type BancoCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutEnderecoInput
    connect?: BancoWhereUniqueInput
  }

  export type BancoUncheckedCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutEnderecoInput
    connect?: BancoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BancoUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutEnderecoInput
    upsert?: BancoUpsertWithoutEnderecoInput
    disconnect?: BancoWhereInput | boolean
    delete?: BancoWhereInput | boolean
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutEnderecoInput, BancoUpdateWithoutEnderecoInput>, BancoUncheckedUpdateWithoutEnderecoInput>
  }

  export type BancoUncheckedUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutEnderecoInput
    upsert?: BancoUpsertWithoutEnderecoInput
    disconnect?: BancoWhereInput | boolean
    delete?: BancoWhereInput | boolean
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutEnderecoInput, BancoUpdateWithoutEnderecoInput>, BancoUncheckedUpdateWithoutEnderecoInput>
  }

  export type BancoCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<BancoCreateWithoutFavoritosInput, BancoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: BancoCreateOrConnectWithoutFavoritosInput
    connect?: BancoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFavoritosInput
    connect?: ClienteWhereUniqueInput
  }

  export type BancoUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<BancoCreateWithoutFavoritosInput, BancoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: BancoCreateOrConnectWithoutFavoritosInput
    upsert?: BancoUpsertWithoutFavoritosInput
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutFavoritosInput, BancoUpdateWithoutFavoritosInput>, BancoUncheckedUpdateWithoutFavoritosInput>
  }

  export type ClienteUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFavoritosInput
    upsert?: ClienteUpsertWithoutFavoritosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutFavoritosInput, ClienteUpdateWithoutFavoritosInput>, ClienteUncheckedUpdateWithoutFavoritosInput>
  }

  export type ClienteCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ClienteCreateWithoutAvaliacoesInput, ClienteUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAvaliacoesInput
    connect?: ClienteWhereUniqueInput
  }

  export type BancoCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<BancoCreateWithoutAvaliacoesInput, BancoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: BancoCreateOrConnectWithoutAvaliacoesInput
    connect?: BancoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<ClienteCreateWithoutAvaliacoesInput, ClienteUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAvaliacoesInput
    upsert?: ClienteUpsertWithoutAvaliacoesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAvaliacoesInput, ClienteUpdateWithoutAvaliacoesInput>, ClienteUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type BancoUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<BancoCreateWithoutAvaliacoesInput, BancoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: BancoCreateOrConnectWithoutAvaliacoesInput
    upsert?: BancoUpsertWithoutAvaliacoesInput
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutAvaliacoesInput, BancoUpdateWithoutAvaliacoesInput>, BancoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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

  export type ClienteCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutUsuarioInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
  }

  export type FeiranteCreateWithoutUsuarioInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    bancos?: BancoCreateNestedManyWithoutFeiranteInput
  }

  export type FeiranteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    bancos?: BancoUncheckedCreateNestedManyWithoutFeiranteInput
  }

  export type FeiranteCreateOrConnectWithoutUsuarioInput = {
    where: FeiranteWhereUniqueInput
    create: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
  }

  export type ClienteUpsertWithoutUsuarioInput = {
    update: XOR<ClienteUpdateWithoutUsuarioInput, ClienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutUsuarioInput, ClienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClienteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type FeiranteUpsertWithoutUsuarioInput = {
    update: XOR<FeiranteUpdateWithoutUsuarioInput, FeiranteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FeiranteCreateWithoutUsuarioInput, FeiranteUncheckedCreateWithoutUsuarioInput>
    where?: FeiranteWhereInput
  }

  export type FeiranteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FeiranteWhereInput
    data: XOR<FeiranteUpdateWithoutUsuarioInput, FeiranteUncheckedUpdateWithoutUsuarioInput>
  }

  export type FeiranteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    bancos?: BancoUpdateManyWithoutFeiranteNestedInput
  }

  export type FeiranteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    bancos?: BancoUncheckedUpdateManyWithoutFeiranteNestedInput
  }

  export type UsuarioCreateWithoutClienteInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    feirante?: FeiranteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutClienteInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    feirante?: FeiranteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutClienteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutClienteInput, UsuarioUncheckedCreateWithoutClienteInput>
  }

  export type FavoritoCreateWithoutClienteInput = {
    id?: string
    banco: BancoCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutClienteInput = {
    id?: string
    bancoId: string
  }

  export type FavoritoCreateOrConnectWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput>
  }

  export type FavoritoCreateManyClienteInputEnvelope = {
    data: FavoritoCreateManyClienteInput | FavoritoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutClienteInput = {
    id?: string
    nota: number
    comentario?: string | null
    banco: BancoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutClienteInput = {
    id?: string
    nota: number
    comentario?: string | null
    bancoId: string
  }

  export type AvaliacaoCreateOrConnectWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput>
  }

  export type AvaliacaoCreateManyClienteInputEnvelope = {
    data: AvaliacaoCreateManyClienteInput | AvaliacaoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutClienteInput = {
    update: XOR<UsuarioUpdateWithoutClienteInput, UsuarioUncheckedUpdateWithoutClienteInput>
    create: XOR<UsuarioCreateWithoutClienteInput, UsuarioUncheckedCreateWithoutClienteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutClienteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutClienteInput, UsuarioUncheckedUpdateWithoutClienteInput>
  }

  export type UsuarioUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    feirante?: FeiranteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    feirante?: FeiranteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type FavoritoUpsertWithWhereUniqueWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutClienteInput, FavoritoUncheckedUpdateWithoutClienteInput>
    create: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutClienteInput, FavoritoUncheckedUpdateWithoutClienteInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutClienteInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutClienteInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: StringFilter<"Favorito"> | string
    clienteId?: UuidFilter<"Favorito"> | string
    bancoId?: UuidFilter<"Favorito"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutClienteInput, AvaliacaoUncheckedUpdateWithoutClienteInput>
    create: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutClienteInput, AvaliacaoUncheckedUpdateWithoutClienteInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutClienteInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    clienteId?: UuidFilter<"Avaliacao"> | string
    bancoId?: UuidFilter<"Avaliacao"> | string
  }

  export type UsuarioCreateWithoutFeiranteInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    cliente?: ClienteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFeiranteInput = {
    id?: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    cliente?: ClienteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFeiranteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFeiranteInput, UsuarioUncheckedCreateWithoutFeiranteInput>
  }

  export type BancoCreateWithoutFeiranteInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoCreateNestedOneWithoutBancoInput
    favoritos?: FavoritoCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateWithoutFeiranteInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoCreateOrConnectWithoutFeiranteInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput>
  }

  export type BancoCreateManyFeiranteInputEnvelope = {
    data: BancoCreateManyFeiranteInput | BancoCreateManyFeiranteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutFeiranteInput = {
    update: XOR<UsuarioUpdateWithoutFeiranteInput, UsuarioUncheckedUpdateWithoutFeiranteInput>
    create: XOR<UsuarioCreateWithoutFeiranteInput, UsuarioUncheckedCreateWithoutFeiranteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFeiranteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFeiranteInput, UsuarioUncheckedUpdateWithoutFeiranteInput>
  }

  export type UsuarioUpdateWithoutFeiranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    cliente?: ClienteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFeiranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    cliente?: ClienteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type BancoUpsertWithWhereUniqueWithoutFeiranteInput = {
    where: BancoWhereUniqueInput
    update: XOR<BancoUpdateWithoutFeiranteInput, BancoUncheckedUpdateWithoutFeiranteInput>
    create: XOR<BancoCreateWithoutFeiranteInput, BancoUncheckedCreateWithoutFeiranteInput>
  }

  export type BancoUpdateWithWhereUniqueWithoutFeiranteInput = {
    where: BancoWhereUniqueInput
    data: XOR<BancoUpdateWithoutFeiranteInput, BancoUncheckedUpdateWithoutFeiranteInput>
  }

  export type BancoUpdateManyWithWhereWithoutFeiranteInput = {
    where: BancoScalarWhereInput
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyWithoutFeiranteInput>
  }

  export type BancoScalarWhereInput = {
    AND?: BancoScalarWhereInput | BancoScalarWhereInput[]
    OR?: BancoScalarWhereInput[]
    NOT?: BancoScalarWhereInput | BancoScalarWhereInput[]
    id?: UuidFilter<"Banco"> | string
    nomeMarca?: StringFilter<"Banco"> | string
    foto?: StringNullableFilter<"Banco"> | string | null
    horario?: StringFilter<"Banco"> | string
    descricao?: StringFilter<"Banco"> | string
    tipoProdutos?: EnumOpcsNullableListFilter<"Banco">
    enderecoId?: StringNullableFilter<"Banco"> | string | null
    feiranteId?: UuidFilter<"Banco"> | string
  }

  export type EnderecoBancoCreateWithoutBancoInput = {
    id?: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
  }

  export type EnderecoBancoUncheckedCreateWithoutBancoInput = {
    id?: string
    rua: string
    setor: string
    numero: string
    latitude: number
    longitude: number
  }

  export type EnderecoBancoCreateOrConnectWithoutBancoInput = {
    where: EnderecoBancoWhereUniqueInput
    create: XOR<EnderecoBancoCreateWithoutBancoInput, EnderecoBancoUncheckedCreateWithoutBancoInput>
  }

  export type FeiranteCreateWithoutBancosInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    usuario: UsuarioCreateNestedOneWithoutFeiranteInput
  }

  export type FeiranteUncheckedCreateWithoutBancosInput = {
    id?: string
    nomeProprietario: string
    cadastroAssosiacao: string
    cpfCnpj: string
    telefone?: string | null
    linkWhatsapp?: string | null
    linkInstagram?: string | null
    linkFacebook?: string | null
    usuarioId: string
  }

  export type FeiranteCreateOrConnectWithoutBancosInput = {
    where: FeiranteWhereUniqueInput
    create: XOR<FeiranteCreateWithoutBancosInput, FeiranteUncheckedCreateWithoutBancosInput>
  }

  export type FavoritoCreateWithoutBancoInput = {
    id?: string
    cliente: ClienteCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutBancoInput = {
    id?: string
    clienteId: string
  }

  export type FavoritoCreateOrConnectWithoutBancoInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput>
  }

  export type FavoritoCreateManyBancoInputEnvelope = {
    data: FavoritoCreateManyBancoInput | FavoritoCreateManyBancoInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutBancoInput = {
    id?: string
    nota: number
    comentario?: string | null
    cliente: ClienteCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutBancoInput = {
    id?: string
    nota: number
    comentario?: string | null
    clienteId: string
  }

  export type AvaliacaoCreateOrConnectWithoutBancoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput>
  }

  export type AvaliacaoCreateManyBancoInputEnvelope = {
    data: AvaliacaoCreateManyBancoInput | AvaliacaoCreateManyBancoInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoBancoUpsertWithoutBancoInput = {
    update: XOR<EnderecoBancoUpdateWithoutBancoInput, EnderecoBancoUncheckedUpdateWithoutBancoInput>
    create: XOR<EnderecoBancoCreateWithoutBancoInput, EnderecoBancoUncheckedCreateWithoutBancoInput>
    where?: EnderecoBancoWhereInput
  }

  export type EnderecoBancoUpdateToOneWithWhereWithoutBancoInput = {
    where?: EnderecoBancoWhereInput
    data: XOR<EnderecoBancoUpdateWithoutBancoInput, EnderecoBancoUncheckedUpdateWithoutBancoInput>
  }

  export type EnderecoBancoUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EnderecoBancoUncheckedUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type FeiranteUpsertWithoutBancosInput = {
    update: XOR<FeiranteUpdateWithoutBancosInput, FeiranteUncheckedUpdateWithoutBancosInput>
    create: XOR<FeiranteCreateWithoutBancosInput, FeiranteUncheckedCreateWithoutBancosInput>
    where?: FeiranteWhereInput
  }

  export type FeiranteUpdateToOneWithWhereWithoutBancosInput = {
    where?: FeiranteWhereInput
    data: XOR<FeiranteUpdateWithoutBancosInput, FeiranteUncheckedUpdateWithoutBancosInput>
  }

  export type FeiranteUpdateWithoutBancosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutFeiranteNestedInput
  }

  export type FeiranteUncheckedUpdateWithoutBancosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProprietario?: StringFieldUpdateOperationsInput | string
    cadastroAssosiacao?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    linkWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    linkInstagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkFacebook?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutBancoInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutBancoInput, FavoritoUncheckedUpdateWithoutBancoInput>
    create: XOR<FavoritoCreateWithoutBancoInput, FavoritoUncheckedCreateWithoutBancoInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutBancoInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutBancoInput, FavoritoUncheckedUpdateWithoutBancoInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutBancoInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutBancoInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutBancoInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutBancoInput, AvaliacaoUncheckedUpdateWithoutBancoInput>
    create: XOR<AvaliacaoCreateWithoutBancoInput, AvaliacaoUncheckedCreateWithoutBancoInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutBancoInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutBancoInput, AvaliacaoUncheckedUpdateWithoutBancoInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutBancoInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutBancoInput>
  }

  export type BancoCreateWithoutEnderecoInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    feirante: FeiranteCreateNestedOneWithoutBancosInput
    favoritos?: FavoritoCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateWithoutEnderecoInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    feiranteId: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutBancoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoCreateOrConnectWithoutEnderecoInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
  }

  export type BancoUpsertWithoutEnderecoInput = {
    update: XOR<BancoUpdateWithoutEnderecoInput, BancoUncheckedUpdateWithoutEnderecoInput>
    create: XOR<BancoCreateWithoutEnderecoInput, BancoUncheckedCreateWithoutEnderecoInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutEnderecoInput, BancoUncheckedUpdateWithoutEnderecoInput>
  }

  export type BancoUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    feirante?: FeiranteUpdateOneRequiredWithoutBancosNestedInput
    favoritos?: FavoritoUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    feiranteId?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type BancoCreateWithoutFavoritosInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoCreateNestedOneWithoutBancoInput
    feirante: FeiranteCreateNestedOneWithoutBancosInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateWithoutFavoritosInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
    feiranteId: string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoCreateOrConnectWithoutFavoritosInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutFavoritosInput, BancoUncheckedCreateWithoutFavoritosInput>
  }

  export type ClienteCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuario: UsuarioCreateNestedOneWithoutClienteInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuarioId: string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutFavoritosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
  }

  export type BancoUpsertWithoutFavoritosInput = {
    update: XOR<BancoUpdateWithoutFavoritosInput, BancoUncheckedUpdateWithoutFavoritosInput>
    create: XOR<BancoCreateWithoutFavoritosInput, BancoUncheckedCreateWithoutFavoritosInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutFavoritosInput, BancoUncheckedUpdateWithoutFavoritosInput>
  }

  export type BancoUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoUpdateOneWithoutBancoNestedInput
    feirante?: FeiranteUpdateOneRequiredWithoutBancosNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
    feiranteId?: StringFieldUpdateOperationsInput | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type ClienteUpsertWithoutFavoritosInput = {
    update: XOR<ClienteUpdateWithoutFavoritosInput, ClienteUncheckedUpdateWithoutFavoritosInput>
    create: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutFavoritosInput, ClienteUncheckedUpdateWithoutFavoritosInput>
  }

  export type ClienteUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuario?: UsuarioUpdateOneRequiredWithoutClienteNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuarioId?: StringFieldUpdateOperationsInput | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateWithoutAvaliacoesInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuario: UsuarioCreateNestedOneWithoutClienteInput
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    nome: string
    cpf: string
    dataNascimento: Date | string
    genero: string
    telefone?: string | null
    interesses?: ClienteCreateinteressesInput | $Enums.Opcs[]
    usuarioId: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAvaliacoesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAvaliacoesInput, ClienteUncheckedCreateWithoutAvaliacoesInput>
  }

  export type BancoCreateWithoutAvaliacoesInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoCreateNestedOneWithoutBancoInput
    feirante: FeiranteCreateNestedOneWithoutBancosInput
    favoritos?: FavoritoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
    feiranteId: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoCreateOrConnectWithoutAvaliacoesInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutAvaliacoesInput, BancoUncheckedCreateWithoutAvaliacoesInput>
  }

  export type ClienteUpsertWithoutAvaliacoesInput = {
    update: XOR<ClienteUpdateWithoutAvaliacoesInput, ClienteUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ClienteCreateWithoutAvaliacoesInput, ClienteUncheckedCreateWithoutAvaliacoesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAvaliacoesInput, ClienteUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ClienteUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuario?: UsuarioUpdateOneRequiredWithoutClienteNestedInput
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    interesses?: ClienteUpdateinteressesInput | $Enums.Opcs[]
    usuarioId?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type BancoUpsertWithoutAvaliacoesInput = {
    update: XOR<BancoUpdateWithoutAvaliacoesInput, BancoUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<BancoCreateWithoutAvaliacoesInput, BancoUncheckedCreateWithoutAvaliacoesInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutAvaliacoesInput, BancoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type BancoUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoUpdateOneWithoutBancoNestedInput
    feirante?: FeiranteUpdateOneRequiredWithoutBancosNestedInput
    favoritos?: FavoritoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
    feiranteId?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type FavoritoCreateManyClienteInput = {
    id?: string
    bancoId: string
  }

  export type AvaliacaoCreateManyClienteInput = {
    id?: string
    nota: number
    comentario?: string | null
    bancoId: string
  }

  export type FavoritoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    banco?: BancoUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: BancoUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    bancoId?: StringFieldUpdateOperationsInput | string
  }

  export type BancoCreateManyFeiranteInput = {
    id?: string
    nomeMarca: string
    foto?: string | null
    horario: string
    descricao: string
    tipoProdutos?: BancoCreatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: string | null
  }

  export type BancoUpdateWithoutFeiranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    endereco?: EnderecoBancoUpdateOneWithoutBancoNestedInput
    favoritos?: FavoritoUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateWithoutFeiranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
    favoritos?: FavoritoUncheckedUpdateManyWithoutBancoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateManyWithoutFeiranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMarca?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipoProdutos?: BancoUpdatetipoProdutosInput | $Enums.Opcs[]
    enderecoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoCreateManyBancoInput = {
    id?: string
    clienteId: string
  }

  export type AvaliacaoCreateManyBancoInput = {
    id?: string
    nota: number
    comentario?: string | null
    clienteId: string
  }

  export type FavoritoUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutBancoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
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