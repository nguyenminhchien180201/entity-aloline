import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("auth")
export class AuthEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  user_auth_id: string;

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
  access_token: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  status: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  type: number;
}
