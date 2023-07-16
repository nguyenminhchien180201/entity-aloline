import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';
import { GROUP_MEMBER_PERMISSION } from '../enums/group.enum';

@Entity('group_member')
export class GroupMemberEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  group_member_id: string;

  @Column({
    type: 'smallint',
    default: GROUP_MEMBER_PERMISSION.USER,
  })
  permission: GROUP_MEMBER_PERMISSION;

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
