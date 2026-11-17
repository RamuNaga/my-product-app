import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import {
  GrpcCorrelationMetadataService,
  PRODUCT_SERVICE,
} from '@my-product-app/backend-shared';

import {
  ItemServiceClient,
  ITEM_SERVICE_NAME,
  CreateItemRequest,
  CreateItemsRequest,
  GetItemByIdRequest,
  UpdateItemRequest,
  ChangeItemActiveStatusRequest,
  ItemResponse,
  ItemListResponse,
  CreateItemsResponse,
} from '@my-product-app/backend-proto/generated';

@Injectable()
export class ItemGrpcClientService implements OnModuleInit {
  private itemService!: ItemServiceClient;

  constructor(
    @Inject(PRODUCT_SERVICE) private readonly client: ClientGrpc,
    private readonly grpcMetadata: GrpcCorrelationMetadataService,
  ) {}

  onModuleInit(): void {
    this.itemService =
      this.client.getService<ItemServiceClient>(ITEM_SERVICE_NAME);
  }

  createItem(request: CreateItemRequest): Promise<ItemResponse> {
    return lastValueFrom(
      this.itemService.createItem(request, this.grpcMetadata.create()),
    );
  }

  createItems(request: CreateItemsRequest): Promise<CreateItemsResponse> {
    return lastValueFrom(
      this.itemService.createItems(request, this.grpcMetadata.create()),
    );
  }

  getItemById(request: GetItemByIdRequest): Promise<ItemResponse> {
    return lastValueFrom(
      this.itemService.getItemById(request, this.grpcMetadata.create()),
    );
  }

  getAllItems(): Promise<ItemListResponse> {
    return lastValueFrom(
      this.itemService.getAllItems({}, this.grpcMetadata.create()),
    );
  }

  updateItem(request: UpdateItemRequest): Promise<ItemResponse> {
    return lastValueFrom(
      this.itemService.updateItem(request, this.grpcMetadata.create()),
    );
  }

  deactivateItem(
    request: ChangeItemActiveStatusRequest,
  ): Promise<ItemResponse> {
    return lastValueFrom(
      this.itemService.deactivateItem(request, this.grpcMetadata.create()),
    );
  }

  reactivateItem(
    request: ChangeItemActiveStatusRequest,
  ): Promise<ItemResponse> {
    return lastValueFrom(
      this.itemService.reactivateItem(request, this.grpcMetadata.create()),
    );
  }
}
