import z from 'zod';
import { createZodDto } from 'nestjs-zod';

export const SignInSchema = z.object({
  login: z.union([z.string().min(3), z.email()]),
  password: z.string(),
});

export class SignInDto extends createZodDto(SignInSchema) {}
