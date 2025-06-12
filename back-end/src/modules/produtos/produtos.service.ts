import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto) private produtoModel: typeof Produto) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return this.produtoModel.create({ ...createProdutoDto });
  }

  async findAll(): Promise<Produto[]> {
    const produtos = await this.produtoModel.findAll();

    return produtos;
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoModel.findOne({ where: { id } });

    if (!produto) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }

    return produto;
  }

  async update(
    id: number,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<string> {
    return `This action updates a #${id} produto`;
  }

  async remove(id: number): Promise<string> {
    return `This action removes a #${id} produto`;
  }
}
