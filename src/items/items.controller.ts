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
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  // @Get(':id') // /items/{id}
  // findById(@Param('id', new ParseUUIDPipe()) id: string): Item {
  //   return this.itemsService.findById(id);
  // }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  // @Patch(':id')
  // updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
  //   return this.itemsService.updateStatus(id);
  // }

  // @Delete(':id')
  // delete(@Param('id', ParseUUIDPipe) id: string): void {
  //   this.itemsService.delete(id);
  // }
}
