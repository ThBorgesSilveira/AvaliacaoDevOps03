import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientsDto } from './create-patients.dto';

export class UpdatePatientsDto extends PartialType(CreatePatientsDto) {}
