import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('operators')
class Operator extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fist_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  number: string;
}

export default Operator;
