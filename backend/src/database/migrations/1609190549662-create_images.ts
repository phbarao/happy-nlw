import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createImages1609190549662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, //não permite valor negativo
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            // se mudar o ID do orfanato, o na imagem tmb sera alterado com o CASCADE
            onUpdate: 'CASCADE',
            // Se deletar o orfanato, as imagens tmb serao deletadas
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
