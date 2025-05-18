import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id!: number;
}

// import { InputType, PartialType } from '@nestjs/graphql';
// import { CreateProductInput } from './create-product.input';
// import { BaseUpdateInput } from '@my-product-app/shared';
// import { MergeInputTypes } from '@my-product-app/shared';

// const PartialProductInput = PartialType(CreateProductInput);

// @InputType()
// export class UpdateProductInput extends MergeInputTypes(
//   PartialProductInput,
//   BaseUpdateInput,
//   'UpdateProductInput'
// ) {}
