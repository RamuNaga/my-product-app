import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  type!: string;

  @Field({ nullable: true })
  contact?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
