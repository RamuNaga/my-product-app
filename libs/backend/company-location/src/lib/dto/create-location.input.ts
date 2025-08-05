import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateLocationInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Location name is required' })
  location!: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Address is required' })
  address!: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'City is required' })
  city!: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'County is required' })
  county!: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Postal code is required' })
  postalCode!: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Country is required' })
  country!: string;

  @Field()
  @IsString()
  @IsOptional()
  contact?: string;

  @Field()
  @IsInt()
  @Type(() => Number) // transforms incoming value to number
  companyId!: number; // required field to link location to company
}
