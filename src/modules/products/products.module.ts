import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsPublicController } from './controllers/public.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Category,
  categorySchema,
  Product,
  productsSchema,
  Supplier,
  supplierSchema,
} from '../../schemas';
import { ProductsAdminController } from './controllers/admin.controller';
import { ProductsGrpcController } from './controllers/grpc.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: productsSchema },
      { name: Supplier.name, schema: supplierSchema },
      { name: Category.name, schema: categorySchema },
    ]),
  ],
  controllers: [
    ProductsPublicController,
    ProductsAdminController,
    ProductsGrpcController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
