import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { BaseModel } from './base.entity';

@Entity('history_point')
export class HistoryPointEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  history_point_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true
  })
  user_id_virtual: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true
  })
  type: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true
  })
  point_type: number;
}
