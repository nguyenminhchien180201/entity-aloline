import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("best_friend")
export class BestFriendEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  best_id: string;

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

  @ManyToOne(() => UserEntity, (best_friend) => best_friend.user_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "best_friend_id",
  })
  best_friend: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  best_friend_id_virtual: number;
}
