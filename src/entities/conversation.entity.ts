import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { MessageEntity } from "./message.entity";
import { ConversationMemberEntity } from "./conversation_member.entity";

@Entity("conversation")
export class ConversationEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  conversation_id: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  avatar: string;

  @OneToOne(() => MessageEntity, { nullable: true })
  @JoinColumn({
    name: "last_message_id",
  })
  last_message: MessageEntity;

  @Column({
    type: "bigint",
    default: "0",
    nullable: true,
  })
  last_message_id_virtual: string;

  @Column({
    type: "timestamp",
    // default: () => new Date(),
    nullable: true,
  })
  last_activity: Date;

  @Column({
    type: "int",
    default: 0, // 0 - system, 1 - group, 2 - private
    nullable: true,
  })
  type: number;

  @Column({
    type: "int",
    array: true,
    default: [],
    nullable: true,
  })
  members: number[];

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  background: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_member: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_pinned: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_image: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_video: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_file: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_link: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_audio: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  link_join: string;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  message_pinned_id: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_user_remove: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_update_profile: number;

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
  is_create_reminder: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_create_vote: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_confirm_new_member: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_highlight_message_admin: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_view_old_message_with_new_member: number;

  @Column({
    type: "int",
    default: 1,
    nullable: true,
  })
  is_join_with_link: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_send_message: number;

  @Column({
    type: "int",
    default: 1,
    nullable: true,
  })
  status: number;

  @OneToMany(
    () => ConversationMemberEntity,
    (conversationMember) => conversationMember.conversation
  )
  conversation_member: ConversationMemberEntity[];
}
