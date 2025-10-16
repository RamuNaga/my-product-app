// libs/backend/proto/src/lib/generated/index.ts

// User service
export {
  UserServiceClient,
  CreateUserRequest,
  CreateUserResponse,
  GetUserByIdResponse,
  LoginResponse,
  LoginRequest,
  UserRole as ProtoUserRole,
  FindAllUsersResponse,
  GetUserByIdRequest,
  FindAllUsersRequest,
} from './user';

// Company service
export {
  CompanyServiceClient,
  CreateCompanyRequest,
  CompanyResponse,
  SearchCompanyByNameRequest,
  SearchCompanyByNameResponse,
  CompanyType as ProtoCompanyType,
} from './company';

// Company Location service
export {
  CompanyLocationServiceClient,
  CreateCompanyLocationRequest,
  CompanyLocationResponse,
  GetAllCompanyLocationsRequest,
  GetAllCompanyLocationsResponse,
} from './company-location';

// Product service
export {
  ProductServiceClient,
  CreateProductRequest,
  ProductResponse,
  PRODUCT_SERVICE_NAME,
  EmptyRequest,
  ProductListResponse,
} from './product';

// Wrappers (keep them all, no duplication issues here)
export * from './google/protobuf/wrappers';

// Workorder service
export {
  WorkOrderServiceClient,
  CreateWorkOrderRequest,
  WorkOrderResponse,
} from './workorder';
