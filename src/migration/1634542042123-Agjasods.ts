import {MigrationInterface, QueryRunner} from "typeorm";

export class Agjasods1634542042123 implements MigrationInterface {
    name = 'Agjasods1634542042123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` ADD \`questionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` ADD CONSTRAINT \`FK_a4013f10cd6924793fbd5f0d637\` FOREIGN KEY (\`questionId\`) REFERENCES \`cvmaker2\`.\`question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` DROP FOREIGN KEY \`FK_a4013f10cd6924793fbd5f0d637\``);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` DROP COLUMN \`questionId\``);
    }

}
