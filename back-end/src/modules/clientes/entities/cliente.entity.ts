import {
  Column,
  DataType,
  IsEmail,
  Table,
  Model,
  HasMany,
} from 'sequelize-typescript';
import { Pedido } from 'src/modules/pedidos/entities/pedido.entity';

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

  @HasMany(() => Pedido)
  pedidos: Pedido[];
}
