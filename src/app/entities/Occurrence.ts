import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import Driver from './Driver';
import Operator from './Operator';

@Entity('occurrences')
class Occurrence extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  called_authority: string;

  @Column()
  observation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  finishedAt: Date;

  @OneToMany(() => Driver, (driver: Driver) => driver.id, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  driver_id: number;

  @ManyToOne(() => Operator, (operator: Operator) => operator.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  operator_id: number;
}

export default Occurrence;
