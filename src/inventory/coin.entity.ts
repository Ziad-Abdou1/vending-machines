import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Coin {
  @PrimaryColumn('int')
  denomination: number;

  @Column('int')
  stock: number;
}