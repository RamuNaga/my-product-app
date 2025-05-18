import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class PaginationMeta {
  @Field(() => Int)
  totalItems!: number;

  @Field(() => Int)
  itemCount!: number;

  @Field(() => Int)
  itemsPerPage!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => Int)
  currentPage!: number;
}

@ObjectType()
export class PaginatedResponse<TItem> {
  @Field(() => [Object], { nullable: true })
  items!: TItem[];

  @Field(() => PaginationMeta)
  meta!: PaginationMeta;
}
