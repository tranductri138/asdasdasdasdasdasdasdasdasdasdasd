import {MigrationInterface, QueryRunner} from "typeorm";

export class Asdashdas1634530236695 implements MigrationInterface {
    name = 'Asdashdas1634530236695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` ADD \`nameProfile\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` ADD \`phone\` varchar(3) NOT NULL DEFAULT '012'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` DROP COLUMN \`nameProfile\``);
    }

}
