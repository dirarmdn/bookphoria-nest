import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  create(data: CreateUserDto) {
    return this.usersRepository.create({ ...data });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne<User>({ where: { id } });
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findOne<User>({ where: { username } });
  }

  async update(id: number, data: UpdateUserDto) {
    await this.usersRepository.update(data, { where: { id } });
    return this.usersRepository.findByPk(id);
  }

  async remove(id: number) {
    return await this.usersRepository.destroy({ where: { id } });
  }
}
