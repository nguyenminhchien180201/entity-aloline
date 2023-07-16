import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { BrandEntity } from "./brand.entity";
import { UserEntity } from "./user.entity";

@Entity("love_brand")
export class LoveBrandEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  love_brand_id: string;

  @ManyToOne(() => BrandEntity, (brand) => brand.brand_id, { nullable: true })
  @JoinColumn({
    name: "brand_id",
  })
  brand: BrandEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  brand_id_virtual: number;

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
