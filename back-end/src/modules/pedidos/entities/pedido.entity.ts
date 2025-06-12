import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { ItemPedido } from './itemPedido';

@Table({ tableName: 'pedidos' })
export class Pedido extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => Cliente)
  @Column
  clienteId!: number;

  @BelongsTo(() => Cliente)
  cliente: Cliente;

  @Column({ type: DataType.DATE })
  dataPedido: Date;

  @BelongsToMany(() => Produto, () => ItemPedido)
  produtos: Produto[];
}
