import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientsDto } from './dto/create-patients.dto';
import { UpdatePatientsDto } from './dto/update-patients.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsEntity } from './entities/patients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsEntity)
    private readonly patientsRepository: Repository<PatientsEntity>,
  ) {}

  async findAll() {
    const patientss = await this.patientsRepository.find();
    return patientss;
  }

  async findOne(id: number) {
    const patients = await this.patientsRepository.findOne({
      where: {
        id,
      },
    });

    if (!patients)
      throw new NotFoundException('Fabricante não encontrado!');

    return patients;
  }

  async create(createPatientsDto: CreatePatientsDto) {
    const newPatients = {
      ...createPatientsDto,
    };

    const patients =
      await this.patientsRepository.create(newPatients);

    return this.patientsRepository.save(patients);
  }

  async update(id: number, updatePatientsDto: UpdatePatientsDto) {
    const patients = await this.findOne(id);

    const updatedPatients = this.patientsRepository.merge(
      patients,
      updatePatientsDto,
    );

    return this.patientsRepository.save(updatedPatients);
  }

  async remove(id: number) {
    const patients = await this.findOne(id);

    return await this.patientsRepository.remove(patients);
  }
}
