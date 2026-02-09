import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTaskTable1770356487550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "createAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            
            name: "updateAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar"
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task");
  }
}
