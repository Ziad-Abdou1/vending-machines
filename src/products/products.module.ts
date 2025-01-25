import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Register the Product entity
  providers: [ProductsService], // Provide the ProductsService
  controllers: [ProductsController], // Register the ProductsController
})
export class ProductsModule {}