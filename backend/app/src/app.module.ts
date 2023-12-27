import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import userModel from './users/Schema/userschema';

@Module({
  imports: [
    UsersModule, 
    MongooseModule.forRoot('mongodb+srv://mongo:<password>@cluster1.n5qimr9.mongodb.net/',{dbName: 'tester'}),
    MongooseModule.forFeature([{ name: 'user', schema: userModel }]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
