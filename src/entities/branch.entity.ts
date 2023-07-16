import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { BrandEntity } from "./brand.entity";
import { RestaurantEntity } from "./restaurant.entity";

@Entity("branch")
export class BranchEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  branch_id: string;

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

  @ManyToOne(() => BrandEntity, (brand) => brand.brand_id, {
    nullable: true,
  })
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
  address: string;

  @Column({
    type: "int",
    nullable: true,
  })
  status: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  average_rating: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  food_rating: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  price_rating: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  spatial_rating: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  hygiene_rating: number;

  @Column({
    type: "float",
    default: 0,
    nullable: true,
  })
  service_rating: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_review: number;

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
  banner: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  lat: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  lng: string;
}
