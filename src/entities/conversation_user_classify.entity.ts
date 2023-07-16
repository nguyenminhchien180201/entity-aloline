import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ConversationEntity } from "./conversation.entity";
import { ConversationClassifyEntity } from "./conversation_classify.entity";

@Entity("conversation_user_classify")
export class ConversationUserClassifyEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  conversation_user_classify_id: string;

  @ManyToOne(
    () => ConversationClassifyEntity,
    (classify) => classify.classify_id,
    { nullable: true }
  )
  @JoinColumn({
    name: "classify_id",
  })
  classify: ConversationClassifyEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  classify_id_virtual: number;

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
}
