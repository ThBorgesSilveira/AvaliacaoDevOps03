import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePatientsDto {
  @Transform(({ value }) => value.toUpperCase())
  @IsString({ message: 'campo name deve ser uma string' })
  @MaxLength(255)
  @IsNotEmpty()
  readonly full_name: string;

  @MaxLength(14)
  @IsNotEmpty()
  readonly document: string;

  @MaxLength(14)
  @IsNotEmpty()
  readonly blood_type: string;

  @MaxLength(14)
  @IsNotEmpty()
  readonly allergies: string;
}
