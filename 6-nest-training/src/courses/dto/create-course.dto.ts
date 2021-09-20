import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @IsString({ message: 'Nome deve ser do tipo texto' })
  readonly name: string;

  @IsNotEmpty({ message: 'Descriçaõ deve ser informado' })
  @IsString({ message: 'Descrição deve ser do tipo texto' })
  readonly description: string;

  @IsNotEmpty({ message: 'Preço deve ser informado' })
  @IsNumber()
  readonly price: number;

  @IsNotEmpty({ message: 'Tags deve ser informado' })
  @IsString({ message: 'Tags deve ser do tipo texto', each: true })
  readonly tags: string[];
}
