import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/product.entity';
import { Coin } from './coin.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>,
  ) {}

  async getInventory() {
    const products = await this.productRepository.find();
    const coins = await this.coinRepository.find();
    return { products, coins };
  }

  async updateProduct(id: number, update: { stock?: number; price?: number }) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new Error('Product not found');
    }
    if (update.stock !== undefined) {
      product.stock = update.stock;
    }
    if (update.price !== undefined) {
      product.price = update.price;
    }
    return this.productRepository.save(product);
  }

  async refillCoins(refill: { denomination: number; quantity: number }[]) {
    for (const { denomination, quantity } of refill) {
      const coin = await this.coinRepository.findOne({ where: { denomination } });
      if (coin) {
        coin.stock += quantity;
        await this.coinRepository.save(coin);
      }
    }
    return this.coinRepository.find();
  }
}