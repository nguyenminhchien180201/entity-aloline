import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { ReportEntity } from "./report.entity";
import { UserEntity } from "./user.entity";

@Entity("user_report")
export class UserReportEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  user_report_id: string;

  @ManyToOne(() => ReportEntity, (report) => report.report_id, {
    nullable: true,
  })
  @JoinColumn({
    name: "report_id",
  })
  report: ReportEntity;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  report_id_virtual: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: "user_id",
  })
  user: UserEntity;

  @Column({
    type: "bigint",
    default: "0",
    nullable: true,
  })
  user_id_virtual: string;

  @Column({
    type: "int",
    nullable: true,
  })
  type_report: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  content_report: string;
}
