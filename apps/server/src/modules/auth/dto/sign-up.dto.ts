import { z } from "zod";


export const signUpSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  confirmationPassword: z.string()
})

export type SignUpDto = z.infer<typeof signUpSchema>;