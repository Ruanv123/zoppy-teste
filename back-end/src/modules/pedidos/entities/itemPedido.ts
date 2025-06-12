import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Pedido } from './pedido.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';

@Table({ tableName: 'itens_pedido' })
export class ItemPedido extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => Pedido)
  @Column
  pedidoId!: number;

  @ForeignKey(() => Produto)
  @Column
  produtoId!: number;

  @Column
  quantidade!: number;

  @Column
  preco_unitario!: number;
}
