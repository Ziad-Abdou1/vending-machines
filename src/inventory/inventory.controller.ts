import { Controller, Get, Patch, Body, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getInventory() {
    return this.inventoryService.getInventory();
  }

  @Patch('product/:id')
  updateProduct(@Param('id') id: number, @Body() update: { stock?: number; price?: number }) {
    return this.inventoryService.updateProduct(id, update);
  }

  @Patch('coins')
  refillCoins(@Body() refill: { denomination: number; quantity: number }[]) {
    return this.inventoryService.refillCoins(refill);
  }
}