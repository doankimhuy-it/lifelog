import { Prisma } from '@prisma/client';
import { Day } from '../../../constants/common.constant';
import { OrderBy } from '../../../constants/enum.constant';

export class FindBlogDto {
  author?: string;
  title?: string;
  description?: string;
  createdAtGte?: Date = new Date(Date.now() - 30 * Day);
  createdAtLte?: Date = new Date();
  updatedAtGte?: Date = new Date(Date.now() - 30 * Day);
  updatedAtLte?: Date = new Date();
  orderBy?: OrderBy = OrderBy.CreatedAt;
  sortOrder?: Prisma.SortOrder = Prisma.SortOrder.desc;
  hasInteracted?: boolean = false;
}
