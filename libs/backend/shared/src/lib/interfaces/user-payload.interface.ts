import { UserRole } from '@my-product-app/backend-shared-types';

export interface UserPayload {
  id: number;
  email: string;
  role: UserRole;
  companyId?: number;
}
