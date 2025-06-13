import { Column, DataType, IsEmail, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'clientes' })
export class Cliente extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  nome: string;

  @IsEmail
  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  telefone: string;

  @Column({ type: DataType.TEXT })
  endereco: string;
}
