import { UpdateDateColumn } from "typeorm";
import { CreateDateColumn } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class Task extends BaseModel {

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}

