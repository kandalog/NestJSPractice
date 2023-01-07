import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { Item } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma.service';
import { timeStamp } from 'console';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  private items: Item[] = [];

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  // findById(id: string): Item {
  //   const found = this.items.find((item) => item.id == id);
  //   if (!found) {
  //     throw new NotFoundException();
  //   }
  //   return found;
  // }

  async create(item: Item): Promise<Item> {
    return this.prisma.item.create({
      data: {
        ...item,
      },
    });
  }

  // updateStatus(id: string): Item {
  //   const item = this.findById(id);
  //   item.status = ItemStatus.SOLD_OUT;
  //   return item;
  // }

  // delete(id: string): void {
  //   this.items = this.items.filter((item) => item.id != id);
  // }
}
