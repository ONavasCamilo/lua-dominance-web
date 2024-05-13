import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'participants' })
export class Participant {
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
    default: null,
    nullable: true,
  })
  discord?: string | null;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  password: string;

  @Column({
    default: false,
  })
  isAdmin: boolean;
}

