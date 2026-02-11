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
export class Users extends BaseModel {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string
}