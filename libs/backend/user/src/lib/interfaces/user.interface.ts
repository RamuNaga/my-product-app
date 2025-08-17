import { User as GQLUser } from '../graphql/user.model';
import { UserRole } from '@my-product-app/backend-shared';


export interface IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  companyId?: number;
  createdAt: Date;
  updatedAt: Date;
}

// User type used externally (from GraphQL model) but WITHOUT password field
export type UserWithoutPassword = Omit<GQLUser, 'password'>;
