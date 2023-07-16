import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { UserEntity } from './user.entity';
import { MediaResponse } from '../response/media.response';

@Entity('story')
export class StoryEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  story_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    type: 'text',
    default: '',
  })
  message: string;

  @Column({
    type: 'text',
    default: '',
  })
  song: string;

  @Column({
    type: 'jsonb',
    default: () => "'[]'",
    array: false,
    nullable: false,
  })
  media: MediaResponse[];

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_view: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_like: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_love: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_wow: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_sad: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_nothing: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_angry: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_reaction: number;

  @Column({
    type: 'int',
    default: 0,
  })
  status: number;
}
