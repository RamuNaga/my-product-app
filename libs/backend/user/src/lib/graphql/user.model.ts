// user.model.ts
import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { UserRole } from '@my-product-app/backend-shared';

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

  @Field({ nullable: true })
  companyId?: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
