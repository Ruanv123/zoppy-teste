import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @IsNumber()
  @IsNotEmpty()
  estoque: number;
}
