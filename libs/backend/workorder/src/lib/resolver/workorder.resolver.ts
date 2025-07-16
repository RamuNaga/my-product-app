import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkorderService } from '../service/workorder.service';
import { CreateWorkorderInput } from '../dto/create-workoder.input';
import { Workorder } from '../graphql/workorder.model';
import { UpdateWorkorderInput } from '../dto/update-workorder.input';
import { CurrentUser } from '@my-product-app/backend-shared';

@Resolver(() => Workorder)
export class WorkorderResolver {
  constructor(private readonly workorderService: WorkorderService) {}

  @Mutation(() => Workorder)
  createWorkorder(
    @Args('input') input: CreateWorkorderInput,
    @CurrentUser() user: any
  ) {
    console.log('createWorkorder  --- user id', user.id);
    return this.workorderService.create(input, user.id);
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
