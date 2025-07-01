import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/entities/users.entity';
import { SignUpDto } from '../auth/dto/signup.dto';
import { SignInDto } from '../auth/dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInData: SignInDto) {
    const { email, password } = signInData;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new NotFoundException('Invalid password');
    }
    const token = await this.jwtService.signAsync({ id: user.id });
    return { token };
  }

  async signUp(signUpData: SignUpDto) {
    const { email, password } = signUpData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      email,
      password: hashedPassword,
    });
    const token = await this.jwtService.signAsync({ id: user.id });
    return { token };
  }
}
