import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.email(),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
