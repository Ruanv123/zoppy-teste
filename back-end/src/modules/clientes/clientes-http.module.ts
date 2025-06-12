import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes.module';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [ClientesModule],
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesHttpModule {}
