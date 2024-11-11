import {
  InteractedOn,
  InteractionType,
} from '../../../constants/module.constant';

export class CreateInteractionDto {
  type: InteractionType;
  interactedOn: InteractedOn;
  content?: string;
  interactedCommentId?: number;
  blogId: number;
  authorId: number;
}
