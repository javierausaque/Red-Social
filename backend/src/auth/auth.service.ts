import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { hash, compare } from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
      @InjectModel(User.name) private userModule: Model<UserDocument>,
private jwtService : JwtService
    ){
  }

    
  async register(user: RegisterAuthDto) {
    const { password } = user;
    const plainToHash = await hash(password, 10)
    const date = new Date();
    user = {...user, password: plainToHash, createdAt:date}
    return  this.userModule.create(user);
  }

  async login(user : LoginAuthDto){
    const {email, password }  = user;
    const userBD = await this.userModule.findOne({email});
    if(!userBD){
      throw new  HttpException('Usuario no existe', HttpStatus.NOT_FOUND);
    }
    const checkPassword = await compare(password, userBD.password)
    if(!checkPassword){
      throw new  HttpException('Contraseña incorrecta', HttpStatus.FORBIDDEN);
    }

    const token = await this.jwtService.sign({
      "id": userBD.id,
      "fullName" : userBD.fullName
    });
    return {
      user: userBD,
      token
    };

  }

}
