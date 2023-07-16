import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("block_user")
export class BlockUserEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  block_id: string;

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

  @ManyToOne(() => UserEntity, (block_user) => block_user.user_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "block_user_id",
  })
  block_user: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  block_user_id_virtual: number;
}
