import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";
import { PostEntity } from "./post.entity";
import { CardTagEntity } from "./card-tag.entity";

@Entity("post_card_tag")
export class PostCardTagEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", { type: "bigint" })
  post_card_tag_id: string;

  @ManyToOne(() => PostEntity, (post) => post.post_id, { nullable: true })
  @JoinColumn({ name: "post_id" })
  post: PostEntity;

  @ManyToOne(() => CardTagEntity, (cardTag) => cardTag.card_tag_id, {
    nullable: true,
  })
  @JoinColumn({ name: "card_tag_id" })
  card_tag: CardTagEntity;
}
