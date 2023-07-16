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

@Entity("conversation_user_hidden")
export class ConversationUserHiddenEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  conversation_user_hidden_id: string;

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
