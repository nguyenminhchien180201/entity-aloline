import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("restaurant")
export class RestaurantEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  restaurant_id: string;

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
    type: "text",
    default: "",
    nullable: true,
  })
  address: string;

  @Column({
    type: "int",
    default: 1,
    nullable: true,
  })
  status: number;
}
