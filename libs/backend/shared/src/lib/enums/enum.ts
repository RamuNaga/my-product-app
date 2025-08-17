import { registerEnumType } from '@nestjs/graphql';
import { WorkOrderStatus, Priority, UserRole } from '@prisma/client';

registerEnumType(WorkOrderStatus, {
  name: 'WorkOrderStatus',
});

registerEnumType(Priority, {
  name: 'Priority',
});

registerEnumType(UserRole, {
  name: 'UserRole', // this will be the GraphQL enum name
  description: 'Roles assigned to users',
});

export { WorkOrderStatus, Priority, UserRole };
