import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface CityCreationAttrs {
  domain: number;
  code: string;
  name: string;
  enable: number;
  href_visible: number;
  check_street: number;
  sort_id: number;
  is_multiple_owners: number;
}

@Table({ tableName: 'city' })
export class City extends Model<City, CityCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  domain: number;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  code: string;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  enable: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  href_visible: number;
  @Column({
    type: DataType.TINYINT,
    allowNull: false,
  })
  check_street: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  sort_id: number;
  @Column({
    type: DataType.CHAR,
  })
  region: number;
  @Column({
    type: DataType.TINYINT,
    defaultValue: 0,
  })
  is_multiple_owners: number;
}
