import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("conversation_background")
export class ConversationBackgroundEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  conversation_background_id: string;

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
    type: "simple-json",
    default: {},
    nullable: true,
  })
  media: any;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  status: number;
}
