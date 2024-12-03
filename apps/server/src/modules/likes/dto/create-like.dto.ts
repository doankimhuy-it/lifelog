import { z } from 'zod';

export const createLikeSchema = z.object({
  blogId: z.number(),
  commentId: z.number().optional(),
});

export type CreateLikeDto = z.infer<typeof createLikeSchema>;
