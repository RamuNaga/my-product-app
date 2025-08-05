import { User as GQLUser, UserRole } from '../graphql/user.model';

// Interface for internal user type WITHOUT password
export interface IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
}

// User type used externally (from GraphQL model) but WITHOUT password field
export type UserWithoutPassword = Omit<GQLUser, 'password'>;
