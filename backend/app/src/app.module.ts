import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import userModel from './users/Schema/userschema';

@Module({
  // imports: [UsersModule],
  imports:[
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://mongo:GENwdWjKD7Qy4Pk@cluster1.n5qimr9.mongodb.net/tester?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

}
