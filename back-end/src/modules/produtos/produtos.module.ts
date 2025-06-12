import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './entities/produto.entity';

@Module({
  imports: [SequelizeModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
