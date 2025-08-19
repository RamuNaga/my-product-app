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

  @Query(() => [Workorder], { name: 'workorders' })
  findAll() {
    return this.workorderService.findAll();
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
