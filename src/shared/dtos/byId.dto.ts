import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const ParamIdSchema = z.object({
  id: z.uuid({ error: 'ID deve estar em formato uuid' }),
});

export class ParamIdDto extends createZodDto(ParamIdSchema) {}
