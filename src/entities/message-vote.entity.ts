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
import { MessageVoteOptionEntity } from "./message-vote-option.entity";
import { UserEntity } from "./user.entity";

@Entity("message_vote")
export class MessageVoteEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_vote_id: string;

  @ManyToOne(
    () => ConversationEntity,
    (conversation) => conversation.conversation_id,
    { nullable: true }
  )
  @JoinColumn({
    name: "conversation_id",
  })
  conversation: ConversationEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  conversation_id_virtual: number;

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
  status: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_option: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_user_vote: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  content: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_add_option: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_choose_many_option: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_hidden_user: number;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  end_time: Date;

  @OneToMany(() => MessageVoteOptionEntity, (option) => option.message_vote)
  message_vote_option: MessageVoteOptionEntity[];
}
