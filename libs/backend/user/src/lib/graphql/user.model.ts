// user.model.ts
import {
  registerEnumType,
  ObjectType,
  Field,
  Int,
  HideField,
} from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  OPERATOR = 'OPERATOR',
  STAFF = 'STAFF',
  VIEWER = 'VIEWER',
}

// Register enum with GraphQL so it can be used as a type in your schema
registerEnumType(UserRole, {
  name: 'UserRole', // this will be the GraphQL enum name
  description: 'Roles assigned to users',
});

@ObjectType()
export class User {
  @Field(() => Int)
  id!: number;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @HideField()
  password?: string;

  @Field(() => UserRole)
  role!: UserRole;

  @Field(() => Int)
  companyId!: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
