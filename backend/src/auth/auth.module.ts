import { Module, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from 'src/schema/post.schema';
import { User, UserSchema } from 'src/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
