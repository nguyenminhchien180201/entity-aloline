import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";
import { PostCardTagEntity } from "./post-card-tag.entity";

@Entity("card_tag")
export class CardTagEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  card_tag_id: string;

  @Column({
    type: "text",
    default: "",
  })
  name: string;

  @Column({
    type: "text",
    default: "",
  })
  color_hex_code: string;

  @Column({
    type: "int",
    default: 0,
  })
  type: number;

  @Column({
    type: "int",
    default: 0,
  })
  is_deleted: number;

  @OneToMany(
    () => PostCardTagEntity,
    (post_card_tag) => post_card_tag.card_tag,
    { nullable: true }
  )
  post_card_tag: PostCardTagEntity;
}
