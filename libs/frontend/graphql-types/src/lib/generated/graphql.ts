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

export type ApproveWorkorderInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  comments?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  priority?: InputMaybe<Priority>;
  status: WorkOrderStatus;
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
  companyId: Scalars['Float']['output'];
  contact?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  county: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

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
  approveWorkorder: WorkOrder;
  createCompany: Company;
  createCompanyLocation: CompanyLocation;
  createProduct: Product;
  createUser: User;
  createWorkOrder: WorkOrder;
  login: LoginResponse;
  registerCompanyUser: Scalars['Boolean']['output'];
  updateWorkorder: WorkOrder;
};


export type MutationApproveWorkorderArgs = {
  input: ApproveWorkorderInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateCompanyLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWorkOrderArgs = {
  input: CreateWorkorderInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterCompanyUserArgs = {
  registerCompanyUserInput: RegisterCompanyUserInput;
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
  ping: Scalars['String']['output'];
  products: Array<Product>;
  searchCompanies: Array<Company>;
  workorder: WorkOrder;
  workorders: WorkordersResponse;
};


export type QueryCompanyLocationsArgs = {
  companyId: Scalars['Int']['input'];
};


export type QuerySearchCompaniesArgs = {
  searchTerm: Scalars['String']['input'];
};


export type QueryWorkorderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWorkordersArgs = {
  clientLocation?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vendorOrClient?: InputMaybe<Scalars['String']['input']>;
  workOrderCode?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterCompanyUserInput = {
  company?: InputMaybe<CreateCompanyInput>;
  existingCompanyId?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<CreateLocationInput>;
  user: CreateUserInput;
};

export type UpdateWorkorderInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clientLocation?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  priority?: InputMaybe<Priority>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status: WorkOrderStatus;
  vendorOrClient?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  role: UserRole;
  updatedAt: Scalars['String']['output'];
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

export type WorkOrder = {
  __typename?: 'WorkOrder';
  approvedById?: Maybe<Scalars['Int']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientLocation: Scalars['String']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['Int']['output'];
  deliveryDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  priority?: Maybe<Priority>;
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  status: WorkOrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  vendorOrClient: Scalars['String']['output'];
  workOrderCode: Scalars['String']['output'];
};

export enum WorkOrderStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED'
}

export type WorkordersResponse = {
  __typename?: 'WorkordersResponse';
  total: Scalars['Int']['output'];
  workorders: Array<WorkOrder>;
};

export type CreateCompanyLocationMutationVariables = Exact<{
  createLocationInput: CreateLocationInput;
}>;


export type CreateCompanyLocationMutation = { __typename?: 'Mutation', createCompanyLocation: { __typename?: 'CompanyLocation', id: number, location: string, address: string, city: string, country: string, postalCode: string, county: string, contact?: string | null, companyId: number } };

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

export type FindAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, productCode: string, name: string, description: string, image?: string | null, productWeight: string, price: number, createdAt: any }> };

export type ApproveWorkOrderMutationVariables = Exact<{
  input: ApproveWorkorderInput;
}>;


