import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { MessageEntity } from "./message.entity";
import { UserEntity } from "./user.entity";

@Entity("message_reaction")
export class MessageReactionEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  message_reaction_id: string;

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
  type: number;
}
