import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsEntity } from './entities/patients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientsEntity])],
  controllers: [PatientsController],
  providers: [PatientsService],
  exports: [PatientsService],
})
export class PatientsModule {}
