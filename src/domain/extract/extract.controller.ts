import { Controller, Get, Param } from '@nestjs/common';
import { ExtractService } from './extract.service';

@Controller('extract')
export class ExtractController {
  constructor(private readonly extractService: ExtractService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extractService.findOne(+id);
  }
}
