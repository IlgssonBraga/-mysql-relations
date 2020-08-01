import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import Driver from './Driver';
import Operator from './Operator';

@Entity('occurrences')
class Occurrence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  called_authority: string;

  @Column()
  observation: string;

  @CreateDateColumn('timestamp')
  createdAt: Date;

  @UpdateDateColumn('timestamp')
  updatedAt: Date;

  @Column()
  finishedAt: Date;

  @OneToMany(() => Driver, (driver: Driver) => driver.id, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  user_id: number;

  @ManyToOne(() => Operator, (operator: Operator) => operator.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  operator_id: number;
}

export default Occurrence;
