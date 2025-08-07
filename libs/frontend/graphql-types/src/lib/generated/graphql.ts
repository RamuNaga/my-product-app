import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Company = {
  __typename?: 'Company';
  contact?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: CompanyType;
};

export type CompanyLocation = {
  __typename?: 'CompanyLocation';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  companyId?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  county: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Type of company */
export enum CompanyType {
  Client = 'CLIENT',
  Manufacturer = 'MANUFACTURER',
  Supplier = 'SUPPLIER'
}

export type CreateCompanyInput = {
  contact: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: CompanyType;
};

export type CreateLocationInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  companyId?: InputMaybe<Scalars['Float']['input']>;
  contact: Scalars['String']['input'];
  country: Scalars['String']['input'];
  county: Scalars['String']['input'];
  location: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
};

export type CreateProductInput = {
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productCode: Scalars['String']['input'];
  productWeight: Scalars['String']['input'];
};

export type CreateUserInput = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createCompanyLocation: CompanyLocation;
  createProduct: Product;
  createUser: User;
  deleteProduct: Product;
  login: LoginResponse;
  registerCompanyUser: Scalars['Boolean']['output'];
  updateProduct: Product;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateCompanyLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterCompanyUserArgs = {
  registerCompanyUserInput: RegisterCompanyUserInput;
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  id: Scalars['ID']['input'];
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Int']['output'];
  itemCount: Scalars['Int']['output'];
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Product = {
  __typename?: 'Product';
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productCode: Scalars['String']['output'];
  productWeight: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllProduct: Array<Product>;
  findOneProduct: Product;
  getAllUsers: Array<User>;
  isEmailAvailable: Scalars['Boolean']['output'];
  ping: Scalars['String']['output'];
  products: Array<Product>;
};


export type QueryFindOneProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
};

export type RegisterCompanyUserInput = {
  company: CreateCompanyInput;
  location: CreateLocationInput;
  user: CreateUserInput;
};

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productCode?: InputMaybe<Scalars['String']['input']>;
  productWeight?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  companyId?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

/** Roles assigned to users */
export enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Operator = 'OPERATOR',
  Staff = 'STAFF',
  Viewer = 'VIEWER'
}

export type CreateCompanyLocationMutationVariables = Exact<{
  createLocationInput: CreateLocationInput;
}>;


export type CreateCompanyLocationMutation = { __typename?: 'Mutation', createCompanyLocation: { __typename?: 'CompanyLocation', id: number, location: string, address: string, city: string, country: string, postalCode: string, county: string, contact?: string | null, companyId?: number | null } };

export type CreateCompanyMutationVariables = Exact<{
  createCompanyInput: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', id: number, name: string, type: CompanyType, contact?: string | null } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'User', id: number, email: string, username: string, role: UserRole } } };

export type RegisterCompanyUserMutationVariables = Exact<{
  registerCompanyUserInput: RegisterCompanyUserInput;
}>;


export type RegisterCompanyUserMutation = { __typename?: 'Mutation', registerCompanyUser: boolean };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, email: string, username: string, role: UserRole } };

export type FindAllProductQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProductQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, productCode: string, name: string, description: string, image?: string | null, productWeight: string, price: number, createdAt: any }> };

export const CreateCompanyLocationDocument = gql`
    mutation createCompanyLocation($createLocationInput: CreateLocationInput!) {
  createCompanyLocation(createLocationInput: $createLocationInput) {
    id
    location
    address
    city
    country
    postalCode
    county
    contact
    companyId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCompanyLocationGQL extends Apollo.Mutation<CreateCompanyLocationMutation, CreateCompanyLocationMutationVariables> {
    document = CreateCompanyLocationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCompanyDocument = gql`
    mutation createCompany($createCompanyInput: CreateCompanyInput!) {
  createCompany(createCompanyInput: $createCompanyInput) {
    id
    name
    type
    contact
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCompanyGQL extends Apollo.Mutation<CreateCompanyMutation, CreateCompanyMutationVariables> {
    document = CreateCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    accessToken
    user {
      id
      email
      username
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterCompanyUserDocument = gql`
    mutation registerCompanyUser($registerCompanyUserInput: RegisterCompanyUserInput!) {
  registerCompanyUser(registerCompanyUserInput: $registerCompanyUserInput)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterCompanyUserGQL extends Apollo.Mutation<RegisterCompanyUserMutation, RegisterCompanyUserMutationVariables> {
    document = RegisterCompanyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    email
    username
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindAllProductDocument = gql`
    query findAllProduct {
  products {
    id
    productCode
    name
    description
    image
    productWeight
    price
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindAllProductGQL extends Apollo.Query<FindAllProductQuery, FindAllProductQueryVariables> {
    document = FindAllProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }