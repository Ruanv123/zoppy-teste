import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesHttpModule } from './modules/clientes/clientes-http.module';
import { Cliente } from './modules/clientes/entities/cliente.entity';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { Pedido } from './modules/pedidos/entities/pedido.entity';
import { ItemPedido } from './modules/pedidos/entities/itemPedido';
import { Produto } from './modules/produtos/entities/produto.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: 'db.cxndizrhymkigacomzyg.supabase.co',
        port: 5432,
        username: 'postgres',
        password: 'q2YGaLlodArqVtsO',
        database: 'postgres',
        models: [Cliente, Pedido, ItemPedido, Produto],
        autoLoadModels: true,
        synchronize: true,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
    ProdutosModule,
    ClientesHttpModule,
    PedidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
