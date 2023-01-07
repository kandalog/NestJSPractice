import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Item } from '@prisma/client';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Item> {
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.update(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
