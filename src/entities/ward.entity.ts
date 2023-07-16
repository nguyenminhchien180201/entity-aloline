import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { DistrictEntity } from "./district.entity";

@Entity("ward")
export class WardEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  ward_id: string;

  @ManyToOne(() => DistrictEntity, (district) => district.district_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "district_id",
  })
  district: DistrictEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  district_id_virtual: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;
}
