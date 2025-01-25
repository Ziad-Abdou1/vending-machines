import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/product.entity';
import { Coin } from './coin.entity';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Coin]), // Register both Product and Coin entities
  ],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}