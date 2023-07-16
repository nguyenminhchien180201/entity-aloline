import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { CityEntity } from './city.entity';
import { CountryEntity } from './country.entity';
import { DistrictEntity } from './district.entity';
import { RestaurantEntity } from './restaurant.entity';
import { WardEntity } from './ward.entity';

@Entity('user')
export class UserEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  user_id: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  avatar: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  full_name: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  nick_name: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  identification: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  lat: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  lng: string;

  @ManyToOne(() => CityEntity, (city) => city.city_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'city_id',
  })
  city: CityEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  city_id_virtual: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_alo_point: number;

  @ManyToOne(() => DistrictEntity, (district) => district.district_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'district_id',
  })
  district: DistrictEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  district_id_virtual: number;

  @ManyToOne(() => WardEntity, (ward) => ward.ward_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'ward_id',
  })
  ward: WardEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  ward_id_virtual: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_follow: number;

  @ManyToOne(() => CountryEntity, (country) => country.country_id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'country_id',
  })
  country: CountryEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  country_id_virtual: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  cover: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  gender: number;

  @Column({
    type: 'smallint',
    default: 1, // Active
  })
  status: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  birthday: Date;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  first_name: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  last_name: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  no_of_friend: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  website: string;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  email: string;

  @Column({
    type: 'int',
    array: true,
    default: [],
    nullable: true,
  })
  user_interests: number[];

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_notify: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_dark_mode: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view_about: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view_life_event: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view_friend: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  view_media: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_request_friend: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_display_name: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_gender: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_birthday: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_phone: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_email: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_address: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_city: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_district: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  is_enable_ward: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  time_seen_notify: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  last_connect: Date;

  @OneToOne(() => RestaurantEntity, { nullable: true })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantEntity;
}
