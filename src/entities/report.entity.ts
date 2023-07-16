import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserReportEntity } from "./user-report.entity";
import { UserEntity } from "./user.entity";

@Entity("report")
export class ReportEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  report_id: string;

  @Column({
    type: "bigint",
    nullable: true,
  })
  content_id: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: "report_user_id",
  })
  report_user: UserEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  report_user_id_virtual: number;

  @Column({
    type: "int",
    nullable: true,
  })
  type: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  status: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  no_of_report: number;
}
