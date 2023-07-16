import * as moment from 'moment';
import { BaseEntity, CreateDateColumn, UpdateDateColumn, ValueTransformer } from 'typeorm';

export const momentToTimestamp: ValueTransformer = {
  to: () => {
    return moment().toDate();
  },
  from: (value: Date) => value,
};

export class BaseModel extends BaseEntity {
  @UpdateDateColumn({
    type: 'timestamp',
    transformer: momentToTimestamp,
  })
  timestamp: Date;

  @CreateDateColumn({
    type: 'timestamp',
    transformer: momentToTimestamp,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    transformer: momentToTimestamp,
  })
  updated_at: Date;
}
