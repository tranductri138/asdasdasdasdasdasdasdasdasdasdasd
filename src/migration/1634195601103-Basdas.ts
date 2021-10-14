import { MigrationInterface, QueryRunner } from 'typeorm';

export class Basdas1634195601103 implements MigrationInterface {
  name = 'Basdas1634195601103';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`user\` (\`id\` char(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`profile\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`education\` varchar(255) NULL, \`skill\` varchar(255) NULL, \`summary\` varchar(255) NULL, \`experience\` varchar(255) NULL, \`certifications\` varchar(255) NULL, \`answersFirst\` varchar(255) NULL, \`answerSecond\` varchar(255) NULL, \`answerThird\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`careerName\` varchar(255) NOT NULL, \`userId\` char(36) NULL, UNIQUE INDEX \`REL_a24972ebd73b106250713dcddd\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cvmaker1\`.\`career\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`questionFirst\` varchar(255) NOT NULL, \`questionSecond\` varchar(255) NULL, \`questionThird\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_5519c2c1506f96cb2efb3e0d60\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` ADD CONSTRAINT \`FK_13c37b351baa879d1cc09487f0e\` FOREIGN KEY (\`careerName\`) REFERENCES \`cvmaker1\`.\`career\`(\`name\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` ADD CONSTRAINT \`FK_a24972ebd73b106250713dcddd9\` FOREIGN KEY (\`userId\`) REFERENCES \`cvmaker1\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` DROP FOREIGN KEY \`FK_a24972ebd73b106250713dcddd9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker1\`.\`profile\` DROP FOREIGN KEY \`FK_13c37b351baa879d1cc09487f0e\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5519c2c1506f96cb2efb3e0d60\` ON \`cvmaker1\`.\`career\``,
    );
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`career\``);
    await queryRunner.query(
      `DROP INDEX \`REL_a24972ebd73b106250713dcddd\` ON \`cvmaker1\`.\`profile\``,
    );
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`profile\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`cvmaker1\`.\`user\``,
    );
    await queryRunner.query(`DROP TABLE \`cvmaker1\`.\`user\``);
  }
}
