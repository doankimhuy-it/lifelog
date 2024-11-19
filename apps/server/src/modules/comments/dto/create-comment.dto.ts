export class CreateCommentDto {
  content: string;
  parentCommentId?: number;
  blogId: number;
}
