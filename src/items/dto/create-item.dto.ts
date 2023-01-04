import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateItemDto {
  @IsString({
    message: '名前は必須です。',
  })
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number) // 数値にする
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
