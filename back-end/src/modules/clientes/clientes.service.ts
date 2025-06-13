import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Op } from 'sequelize';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente) private clienteModel: typeof Cliente) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clienteModel.create({ ...createClienteDto });
  }

  async findAll(search?: string): Promise<Cliente[]> {
    const where = search ? { nome: { [Op.like]: `%${search}%` } } : {};
    return this.clienteModel.findAll({ where });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteModel.findOne({ where: { id } });
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<void> {
    const [updatedRows] = await this.clienteModel.update(updateClienteDto, {
      where: { id },
    });

    if (updatedRows === 0) {
      throw new NotFoundException(
        `Cliente com ID ${id} não encontrado para atualização.`,
      );
    }
  }

  async remove(id: number): Promise<void> {
    const cliente = await this.findOne(id);
    await cliente.destroy();
  }
}
