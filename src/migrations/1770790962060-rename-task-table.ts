import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTaskTable1770790962060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("task", "tasks")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("tasks", "task")
    }

}
