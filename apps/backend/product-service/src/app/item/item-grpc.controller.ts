import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateItemRequest,
  GetItemByIdRequest,
  EmptyRequest,
  CreateItemsRequest,
  UpdateItemRequest,
  ChangeItemActiveStatusRequest,
} from '@my-product-app/backend-proto/generated';
import { ItemGrpcService } from './item-grpc.service';

@Controller()
export class ItemGrpcController {
  constructor(private readonly itemService: ItemGrpcService) {}

  @GrpcMethod('ItemService', 'CreateItem')
  async createItem(data: CreateItemRequest) {
    return this.itemService.createItem(data);
  }

  @GrpcMethod('ItemService', 'CreateItems')
  async createItems(data: CreateItemsRequest) {
    return this.itemService.createItems(data);
  }

  @GrpcMethod('ItemService', 'GetItemById')
  async getItemById(data: GetItemByIdRequest) {
    return this.itemService.getItemById(data);
  }

  @GrpcMethod('ItemService', 'GetAllItems')
  async getAllItems(data: EmptyRequest) {
    return this.itemService.getAllItems(data);
  }

  @GrpcMethod('ItemService', 'UpdateItem')
  async updateItem(data: UpdateItemRequest) {
    const supplierField = data.defaultSupplierId as
      number | { value: number } | undefined;

    const defaultSupplierId =
      typeof supplierField === 'object' && supplierField !== null
        ? supplierField.value
        : supplierField;

    return this.itemService.updateItem({
      ...data,
      defaultSupplierId,
    });
  }

  @GrpcMethod('ItemService', 'DeactivateItem')
  async deactivateItem(data: ChangeItemActiveStatusRequest) {
    return this.itemService.deactivateItem(data);
  }

  @GrpcMethod('ItemService', 'ReactivateItem')
  async reactivateItem(data: ChangeItemActiveStatusRequest) {
    return this.itemService.reactivateItem(data);
  }
}
