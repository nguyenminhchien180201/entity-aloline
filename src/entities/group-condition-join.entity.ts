import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { GroupEntity } from './group.entity';
import { GROUP_CONDITION_JOIN_TYPE } from '../enums/group.enum';

@Entity('group_condition_join')
export class GroupConditionJoinEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  group_condition_join_id: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  question: string;

  @Column({
    type: 'smallint',
    default: GROUP_CONDITION_JOIN_TYPE.TEXT,
  })
  type: GROUP_CONDITION_JOIN_TYPE;

  @Column({
    type: 'varchar',
    default: '',
  })
  answer: string;

  @ManyToOne(() => GroupEntity, (group) => group.group_id)
  @JoinColumn({
    name: 'group_id',
  })
  group: GroupEntity;
}
