import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";
import { BaseModel } from "./base.entity";

@Entity("follow_post")
export class FollowPostEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  follow_post_id: string;

  @ManyToOne(() => PostEntity, (post) => post.post_id, { nullable: true })
  @JoinColumn({
    name: "post_id",
  })
  post: PostEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  post_id_virtual: number;

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
}
