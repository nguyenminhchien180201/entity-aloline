import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ConversationEntity } from "./conversation.entity";
import { MessageEntity } from "./message.entity";
import { UserEntity } from "./user.entity";

@Entity("message_remove")
export class MessageRemoveEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_remove_id: string;

  @ManyToOne(() => MessageEntity, (message) => message.message_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "message_id",
  })
  message: MessageEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_id_virtual: number;

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
}
