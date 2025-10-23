import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../graphql/user.model';

@ObjectType()
export class LoginResponse {
  @Field(() => User)
  user!: User;

  @Field()
  accessToken!: string;
}
