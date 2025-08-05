import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsEnum, IsInt } from 'class-validator';
import { UserRole } from '../graphql/user.model'; // or wherever your enum is defined

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

  @Field(() => UserRole)
  @IsEnum(UserRole, { message: 'Invalid role' })
  role!: UserRole;

  @Field(() => Int)
  @IsInt({ message: 'Company ID must be a number' })
  companyId!: number;
}
