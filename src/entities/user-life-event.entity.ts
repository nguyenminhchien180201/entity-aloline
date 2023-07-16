import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseModel } from "./base.entity";

@Entity("user-life-event")
export class UserLifeEventEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  user_life_event_id: string;

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
    type: "text",
    default: "",
    nullable: true,
  })
  type_name: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  type: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  view: number;
}
