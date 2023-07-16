import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("country")
export class CountryEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  country_id: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;
}
