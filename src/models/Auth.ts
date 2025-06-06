import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'E-mail nie może być pusty' }),
  password: z
    .string({ required_error: 'Hasło nie może być puste' })
    .min(1, { message: 'Hasło nie może być puste' }),
});

export type LoginDTO = z.infer<typeof loginSchema>;
