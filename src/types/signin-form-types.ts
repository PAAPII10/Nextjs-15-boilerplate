import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const ForgotPasswordSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    newpassword: z.string().min(6, 'Password must be at least 6 characters'),
    confirmpassword: z.string().min(6, 'Password must be at least 6 characters'),
  })
  .refine(data => data.newpassword === data.confirmpassword, {
    message: 'Passwords do not match',
    path: ['confirmpassword'],
  });
