import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateWorkorderInput } from '../dto/create-workoder.input';
import { Workorder } from '../graphql/workorder.model';
import { UpdateWorkorderInput } from '../dto/update-workorder.input';
import {
  CurrentUser,
  JwtAuthGuard,
  RolesGuard,
  UserRole,
} from '@my-product-app/backend-shared';
import { WorkOrderService } from '../service/workorder.service';
import { UseGuards } from '@nestjs/common';
import { Roles, UserPayload } from '@my-product-app/backend-shared';
import { WorkordersResponse } from '../graphql/workorder-list.model';

@UseGuards(JwtAuthGuard, RolesGuard)
@Resolver(() => Workorder)
export class WorkorderResolver {
  constructor(private readonly workorderService: WorkOrderService) {}

  @Mutation(() => Workorder)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  createWorkOrder(
    @Args('input') input: CreateWorkorderInput,
    @CurrentUser() user: UserPayload
  ) {
    console.log('Creating workorder for user id:', user);
    return this.workorderService.create(input, user);
  }

  @Query(() => WorkordersResponse, { name: 'workorders' })
  async getWorkOrders(
    @Args('workOrderCode', { type: () => String, nullable: true })
    workOrderCode?: string,
    @Args('clientLocation', { type: () => String, nullable: true })
    clientLocation?: string,
    @Args('status', { type: () => String, nullable: true }) status?: string,
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page?: number,
    @Args('pageSize', { type: () => Int, nullable: true, defaultValue: 10 })
    pageSize?: number
  ) {
    console.log('getWorkOrders calling:');

    const filters = Object.fromEntries(
      Object.entries({
        workOrderCode,
        clientLocation,
        status,
        page,
        pageSize,
      }).filter(([_, v]) => v !== undefined)
    );

    const { workorders, total } = await this.workorderService.findFiltered(
      filters
    );

    return { workorders, total };
  }

  @Query(() => Workorder, { name: 'workorder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workorderService.findOne(id);
  }

  @Mutation(() => Workorder)
  updateWorkorder(@Args('input') input: UpdateWorkorderInput) {
    return this.workorderService.update(input.id, input);
  }
}
