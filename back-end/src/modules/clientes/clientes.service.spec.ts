import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { getModelToken } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

describe('ClientesService', () => {
  let service: ClientesService;

  const clienteModelMock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientesService,
        {
          provide: getModelToken(Cliente),
          useValue: clienteModelMock,
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new cliente', async () => {
    const dto: CreateClienteDto = {
      nome: 'João',
      email: 'joao@email.com',
      endereco: 'Rua A, 123',
      telefone: '123456789',
    };

    const created = { id: 1, ...dto };

    clienteModelMock.create.mockResolvedValue(created);

    const result = await service.create(dto as any);

    expect(result).toEqual(created);
    expect(clienteModelMock.create).toHaveBeenCalledWith(dto);
  });
});
