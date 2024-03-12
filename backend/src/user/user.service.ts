import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from 'src/schema/post.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private postModule: Model<PostDocument>){
  }

  create(createUserDto: CreateUserDto) {
    return this.postModule.create(createUserDto) ;
  }

  findAll() {
    return this.postModule.findOne();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
