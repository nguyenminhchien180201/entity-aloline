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

@Entity("connection")
export class ConnectionEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  user_connection_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, {
    nullable: true,
  })
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
    type: "text",
    default: "",
    nullable: true,
  })
  socket_id: string;

  @ManyToOne(
    () => ConversationEntity,
    (conversation) => conversation.conversation_id,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: "room_id",
  })
  room: ConversationEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  room_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  device: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  server_id: string;
}
