import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUsersTable1770792389664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("users", "updateAt", "updatedAt");

        await queryRunner.renameColumn("users", "createAt", "createdAt");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("users", "updatedAt", "updateAt");

        await queryRunner.renameColumn("users", "createdAt", "createAt");
    }

}
