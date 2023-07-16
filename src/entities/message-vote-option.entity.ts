import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ConversationEntity } from "./conversation.entity";
import { MessageVoteUserEntity } from "./message-vote-user.entity";
import { MessageVoteEntity } from "./message-vote.entity";
import { UserEntity } from "./user.entity";

@Entity("message_vote_option")
export class MessageVoteOptionEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_vote_option_id: string;

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

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_vote: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  content: string;

  @OneToMany(() => MessageVoteUserEntity, (user) => user.message_vote_option)
  message_vote_user: MessageVoteUserEntity[];
}
