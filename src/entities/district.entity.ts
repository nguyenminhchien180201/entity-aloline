import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { CityEntity } from "./city.entity";

@Entity("district")
export class DistrictEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  district_id: string;

  @ManyToOne(() => CityEntity, (city) => city.city_id, { nullable: true })
  @JoinColumn({
    name: "city_id",
  })
  city: CityEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  city_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;
}
