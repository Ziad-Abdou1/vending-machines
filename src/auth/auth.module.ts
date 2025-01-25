import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module'; // Import the UserModule

@Module({
  imports: [
    UserModule, // Import the UserModule
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_jwt_secret_key', // Use a fallback secret
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService], // Provide the AuthService
  controllers: [AuthController], // Register the AuthController
})
export class AuthModule {}