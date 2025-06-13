import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto) private produtoModel: typeof Produto) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return this.produtoModel.create({ ...createProdutoDto });
  }

  async findAll(search?: string): Promise<Produto[]> {
    const where = search ? { nome: { [Op.like]: `%${search}%` } } : {};
    const produtos = await this.produtoModel.findAll({ where });

    return produtos;
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoModel.findOne({ where: { id } });

    if (!produto) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }

    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<void> {
    const [updatedRows] = await this.produtoModel.update(updateProdutoDto, {
      where: { id },
    });

    if (updatedRows === 0) {
      throw new NotFoundException(
        `Produto com ID ${id} não encontrado para atualização.`,
      );
    }
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findOne(id);

    await produto.destroy();
  }
}
