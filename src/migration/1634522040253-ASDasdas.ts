import { MigrationInterface, QueryRunner } from 'typeorm';

export class ASDasdas1634522040253 implements MigrationInterface {
  name = 'ASDasdas1634522040253';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cvmaker2\`.\`user\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker2\`.\`user\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cvmaker2\`.\`user\` DROP COLUMN \`updated_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cvmaker2\`.\`user\` DROP COLUMN \`created_at\``,
    );
  }
}
