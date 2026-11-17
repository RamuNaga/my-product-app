import { ObjectType, Field, Int } from '@nestjs/graphql';

import { ItemKind, SupplyType, ProcessType, UnitOfMeasure } from './item.enums';

@ObjectType()
export class Item {
  @Field(() => Int)
  id!: number;

  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => ItemKind)
  kind!: ItemKind;

  @Field(() => SupplyType)
  supplyType!: SupplyType;

  @Field(() => ProcessType)
  processType!: ProcessType;

  @Field(() => UnitOfMeasure)
  baseUnit!: UnitOfMeasure;

  @Field()
  allergenDeclaration!: string;

  @Field()
  origin!: string;

  @Field()
  manufacturer!: string;

  @Field(() => Int, { nullable: true })
  defaultSupplierId?: number | null;

  @Field()
  packSizeDescription!: string;

  @Field()
  netContentDescription!: string;

  @Field()
  isActive!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
