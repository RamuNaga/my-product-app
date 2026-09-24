import { SetMetadata } from '@nestjs/common'; // import your UserRole enum
import { UserRole } from '@my-product-app/backend-shared-types';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
