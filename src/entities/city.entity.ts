import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { CountryEntity } from "./country.entity";

@Entity("city")
export class CityEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  city_id: string;

  @ManyToOne(() => CountryEntity, (country) => country.country_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "country_id",
  })
  country: CountryEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  country_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;
}
