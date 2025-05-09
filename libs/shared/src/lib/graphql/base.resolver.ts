// src/shared/graphql/base.resolver.ts
import { Query, Mutation, Args, Resolver, ID } from '@nestjs/graphql';
import { PrismaService } from '@my-product-app/prisma';

type ClassType<T = any> = new (...args: any[]) => T;

/**
 * A generic base resolver that provides CRUD operations using PrismaService
 */
export function createBaseResolver<TModel, CreateInput, UpdateInput>(
  suffix: string,
  returnType: ClassType,
  createInputType: ClassType,
  updateInputType: ClassType,
  getModel: (prisma: PrismaService) => {
    findMany: () => Promise<TModel[]>;
    findUnique: (args: { where: { id: number } }) => Promise<TModel | null>;
    create: (args: { data: CreateInput }) => Promise<TModel>;
    update: (args: {
      where: { id: number };
      data: UpdateInput;
    }) => Promise<TModel>;
    delete: (args: { where: { id: number } }) => Promise<TModel>;
  }
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    constructor(public prisma: PrismaService) {}

    @Query(() => [returnType], { name: `findAll${suffix}` })
    async findAll(): Promise<TModel[]> {
      return getModel(this.prisma).findMany();
    }

    @Query(() => returnType, { name: `findOne${suffix}` })
    async findOne(
      @Args('id', { type: () => ID }) id: number
    ): Promise<TModel | null> {
      return getModel(this.prisma).findUnique({ where: { id } });
    }

    @Mutation(() => returnType, { name: `create${suffix}` })
    async create(
      @Args('data', { type: () => createInputType }) data: CreateInput
    ): Promise<TModel> {
      return getModel(this.prisma).create({ data });
    }

    @Mutation(() => returnType, { name: `update${suffix}` })
    async update(
      @Args('id', { type: () => ID }) id: number,
      @Args('data', { type: () => updateInputType }) data: UpdateInput
    ): Promise<TModel> {
      return getModel(this.prisma).update({ where: { id }, data });
    }

    @Mutation(() => returnType, { name: `delete${suffix}` })
    async delete(@Args('id', { type: () => ID }) id: number): Promise<TModel> {
      return getModel(this.prisma).delete({ where: { id } });
    }
  }

  return BaseResolver;
}
