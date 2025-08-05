// src/user/dto/create-user.input.ts

import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty({ message: 'Username is required' })
  username!: string;

  @Field()
  @IsEmail({}, { message: 'Invalid email format' })
  email!: string;

  @Field()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password!: string;

  @Field()
  @IsNotEmpty({ message: 'Role is required' })
  role!: string;
}
