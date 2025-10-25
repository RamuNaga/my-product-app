import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from '@my-product-app/backend-graphql-types';
import { CreateProductInput } from '@my-product-app/backend-graphql-types';
import { ProductGrpcClientService } from '@my-product-app/product';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productGrpcClient: ProductGrpcClientService) {}

  @Query(() => [Product], { name: 'products' })
  async products(): Promise<Product[]> {
    console.log('Fetching products from gRPC service...');
    try {
      const res = await this.productGrpcClient.getAllProducts();

      return res.products.map((p) => ({
        ...p,
        image: p.image ?? '',
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
      })) as Product[];
    } catch (error) {
      console.error('Error fetching products from gRPC:', error);
      throw new Error('Failed to fetch products from Product Service');
    }
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') input: CreateProductInput) {
    const res = await this.productGrpcClient.createProduct(input);
    return res.product;
  }
}
