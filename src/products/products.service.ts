import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null > {
    return this.productRepository.findOne({ where: { id } });
  }

  async purchase(id: number, quantity: number): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product || product.stock < quantity) {
      throw new Error('Insufficient stock');
    }
    product.stock -= quantity;
    await this.productRepository.save(product);
  }
}