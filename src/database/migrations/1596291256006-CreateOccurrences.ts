import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateOccurrences1596291256006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'occurrences',
        columns: [
          {
            name: 'id',
            type: 'int(11)',
            isPrimary: true,
          },
          {
            name: 'driver_id',
            type: 'int(11)',
            isNullable: false,
          },
          {
            name: 'operator_id',
            type: 'int(11)',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'called_authority',
            type: 'varchar',
          },
          {
            name: 'observation',
            type: 'text',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
          },
          {
            name: 'finishedAt',
            type: 'timestamp',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'occurrences',
      new TableForeignKey({
        name: 'occurrencesDriver',
        columnNames: ['driver_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'drivers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'occurrences',
      new TableForeignKey({
        name: 'occurrencesOperator',
        columnNames: ['operator_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'operators',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('occurrences', 'occurrencesDriver');
    await queryRunner.dropForeignKey('occurrences', 'occurrencesOperator');
    await queryRunner.dropTable('occurrences');
  }
}
