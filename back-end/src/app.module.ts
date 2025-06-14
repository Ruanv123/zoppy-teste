import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
      envFilePath: '.env',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        models: [Cliente, Produto],
        autoLoadModels: true,
        synchronize: true,
        dialectOptions:
          configService.get<string>('DB_SSL') === 'true'
            ? {
                ssl: {
                  require: true,
                  rejectUnauthorized: false,
                },
              }
            : {},
      }),
    }),
    ProdutosModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
