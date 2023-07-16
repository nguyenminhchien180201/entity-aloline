import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ConversationEntity } from "./conversation.entity";
import { UserEntity } from "./user.entity";
import { StickerEntity } from "./sticker.entity";

@Entity("message")
export class MessageEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_id: string;

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
    type: "bigint",
    array: true,
    default: [],
    nullable: true,
  })
  user_target: number[];

  @Column({
    type: "int",
    default: 1,
    nullable: true,
  })
  type: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  message: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  media: string;

  @Column({
    type: "jsonb",
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  tag: any;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_reaction: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_pinned: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_share: number;

  @ManyToOne(() => MessageEntity, (message) => message.message_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "message_reply_id",
  })
  message_reply: MessageEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_reply_id_virtual: number;

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
  no_of_like: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_love: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_wow: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_sad: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_haha: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_angry: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  thumb: string;

  @Column({
    type: "text",
    nullable: true,
  })
  sticker: string;

  @Column({
    type: "jsonb",
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  link: any[];

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  link_join_group: string;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_vote_id: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  key_search: string;
}
