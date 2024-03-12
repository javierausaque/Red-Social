import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {  HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Date } from 'mongoose';

export type PostDocument = Post & Document ;

@Schema()
export class Post {

@Prop()
title: string

@Prop()
content: string

@Prop()
likes: number

@Prop( { type: mongoose.Schema.Types.Date } )
createdAt: Date

@Prop( { type: mongoose.Schema.Types.Date } )
updatedAt : Date

@Prop( { type: mongoose.Schema.Types.Date } )
deletedAt: Date

@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
userId : User
}

export const PostSchema = SchemaFactory.createForClass(Post);