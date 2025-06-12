import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cliente])],
  exports: [SequelizeModule],
})
export class ClientesModule {}
