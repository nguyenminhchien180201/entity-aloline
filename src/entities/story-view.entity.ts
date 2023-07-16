import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { UserEntity } from './user.entity';
import { StoryEntity } from './story.entity';

@Entity('story_view')
export class StoryViewEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  story_view_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => StoryEntity, (story) => story.story_id)
  @JoinColumn({
    name: 'story_id',
  })
  story: StoryEntity;
}
