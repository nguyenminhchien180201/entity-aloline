import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';

@Entity('group_follow')
export class GroupFollowEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  group_follow_id: string;

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
