import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { UserEntity } from './user.entity';

@Entity('conversation_classify')
export class ConversationClassifyEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  classify_id: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true
  })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, {nullable: true})
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
    type: 'text',
    default: '',
    nullable: true
  })
  color: string;
}
