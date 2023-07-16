import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { BranchEntity } from './branch.entity';
import { BrandEntity } from './brand.entity';
import { PostCardTagEntity } from './post-card-tag.entity';
import { RestaurantEntity } from './restaurant.entity';
import { UserEntity } from './user.entity';

@Entity('post')
export class PostEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  post_id: string;

  /**
   * Id của người khởi tạo
   */
  @ManyToOne(() => UserEntity, (user) => user.user_id, { nullable: true })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  user_id_virtual: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_review: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  auto_post_type: number;

  @ManyToOne(() => BranchEntity, (branch) => branch.branch_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'branch_id',
  })
  branch: BranchEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  branch_id_virtual: number;

  @ManyToOne(() => BrandEntity, (brand) => brand.brand_id, { nullable: true })
  @JoinColumn({
    name: 'brand_id',
  })
  brand: BrandEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  brand_id_virtual: number;

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.restaurant_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'restaurant_id',
  })
  restaurant: RestaurantEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  restaurant_id_virtual: number;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  average_rating: number;

  @Column({
    type: 'int',
    default: 0, // 0 - newsfeed, 1 - user, 2 - fanpage, 3 - group
    nullable: true,
  })
  post_type: number;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  target_id: number;

  /**
   * Tiêu đề bài viết
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  title: string;

  /**
   * Nội dung bài viết
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  /**
   * Media của bài viết
   */
  @Column({
    type: 'text',
    default: JSON.stringify([]),
    nullable: false,
  })
  medias: any;

  @OneToMany(() => PostCardTagEntity, (post_card_tag) => post_card_tag.post, {
    nullable: true,
  })
  post_card_tag: PostCardTagEntity;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  food_rating: number;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  price_rating: number;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  spatial_rating: number;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  hygiene_rating: number;

  @Column({
    type: 'float',
    default: 0,
    nullable: true,
  })
  service_rating: number;

  /**
   * Gắn thẻ bài viết
   */
  @Column({
    type: 'text',
    default: JSON.stringify([]),
    nullable: false,
  })
  tag: any;

  /**
   * Tổng số lượt bình luận
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_comment: number;

  /**
   * Tổng số lượt thích
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_love: number;

  /**
   * Tổng số lượt thích
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_wow: number;

  /**
   * Tổng số lượt thích
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  value: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  action_level: number;

  /**
   * Tổng số lượt thích
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_sad: number;

  /**
   * Tổng số lượt tức giận
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_angry: number;

  /**
   * Tổng số lượt giá trị
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_value: number;

  /**
   * Tổng số lượt thích
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_nothing: number;

  /**
   * Tổng số lượt chia sẽ
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_share: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_share: number;

  @ManyToOne(() => PostEntity, (post) => post.post_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'post_share_id',
  })
  post_share: PostEntity;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  post_share_id_virtual: number;

  /**
   *Trạng thái của bài viết
   * 0: Bình thường
   * 1: Bị an
   * 2: Bị xóa
   * 3: Bị khóa
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  status: number;

  /**
   *View của bài viết
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view: number;

  /**
   *Bài viết đã được detect hay chưa
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_detect: number;

  /**
   *Bài viết có phải là bài đăng avatar không
   */
  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_avatar_post: number;

  @Column({
    type: 'text',
    default: JSON.stringify({
      description: '',
      logo: '',
      title: '',
      domain: '',
    }),
    nullable: true,
  })
  thumbnail: {
    description: string;
    logo: string;
    title: string;
    domain: string;
  };
}
