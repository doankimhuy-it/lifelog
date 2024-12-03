import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { BlogsService } from '../modules/blogs/blogs.service';
import { BookmarksService } from '../modules/bookmarks/bookmarks.service';
import { CommentsService } from '../modules/comments/comments.service';
import { LikesService } from '../modules/likes/likes.service';

@Injectable()
export class AuthzGuard implements CanActivate {
  constructor(
    private readonly blogsService: BlogsService,
    private readonly likesService: LikesService,
    private readonly commentsService: CommentsService,
    private readonly bookmarksService: BookmarksService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const [objType, objId] = request.url
      .split('/')
      .filter((item: string) => item != '');
    if (!objId) {
      throw new BadRequestException();
    }

    const userId = await (async () => {
      switch (objType) {
        case 'blogs':
          return await this.blogsService
            .findOneById(objId)
            .then((blog) => blog?.userId);

        case 'likes':
          return await this.likesService
            .findOneById(objId)
            .then((like) => like?.userId);

        case 'comments':
          return await this.commentsService
            .findOneById(objId)
            .then((comment) => comment.userId);

        case 'bookmarks':
          return await this.bookmarksService
            .findOneById(objId)
            .then((bookmark) => bookmark?.userId);

        default:
          return undefined;
      }
    })();

    if (!userId || userId !== request.user.id) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
