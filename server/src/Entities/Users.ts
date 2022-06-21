// Users Table for the database -> TypeORM

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // This is the decorator that tells TypeORM that this class is an entity
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn() // This is the decorator that tells TypeORM that this column is the primary key
  id!: number;

  @Column() // This is the decorator that tells TypeORM that this column is a column in the database
  name!: string;

  @Column() // This is the decorator that tells TypeORM that this column is a column in the database
  username!: string;

  @Column() // This is the decorator that tells TypeORM that this column is a column in the database
  password!: string;
}
