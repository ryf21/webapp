import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1775724309723 implements MigrationInterface {
    name = 'Initial1775724309723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "continent" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "airlines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "img_path" character varying NOT NULL, CONSTRAINT "PK_74f50545f40719d6a763da9da47" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "passengers" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "phone" character varying NOT NULL, "arrtime" character varying NOT NULL, "deptime" character varying NOT NULL, "destination" character varying NOT NULL, "origin" character varying NOT NULL, "seat" character varying NOT NULL, "class" character varying NOT NULL, "meal" character varying NOT NULL, CONSTRAINT "PK_9863c72acd866e4529f65c6c98c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "passenger_country" ("country_id" integer NOT NULL, "passenger_id" integer NOT NULL, CONSTRAINT "PK_b6a682eef981e2eb75f1c27bde8" PRIMARY KEY ("country_id", "passenger_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_670ef529c6eaceada4b95fdeca" ON "passenger_country" ("country_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f362fa15ef0ee9183e9a71c566" ON "passenger_country" ("passenger_id") `);
        await queryRunner.query(`CREATE TABLE "passenger_airline" ("airline_id" integer NOT NULL, "passenger_id" integer NOT NULL, CONSTRAINT "PK_96521b377f33ba1e967920e2f07" PRIMARY KEY ("airline_id", "passenger_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_80fabb0f4af14d4292c5a5b823" ON "passenger_airline" ("airline_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8460f03478c9fb2de6afd7fc9c" ON "passenger_airline" ("passenger_id") `);
        await queryRunner.query(`ALTER TABLE "passenger_country" ADD CONSTRAINT "FK_670ef529c6eaceada4b95fdeca5" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "passenger_country" ADD CONSTRAINT "FK_f362fa15ef0ee9183e9a71c5666" FOREIGN KEY ("passenger_id") REFERENCES "passengers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "passenger_airline" ADD CONSTRAINT "FK_80fabb0f4af14d4292c5a5b823f" FOREIGN KEY ("airline_id") REFERENCES "airlines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "passenger_airline" ADD CONSTRAINT "FK_8460f03478c9fb2de6afd7fc9c3" FOREIGN KEY ("passenger_id") REFERENCES "passengers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passenger_airline" DROP CONSTRAINT "FK_8460f03478c9fb2de6afd7fc9c3"`);
        await queryRunner.query(`ALTER TABLE "passenger_airline" DROP CONSTRAINT "FK_80fabb0f4af14d4292c5a5b823f"`);
        await queryRunner.query(`ALTER TABLE "passenger_country" DROP CONSTRAINT "FK_f362fa15ef0ee9183e9a71c5666"`);
        await queryRunner.query(`ALTER TABLE "passenger_country" DROP CONSTRAINT "FK_670ef529c6eaceada4b95fdeca5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8460f03478c9fb2de6afd7fc9c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_80fabb0f4af14d4292c5a5b823"`);
        await queryRunner.query(`DROP TABLE "passenger_airline"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f362fa15ef0ee9183e9a71c566"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_670ef529c6eaceada4b95fdeca"`);
        await queryRunner.query(`DROP TABLE "passenger_country"`);
        await queryRunner.query(`DROP TABLE "passengers"`);
        await queryRunner.query(`DROP TABLE "airlines"`);
        await queryRunner.query(`DROP TABLE "countries"`);
    }

}
