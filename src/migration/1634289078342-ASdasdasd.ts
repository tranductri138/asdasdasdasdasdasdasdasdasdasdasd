import {MigrationInterface, QueryRunner} from "typeorm";

export class ASdasdasd1634289078342 implements MigrationInterface {
    name = 'ASdasdasd1634289078342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cvmaker2\`.\`question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profileId\` char(36) NULL, UNIQUE INDEX \`IDX_7dd1a945ab428f2a3392c2d453\` (\`question\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cvmaker2\`.\`user\` (\`id\` char(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cvmaker2\`.\`profile\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`education\` varchar(255) NOT NULL, \`skill\` varchar(255) NOT NULL, \`summary\` varchar(255) NOT NULL, \`experience\` varchar(255) NOT NULL, \`certifications\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cvmaker2\`.\`answer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`answer\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profileId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cvmaker2\`.\`email\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`question\` ADD CONSTRAINT \`FK_d59e50befe2c33b48e01d44d5ff\` FOREIGN KEY (\`profileId\`) REFERENCES \`cvmaker2\`.\`profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` ADD CONSTRAINT \`FK_a24972ebd73b106250713dcddd9\` FOREIGN KEY (\`userId\`) REFERENCES \`cvmaker2\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` ADD CONSTRAINT \`FK_ddd56ed7b2e47b6cc44bad9cfd6\` FOREIGN KEY (\`profileId\`) REFERENCES \`cvmaker2\`.\`profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`answer\` DROP FOREIGN KEY \`FK_ddd56ed7b2e47b6cc44bad9cfd6\``);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`profile\` DROP FOREIGN KEY \`FK_a24972ebd73b106250713dcddd9\``);
        await queryRunner.query(`ALTER TABLE \`cvmaker2\`.\`question\` DROP FOREIGN KEY \`FK_d59e50befe2c33b48e01d44d5ff\``);
        await queryRunner.query(`DROP TABLE \`cvmaker2\`.\`email\``);
        await queryRunner.query(`DROP TABLE \`cvmaker2\`.\`answer\``);
        await queryRunner.query(`DROP TABLE \`cvmaker2\`.\`profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`cvmaker2\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`cvmaker2\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_7dd1a945ab428f2a3392c2d453\` ON \`cvmaker2\`.\`question\``);
        await queryRunner.query(`DROP TABLE \`cvmaker2\`.\`question\``);
    }

}
