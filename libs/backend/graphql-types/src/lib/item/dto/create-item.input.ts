import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import {
  ItemKind,
  SupplyType,
  ProcessType,
  UnitOfMeasure,
} from '../graphql/item.enums';

@InputType()
export class CreateItemInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ItemKind)
  @IsEnum(ItemKind)
  kind!: ItemKind;

  @Field(() => SupplyType)
  @IsEnum(SupplyType)
  supplyType!: SupplyType;

  @Field(() => ProcessType)
  @IsEnum(ProcessType)
  processType!: ProcessType;

  @Field(() => UnitOfMeasure)
  @IsEnum(UnitOfMeasure)
  baseUnit!: UnitOfMeasure;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  allergenDeclaration?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  origin?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  manufacturer?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  defaultSupplierId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  packSizeDescription?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  netContentDescription?: string;
}
