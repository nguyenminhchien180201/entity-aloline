import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity('action_level')
export class ActionLevelEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  action_level_id: string;

  @Column({
    type: 'text',
    default: '',
  })
  name: string;

  @Column({
    type: 'int',
    default: 0,
  })
  target: number;

  @Column({
    type: 'int',
    default: 0,
  })
  point: number;
}
