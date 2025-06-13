import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './modules/clientes/clientes.module';
import { Cliente } from './modules/clientes/entities/cliente.entity';
import { Produto } from './modules/produtos/entities/produto.entity';
import { ProdutosModule } from './modules/produtos/produtos.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db.cxndizrhymkigacomzyg.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'q2YGaLlodArqVtsO',
      database: 'postgres',
      models: [Cliente, Produto],
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    ProdutosModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
