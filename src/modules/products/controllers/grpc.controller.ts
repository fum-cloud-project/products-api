import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductsService } from '../products.service';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class ProductsGrpcController {
  @Inject() private readonly productService: ProductsService;

  @GrpcMethod('ProductService', 'getProductData')
  async getProductData(
    data: { id: string },
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    return await this.productService.grpcGet(data.id);
  }

  @GrpcMethod('ProductsService', 'reduceQuantity')
  async reduceQuantity(
    data: { id: string; quantity: number },
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    return await this.productService.grpcReduce(data);
  }
}
