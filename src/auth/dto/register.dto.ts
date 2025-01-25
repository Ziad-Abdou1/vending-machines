export class RegisterDto {
    username: string;
    password: string;
    role: 'Admin' | 'User';
  }