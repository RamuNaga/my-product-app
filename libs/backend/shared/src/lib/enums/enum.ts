import { registerEnumType } from '@nestjs/graphql';

import { UserRole } from '@my-product-app/backend-prisma/user-client';

import { CompanyType } from '@my-product-app/backend-prisma/company-client';

// import {
//   WorkOrderStatus,
//   Priority,
// } from '@my-product-app/backend-prisma/workorder-client';

// registerEnumType(WorkOrderStatus, {
//   name: 'WorkOrderStatus',
// });

// registerEnumType(Priority, {
//   name: 'Priority',
// });

registerEnumType(UserRole, {
  name: 'UserRole', // this will be the GraphQL enum name
  description: 'Roles assigned to users',
});

registerEnumType(CompanyType, {
  name: 'CompanyType', // this will be the GraphQL enum name
});

// WorkOrderStatus, Priority,
export { UserRole, CompanyType };
