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

@Entity("message_reminder")
export class MessageReminderEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_reminder_id: string;

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
  type_repeat: number;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  time: Date;

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
  no_of_join: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_not_join: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  status: number;
}
