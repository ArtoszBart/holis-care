import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'E-mail nie może być pusty' }),
  password: z
    .string({ required_error: 'Hasło nie może być puste' })
    .min(1, { message: 'Hasło nie może być puste' }),
});

export const registerSchema = z
  .object({
    email: z
      .string({ required_error: 'E-mail nie może być pusty' })
      .email('To nie jest poprawny adres e-mail'),
    password: z
      .string({ required_error: 'Hasło nie może być puste' })
      .min(8, { message: 'Hasło musi mieć co najmniej 8 znaków' })
      .regex(/[A-Z]/, 'Hasło musi zawierać przynajmniej jedną wielką literę')
      .regex(/[a-z]/, 'Hasło musi zawierać przynajmniej jedną małą literę')
      .regex(/[0-9]/, 'Hasło musi zawierać przynajmniej jedną cyfrę')
      .regex(
        /[^A-Za-z0-9]/,
        'Hasło musi zawierać przynajmniej jeden znak specjalny',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Hasła muszą być takie same',
    path: ['confirmPassword'],
  });

export type LoginDTO = z.infer<typeof loginSchema>;
export type RegisterDTO = z.infer<typeof registerSchema>;

export type LoginResponseDTO = {
  AuthenticationResult: {
    AccessToken: string;
    ExpiresIn: 3600;
    TokenType: string;
    RefreshToken: string;
    IdToken: string;
  };
};
