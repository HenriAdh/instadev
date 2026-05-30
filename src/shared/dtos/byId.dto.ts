import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const ParamIdSchema = z.object({
  id: z.uuid(),
});

export class ParamIdDto extends createZodDto(ParamIdSchema) {}
