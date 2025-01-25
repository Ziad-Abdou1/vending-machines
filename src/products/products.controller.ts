import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product | null > {
    return this.productsService.findOne(id);
  }

  @Post(':id/purchase')
  purchase(@Param('id') id: number, @Body('quantity') quantity: number): Promise<void> {
    return this.productsService.purchase(id, quantity);
  }
}