import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Role } from './role.entity';

@Entity({ name: 'participants' })
export class Participant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  nick: string;  

  @Column({
    type: 'varchar',
    length: 30,
    default: undefined,
    nullable: true,
  })
  discord?: string | undefined;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  password: string;

  @ManyToOne(() => Role, (role) => role.participant)
  role: Role;
}

