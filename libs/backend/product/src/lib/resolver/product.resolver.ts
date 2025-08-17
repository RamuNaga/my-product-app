import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '@my-product-app/prisma';
import { Product } from '../graphql/product.model';
import { CreateProductInput } from '../dto/create-product.input';
import { UpdateProductInput } from '../dto/update-product.input';
import { createBaseResolver } from '@my-product-app/backend-shared'; // Importing the base resolver

// Create the base resolver for Product with the provided arguments
const BaseProductResolver = createBaseResolver(
  'Product', // Suffix for the CRUD methods (e.g., 'createProduct', 'findOneProduct')
  Product, // Return type (Product model)
  CreateProductInput, // Create input type (CreateProductInput)
  UpdateProductInput, // Update input type (UpdateProductInput)
  (prisma: PrismaService) => prisma.product // Prisma model to use (product)
);

@Resolver(() => Product)
export class ProductResolver extends BaseProductResolver {
  constructor(public override prisma: PrismaService) {
    super(prisma); // Pass prisma to the base resolver constructor
  }

  @Query(() => [Product], { name: 'products' })
  async products(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map((p) => ({
      ...p,
      image: p.image ?? '',
    }));
  }
}
