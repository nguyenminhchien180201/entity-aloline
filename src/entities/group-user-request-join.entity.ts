import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';
import { GroupConditionJoinEntity } from './group-condition-join.entity';

@Entity('group_user_request_join')
export class GroupUserRequestJoinEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  group_user_request_join_id: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  group_condition_join_answer: string;

  @ManyToOne(() => GroupConditionJoinEntity, (group_condition) => group_condition.group_condition_join_id)
  @JoinColumn({
    name: 'group_condition_join_id',
  })
  group_condition_join: GroupConditionJoinEntity;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => GroupEntity, (group) => group.group_id)
  @JoinColumn({
    name: 'group_id',
  })
  group: GroupEntity;
}