export type ApproveWorkOrderMutation = { __typename?: 'Mutation', approveWorkorder: { __typename?: 'WorkOrder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, productId: number, createdById: number, approvedById?: number | null, companyId?: number | null, attachments?: Array<string | null> | null, assignedTo?: string | null, comments?: string | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null } };

export type CreateWorkOrderMutationVariables = Exact<{
  input: CreateWorkorderInput;
}>;


export type CreateWorkOrderMutation = { __typename?: 'Mutation', createWorkOrder: { __typename?: 'WorkOrder', id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null } };

export type GetWorkOrdersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  workOrderCode?: InputMaybe<Scalars['String']['input']>;
  clientLocation?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetWorkOrdersQuery = { __typename?: 'Query', workorders: { __typename?: 'WorkordersResponse', total: number, workorders: Array<{ __typename?: 'WorkOrder', id: number, workOrderCode: string, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, status: WorkOrderStatus, priority?: Priority | null, productId: number }> } };

export type UpdateWorkOrderMutationVariables = Exact<{
  input: UpdateWorkorderInput;
}>;


export type UpdateWorkOrderMutation = { __typename?: 'Mutation', updateWorkorder: { __typename?: 'WorkOrder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, productId: number, createdById: number, approvedById?: number | null, companyId?: number | null, attachments?: Array<string | null> | null, assignedTo?: string | null, comments?: string | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null } };

export type WorkorderBaseFieldsFragment = { __typename?: 'WorkOrder', id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null };

export type WorkorderFieldsFragment = { __typename?: 'WorkOrder', workOrderCode: string, status: WorkOrderStatus, priority?: Priority | null, productId: number, createdById: number, approvedById?: number | null, companyId?: number | null, attachments?: Array<string | null> | null, assignedTo?: string | null, comments?: string | null, createdAt: any, updatedAt: any, id: number, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, description?: string | null };

export type WorkorderListFieldsFragment = { __typename?: 'WorkOrder', id: number, workOrderCode: string, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, status: WorkOrderStatus, priority?: Priority | null, productId: number };

export type WorkorderDetailsFieldsFragment = { __typename?: 'WorkOrder', description?: string | null, productId: number, createdById: number, approvedById?: number | null, companyId?: number | null, attachments?: Array<string | null> | null, assignedTo?: string | null, comments?: string | null, createdAt: any, updatedAt: any, id: number, workOrderCode: string, clientLocation: string, vendorOrClient: string, quantity: number, deliveryDate: any, status: WorkOrderStatus, priority?: Priority | null };

export const WorkorderBaseFieldsFragmentDoc = gql`
    fragment WorkorderBaseFields on WorkOrder {
  id
  clientLocation
  vendorOrClient
  quantity
  deliveryDate
  description
}
    `;
export const WorkorderFieldsFragmentDoc = gql`
    fragment WorkorderFields on WorkOrder {
  ...WorkorderBaseFields
  workOrderCode
  status
  priority
  productId
  createdById
  approvedById
  companyId
  attachments
  assignedTo
  comments
  createdAt
  updatedAt
}
    ${WorkorderBaseFieldsFragmentDoc}`;
export const WorkorderListFieldsFragmentDoc = gql`
    fragment WorkorderListFields on WorkOrder {
  id
  workOrderCode
  clientLocation
  vendorOrClient
  quantity
  deliveryDate
  status
  priority
  productId
}
    `;
export const WorkorderDetailsFieldsFragmentDoc = gql`
    fragment WorkorderDetailsFields on WorkOrder {
  ...WorkorderListFields
  description
  productId
  createdById
  approvedById
  companyId
  attachments
  assignedTo
  comments
  createdAt
  updatedAt
}
    ${WorkorderListFieldsFragmentDoc}`;
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
export const FindAllProductsDocument = gql`
    query findAllProducts {
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
  export class FindAllProductsGQL extends Apollo.Query<FindAllProductsQuery, FindAllProductsQueryVariables> {
    document = FindAllProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ApproveWorkOrderDocument = gql`
    mutation ApproveWorkOrder($input: ApproveWorkorderInput!) {
  approveWorkorder(input: $input) {
    ...WorkorderFields
  }
}
    ${WorkorderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ApproveWorkOrderGQL extends Apollo.Mutation<ApproveWorkOrderMutation, ApproveWorkOrderMutationVariables> {
    document = ApproveWorkOrderDocument;
    
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
export const GetWorkOrdersDocument = gql`
    query GetWorkOrders($page: Int, $pageSize: Int, $workOrderCode: String, $clientLocation: String, $status: String) {
  workorders(
    page: $page
    pageSize: $pageSize
    workOrderCode: $workOrderCode
    clientLocation: $clientLocation
    status: $status
  ) {
    workorders {
      ...WorkorderListFields
    }
    total
  }
}
    ${WorkorderListFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWorkOrdersGQL extends Apollo.Query<GetWorkOrdersQuery, GetWorkOrdersQueryVariables> {
    document = GetWorkOrdersDocument;
    
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