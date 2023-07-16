import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ConversationEntity } from "./conversation.entity";
import { MessageVoteOptionEntity } from "./message-vote-option.entity";
import { MessageVoteEntity } from "./message-vote.entity";
import { UserEntity } from "./user.entity";

@Entity("message_vote_user")
export class MessageVoteUserEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_vote_user_id: string;

  @ManyToOne(
    () => MessageVoteEntity,
    (message_vote) => message_vote.message_vote_id,
    { nullable: true }
  )
  @JoinColumn({
    name: "message_vote_id",
  })
  message_vote: MessageVoteEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_vote_id_virtual: number;

  @ManyToOne(
    () => MessageVoteOptionEntity,
    (message_vote_option) => message_vote_option.message_vote_option_id,
    { nullable: true }
  )
  @JoinColumn({
    name: "message_vote_option_id",
  })
  message_vote_option: MessageVoteOptionEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_vote_option_id_virtual: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: "user_id",
  })
  user: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  user_id_virtual: number;
}
