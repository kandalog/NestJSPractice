import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  private items: Item[] = [];

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async findById(id: string): Promise<Item> {
    const item = await this.prisma.item.findUnique({
      where: {
        id: String(id),
      },
    });
    if (!item) {
      new NotFoundException();
    }
    return item;
  }

  async create(item: Item): Promise<Item> {
    return this.prisma.item.create({
      data: {
        ...item,
      },
    });
  }

  async update(id: string): Promise<Item> {
    return this.prisma.item.update({
      where: { id: id },
      data: {
        status: ItemStatus.SOLD_OUT,
      },
    });
  }

  async delete(id: string): Promise<Item> {
    return this.prisma.item.delete({
      where: { id: id },
    });
  }
}
