import { UserRole } from '../enums/enum';

export interface UserPayload {
  id: number;
  email: string;
  role: UserRole;
  companyId?: number;
}
