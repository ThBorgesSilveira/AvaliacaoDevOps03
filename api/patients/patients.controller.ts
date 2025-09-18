import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { PatientsService } from './patients.service';
import { CreatePatientsDto } from './dto/create-patients.dto';
import { UpdatePatientsDto } from './dto/update-patients.dto';

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll() {
    return await this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.patientsService.findOne(id);
  }

  @Post()
  async create(@Body() createPatientsDto: CreatePatientsDto) {
    return await this.patientsService.create(createPatientsDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePatientsDto: UpdatePatientsDto,
  ) {
    return await this.patientsService.update(id, updatePatientsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.patientsService.remove(id);
  }
}
