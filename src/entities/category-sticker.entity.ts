import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("category_sticker")
export class CategoryStickerEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  category_sticker_id: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: "owner_id",
  })
  owner: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  owner_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;

  @Column({
    type: "text",
    default: "",
    nullable: true, // ảnh đại diện của bộ sticker
  })
  media: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  price: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_download: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_sticker: number;

  @Column({
    type: "int",
    default: 0, // 0 - chờ duyệt, 1 - đã duyệt, 2 - từ chối, 3 - đã xoá
    nullable: true,
  })
  status: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  delete_reason: string; // Lý do xoá

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  reject_reason: string; // Lý do từ chối duyệt

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_admin: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_bypass_download: number;
}
