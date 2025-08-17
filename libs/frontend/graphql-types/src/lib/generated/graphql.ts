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
  companyId?: InputMaybe<Scalars['Float']['input']>;
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

export type CreateWorkorderInput = {
  clientLocation: Scalars['String']['input'];
  deliveryDate: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  vendorOrClient: Scalars['String']['input'];
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
  createWorkOrder: Workorder;
  deleteProduct: Product;
  login: LoginResponse;
  registerCompanyUser: Scalars['Boolean']['output'];
  updateProduct: Product;
  updateWorkorder: Workorder;
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


export type MutationCreateWorkOrderArgs = {
  input: CreateWorkorderInput;
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


export type MutationUpdateWorkorderArgs = {
  input: UpdateWorkorderInput;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Int']['output'];
  itemCount: Scalars['Int']['output'];
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

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
  companyLocations: Array<CompanyLocation>;
  findAllProduct: Array<Product>;
  findOneProduct: Product;
  getAllUsers: Array<User>;
  isEmailAvailable: Scalars['Boolean']['output'];
  ping: Scalars['String']['output'];
  products: Array<Product>;
  searchCompanies: Array<Company>;
  workorder: Workorder;
  workorders: Array<Workorder>;
};


export type QueryCompanyLocationsArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryFindOneProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QuerySearchCompaniesArgs = {
  searchTerm: Scalars['String']['input'];
};


export type QueryWorkorderArgs = {
  id: Scalars['Int']['input'];
};

export type RegisterCompanyUserInput = {
  company?: InputMaybe<CreateCompanyInput>;
  existingCompanyId?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<CreateLocationInput>;
  user: CreateUserInput;
};

export type UpdateProductInput = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productCode?: InputMaybe<Scalars['String']['input']>;
  productWeight?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkorderInput = {
  clientLocation?: InputMaybe<Scalars['String']['input']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  vendorOrClient?: InputMaybe<Scalars['String']['input']>;
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

export enum WorkOrderStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED'
}

export type Workorder = {
  __typename?: 'Workorder';
  approvedBy?: Maybe<User>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientLocation: Scalars['String']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  deliveryDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  priority?: Maybe<Priority>;
  product: Product;
  quantity: Scalars['Int']['output'];
  status: WorkOrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  vendorOrClient: Scalars['String']['output'];
  workOrderCode: Scalars['String']['output'];
};

export type CreateCompanyLocationMutationVariables = Exact<{
  createLocationInput: CreateLocationInput;
}>;


export type CreateCompanyLocationMutation = { __typename?: 'Mutation', createCompanyLocation: { __typename?: 'CompanyLocation', id: number, location: string, address: string, city: string, country: string, postalCode: string, county: string, contact?: string | null, companyId?: number | null } };

export type GetCompanyLocationsQueryVariables = Exact<{
  companyId: Scalars['Int']['input'];
}>;


export type GetCompanyLocationsQuery = { __typename?: 'Query', companyLocations: Array<{ __typename?: 'CompanyLocation', id: number, location: string }> };

export type CreateCompanyMutationVariables = Exact<{
  createCompanyInput: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', id: number, name: string, type: CompanyType, contact?: string | null } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'User', id: number, email: string, username: string, role: UserRole, companyId?: number | null } } };

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

export type CreateWorkOrderMutationVariables = Exact<{
  input: CreateWorkorderInput;
}>;


export type CreateWorkOrderMutation = { __typename?: 'Mutation', createWorkOrder: { __typename?: 'Workorder', id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null } };

export type UpdateWorkOrderMutationVariables = Exact<{
  input: UpdateWorkorderInput;
}>;


export type UpdateWorkOrderMutation = { __typename?: 'Mutation', updateWorkorder: { __typename?: 'Workorder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null, product: { __typename?: 'Product', id: number, name: string, productCode: string, price: number }, createdBy: { __typename?: 'User', id: number, username: string, email: string } } };

export type WorkordersQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkordersQuery = { __typename?: 'Query', workorders: Array<{ __typename?: 'Workorder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null, product: { __typename?: 'Product', id: number, name: string, productCode: string, price: number }, createdBy: { __typename?: 'User', id: number, username: string, email: string } }> };

export type WorkorderQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type WorkorderQuery = { __typename?: 'Query', workorder: { __typename?: 'Workorder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null, product: { __typename?: 'Product', id: number, name: string, productCode: string, price: number }, createdBy: { __typename?: 'User', id: number, username: string, email: string } } };

export type WorkorderBaseFieldsFragment = { __typename?: 'Workorder', id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null };

export type WorkorderFieldsFragment = { __typename?: 'Workorder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null, product: { __typename?: 'Product', id: number, name: string, productCode: string, price: number }, createdBy: { __typename?: 'User', id: number, username: string, email: string } };

export const WorkorderBaseFieldsFragmentDoc = gql`
    fragment WorkorderBaseFields on Workorder {
  id
  clientLocation
  vendorOrClient
  quantity
  deliveryDate
  description
}
    `;
export const WorkorderFieldsFragmentDoc = gql`
    fragment WorkorderFields on Workorder {
  ...WorkorderBaseFields
  workOrderCode
  status
  priority
  product {
    id
    name
    productCode
    price
  }
  createdBy {
    id
    username
    email
  }
  createdAt
  updatedAt
}
    ${WorkorderBaseFieldsFragmentDoc}`;
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
export const GetCompanyLocationsDocument = gql`
    query getCompanyLocations($companyId: Int!) {
  companyLocations(companyId: $companyId) {
    id
    location
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCompanyLocationsGQL extends Apollo.Query<GetCompanyLocationsQuery, GetCompanyLocationsQueryVariables> {
    document = GetCompanyLocationsDocument;
    
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
      companyId
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
export const CreateWorkOrderDocument = gql`
    mutation CreateWorkOrder($input: CreateWorkorderInput!) {
  createWorkOrder(input: $input) {
    ...WorkorderBaseFields
  }
}
    ${WorkorderBaseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateWorkOrderGQL extends Apollo.Mutation<CreateWorkOrderMutation, CreateWorkOrderMutationVariables> {
    document = CreateWorkOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateWorkOrderDocument = gql`
    mutation UpdateWorkOrder($input: UpdateWorkorderInput!) {
  updateWorkorder(input: $input) {
    ...WorkorderFields
  }
}
    ${WorkorderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateWorkOrderGQL extends Apollo.Mutation<UpdateWorkOrderMutation, UpdateWorkOrderMutationVariables> {
    document = UpdateWorkOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WorkordersDocument = gql`
    query Workorders {
  workorders {
    ...WorkorderFields
  }
}
    ${WorkorderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class WorkordersGQL extends Apollo.Query<WorkordersQuery, WorkordersQueryVariables> {
    document = WorkordersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WorkorderDocument = gql`
    query Workorder($id: Int!) {
  workorder(id: $id) {
    ...WorkorderFields
  }
}
    ${WorkorderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class WorkorderGQL extends Apollo.Query<WorkorderQuery, WorkorderQueryVariables> {
    document = WorkorderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }