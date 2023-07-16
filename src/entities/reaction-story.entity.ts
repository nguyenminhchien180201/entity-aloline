import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { UserEntity } from './user.entity';
import { StoryEntity } from './story.entity';

@Entity('reaction_story')
export class ReactionStoryEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  reaction_story_id: string;

  @Column({
    type: 'int',
    default: 0,
  })
  reaction_type: number;

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

  @Column({
    type: 'int',
    default: 0,
  })
  status: number;
}
