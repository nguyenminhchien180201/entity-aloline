import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { CategoryStickerEntity } from "./category-sticker.entity";
import { UserEntity } from "./user.entity";

@Entity("my_sticker")
export class MyStickerEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  my_sticker_id: string;

  @ManyToOne(
    () => CategoryStickerEntity,
    (categorySticker) => categorySticker.category_sticker_id,
    { nullable: true }
  )
  @JoinColumn({ name: "category_sticker_id" })
  category_sticker: CategoryStickerEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  category_sticker_id_virtual: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: "user_id",
  })
  user_id: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  user_id_virtual: number;
}
