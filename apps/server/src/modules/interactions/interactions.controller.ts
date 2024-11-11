import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InteractionsService } from './interactions.service';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('interactions')
export class InteractionsController {
  constructor(private readonly interactionsService: InteractionsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createInteractionDto: CreateInteractionDto) {
    return this.interactionsService.create(createInteractionDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: number) {
    return this.interactionsService.delete(id);
  }
}
