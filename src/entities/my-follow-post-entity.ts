import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity("my_follow_post")
export class MyFollowPostEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  my_follow_post_id: string;

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
    type: 'text',
    nullable: true,
    array: true
  })
  posts: string[];
}
