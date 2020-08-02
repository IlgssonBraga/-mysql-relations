import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(_ => Driver, {
    eager: true,
  })
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @ManyToOne(_ => Operator, {
    eager: true,
  })
  @JoinColumn({ name: 'operator_id' })
  operator: Operator;

  @Column()
  driver_id: number;

  @Column()
  operator_id: number;
}

export default Occurrence;
