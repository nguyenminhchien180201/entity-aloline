import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("interest")
export class InterestEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  interest_id: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  name: string;
}
