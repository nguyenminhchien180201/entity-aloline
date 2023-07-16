import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { RestaurantEntity } from "./restaurant.entity";

@Entity("brand")
export class BrandEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  brand_id: string;

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.restaurant_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "restaurant_id",
  })
  restaurant: RestaurantEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  restaurant_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  phone: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  logo: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  cover: string;

  @Column({
    type: "int",
    default: 1,
    nullable: true,
  })
  status: number;
}
