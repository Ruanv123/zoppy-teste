import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pedido } from './entities/pedido.entity';
import { ItemPedido } from './entities/itemPedido';

@Module({
  imports: [SequelizeModule.forFeature([Pedido, ItemPedido])],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
