import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'patients' })
export class PatientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  full_name: string;

  @Column({ type: 'varchar', unique: true, length: 14 })
  document: string;

  @Column({ type: 'varchar', unique: true, length: 14 })
  blood_type: string;

  @Column({ type: 'varchar', unique: true, length: 14 })
  allergies: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
