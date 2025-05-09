import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseModel {
  @Field(() => ID)
  id!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
