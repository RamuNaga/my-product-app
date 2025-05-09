// src/product/service/product.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateProductInput } from '../dto/create-product.input';
import { UpdateProductInput } from '../dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // Create a new product
  create(data: CreateProductInput) {
    return this.prisma.product.create({
      data, // The product data will be passed directly
    });
  }

  // Find all products
  findAll() {
    return this.prisma.product.findMany(); // Return a list of products
  }

  // Find a product by its ID
  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id }, // Find the product by its ID
    });
  }

  // Update an existing product
  update(id: number, data: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id }, // Find the product by ID
      data, // Update the product data
    });
  }

  // Delete a product by its ID
  remove(id: number) {
    return this.prisma.product.delete({
      where: { id }, // Find the product by its ID and delete it
    });
  }
}
