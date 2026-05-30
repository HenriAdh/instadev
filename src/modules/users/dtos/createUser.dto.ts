import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(3, { error: 'Nome deve conter pelo menos 3 caracteres' }),
  email: z.email({ error: 'Formato de e-mail inválido' }),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
