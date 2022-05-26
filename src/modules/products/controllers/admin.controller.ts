import { Body, Controller, Delete, Inject, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
@ApiTags('products')
@ApiSecurity('JWT auth')
export class ProductsAdminController {
  @Inject() private readonly productsService: ProductsService;

  @Post()
  @ApiOperation({ summary: 'Create product' })
  create(@Body() payload: CreateProductDto): any {
    return this.productsService.create(payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  delete(@Param('id') id: string): any {
    return this.productsService.delete(id);
  }
}
