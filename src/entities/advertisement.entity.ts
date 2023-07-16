import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseModel } from "./base.entity";

@Entity("advertisement")
export class AdvertisementEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  advert_id: string;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  history_advertisement_id: number;

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

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  point: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  accumulate_point: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  type: number;
}
