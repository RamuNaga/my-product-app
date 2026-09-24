import { registerEnumType } from '@nestjs/graphql';

export enum CompanyType {
  MANUFACTURER = 'MANUFACTURER',
  SUPPLIER = 'SUPPLIER',
  CLIENT = 'CLIENT',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  STAFF = 'STAFF',
  OPERATOR = 'OPERATOR',
  VIEWER = 'VIEWER',
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum WorkOrderStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  REQUESTED = 'WORK_ORDER_REQUESTED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'Roles assigned to users',
});

registerEnumType(CompanyType, {
  name: 'CompanyType',
});

registerEnumType(WorkOrderStatus, {
  name: 'WorkOrderStatus',
});

registerEnumType(Priority, {
  name: 'Priority',
});
