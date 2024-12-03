import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  async transform(value: unknown, metadata: ArgumentMetadata) {
    const parsedValue = await this.schema
      .parseAsync(value)
      .then((res) => {
        return res;
      })
      .catch((e: Error) => {
        throw new BadRequestException(e.message.trim());
      });
    
    return parsedValue;
  }
}
