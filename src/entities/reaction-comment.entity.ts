import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommentEntity } from "./comment.entity";
import { UserEntity } from "./user.entity";
import { BaseModel } from "./base.entity";

@Entity("reaction_comment")
export class ReactionCommentEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  reaction_comment_id: string;

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

  @ManyToOne(() => CommentEntity, (comment) => comment.comment_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "comment_id",
  })
  comment: CommentEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  comment_id_virtual: number;

  @Column({
    type: "int",
    nullable: true,
  })
  reaction_type: number;
}
