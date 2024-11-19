import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');
    let statusCode = 200;

    switch (exception.code) {
      case 'P2002': {
        statusCode = HttpStatus.CONFLICT;
        break;
      }

      case 'P1008': {
        statusCode = HttpStatus.GATEWAY_TIMEOUT;
        break;
      }

      default:
        super.catch(exception, host);
        break;
    }

    response.status(statusCode).json({
      statusCode: statusCode,
      message: message,
    });
  }
}
