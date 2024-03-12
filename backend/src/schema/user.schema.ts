import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Post } from './post.schema';

export type UserDocument = User  & Document;

@Schema()
export class User {

  @Prop()
  fullName: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Array<Post>

  @Prop( { type: mongoose.Schema.Types.Date } )
  createdAt: Date

  @Prop( { type: mongoose.Schema.Types.Date } )
  updatedAt: Date
  
  @Prop( { type: mongoose.Schema.Types.Date } )
  deletedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User); 