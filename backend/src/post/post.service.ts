import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from 'src/schema/post.schema';
import { Model } from 'mongoose';


@Injectable()
export class PostService {

  constructor(@InjectModel(Post.name) private postModule: Model<PostDocument>){

  }

 async create(createPostDto: CreatePostDto) {
    return  this.postModule.create(createPostDto);
  }

  findAll() {
    return this.postModule.findOne();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
