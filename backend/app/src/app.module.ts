import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Logger } from '@nestjs/common';
const logger = new Logger('MyLogger');


@Module({
  imports:[
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.CONNECTION_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
