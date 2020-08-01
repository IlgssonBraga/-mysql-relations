import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operators')
class Operator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

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
