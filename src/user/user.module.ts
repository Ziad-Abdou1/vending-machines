import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the User entity
  providers: [UserService], // Provide the UserService
  exports: [UserService], // Export the UserService so other modules can use it
})
export class UserModule {}