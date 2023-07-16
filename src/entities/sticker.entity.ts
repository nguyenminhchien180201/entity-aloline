import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { CategoryStickerEntity } from './category-sticker.entity';

@Entity('sticker')
export class StickerEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  sticker_id: string;

  @ManyToOne(() => CategoryStickerEntity, (categorySticker) => categorySticker.category_sticker_id, { nullable: true })
  @JoinColumn({ name: 'category_sticker_id' })
  category_sticker: CategoryStickerEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  category_sticker_id_virtual: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  media: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  tag: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  normalized_tag: string;
}
