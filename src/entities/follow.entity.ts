import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("follow_user")
export class FollowEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  follow_id: string;

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

  @ManyToOne(() => UserEntity, (follow_user) => follow_user.user_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "follow_user_id",
  })
  follow_user: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  follow_user_id_virtual: number;
}
