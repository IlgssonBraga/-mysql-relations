import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOperator1596291086834 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'operators',
        columns: [
          {
            name: 'id',
            type: 'int(11)',
            isPrimary: true,
          },
          {
            name: 'fist_name',
            type: 'varchar(255)',
          },
          {
            name: 'last_name',
            type: 'varchar(255)',
          },
          {
            name: 'email',
            type: 'varchar(255)',
          },
          {
            name: 'cpf',
            type: 'varchar(255)',
          },
          {
            name: 'number',
            type: 'varchar(255)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('operators');
  }
}
