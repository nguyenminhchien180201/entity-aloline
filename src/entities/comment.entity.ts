import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { PostEntity } from "./post.entity";
import { StickerEntity } from "./sticker.entity";
import { UserEntity } from "./user.entity";
import { RestaurantEntity } from "./restaurant.entity";

@Entity("comment")
export class CommentEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  comment_id: string;

  @ManyToOne(() => PostEntity, (post) => post.post_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "post_id",
  })
  post: PostEntity;

  @ManyToOne(() => StickerEntity, (sticker) => sticker.sticker_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "sticker_id",
  })
  sticker: StickerEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  sticker_id_virtual: string;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  post_id_virtual: number;

  @ManyToOne(() => CommentEntity, (comment) => comment.comment_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "parent_id",
  })
  parent: CommentEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  parent_id_virtual: number;

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
    type: "int",
    default: 0,
    nullable: true,
  })
  is_admin: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  message: string;

  @Column({
    type: "jsonb",
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  media: any;

  @Column({
    type: "jsonb",
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  tag: any;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_like: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_love: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_haha: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_angry: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_sad: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_wow: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_nothing: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_reply: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  status: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  thumbnail: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  my_reaction: number;


  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_owner: number

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.restaurant_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'restaurant_id',
  })
  restaurant_id: RestaurantEntity

}
