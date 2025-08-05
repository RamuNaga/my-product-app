import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyLocation {
  @Field(() => Int)
  id!: number;

  @Field()
  location!: string;

  @Field()
  address!: string;

  @Field()
  city!: string;

  @Field() // often optional
  county!: string;

  @Field()
  postalCode!: string;

  @Field()
  country!: string;

  @Field({ nullable: true })
  contact?: string;

  @Field(() => Int)
  companyId!: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
