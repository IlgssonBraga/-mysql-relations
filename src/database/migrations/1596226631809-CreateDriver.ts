import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDriver1596226631809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'drivers',
        columns: [
          {
            name: 'id',
            type: 'int(11)',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
    await queryRunner.dropTable('drivers');
  }
}
