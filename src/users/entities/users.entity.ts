import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column
  password: string;
}
