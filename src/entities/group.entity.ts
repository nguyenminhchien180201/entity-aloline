import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { MediaResponse } from '../response/media.response';
import { UserEntity } from './user.entity';
import { GROUP_PERMISSION, GROUP_STATUS, GROUP_VIEW } from '../enums/group.enum';

@Entity('group')
export class GroupEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  group_id: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  name: string;

  @Column({
    type: 'simple-json',
    default: new MediaResponse(),
  })
  avatar: MediaResponse;

  @Column({
    type: 'simple-json',
    default: new MediaResponse(),
  })
  cover: MediaResponse;

  @Column({
    type: 'smallint',
    default: GROUP_PERMISSION.PUBLIC, //public - private
  })
  permission: GROUP_PERMISSION;

  @Column({
    type: 'smallint',
    default: GROUP_VIEW.SHOW, //show - hide
  })
  view: GROUP_VIEW;

  @Column({
    type: 'smallint',
    default: GROUP_STATUS.UNLOCK, //lock - unlock
  })
  status: GROUP_STATUS;

  @Column({
    type: 'int',
    default: 1,
  })
  no_of_member: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  admin: UserEntity;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  last_activity: Date;

  @Column({
    type: 'smallint',
    default: 1,
  })
  type_confirm_join: number;

  @Column({
    type: 'text',
    default: '',
  })
  description: string;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_post: number;
}
