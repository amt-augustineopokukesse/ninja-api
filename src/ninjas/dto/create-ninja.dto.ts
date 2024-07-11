import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchucks'], {
    message: 'weapon must be stars or nunchucks',
  })
  weapon: 'stars' | 'nunchucks';
}
