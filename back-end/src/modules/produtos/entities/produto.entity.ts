import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'produtos' })
export class Produto extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  nome: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  descricao: string;

  @Column({ type: DataType.FLOAT })
  preco: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  estoque: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  ativo: boolean;
}
