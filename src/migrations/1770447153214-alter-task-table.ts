import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AlterTaskTable1770447153214 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("task", "updateAt", "updatedAt");

    await queryRunner.renameColumn("task", "createAt", "createdAt");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("task", "updatedAt", "updateAt");

    await queryRunner.renameColumn("task", "createdAt", "createAt");
  }
}
