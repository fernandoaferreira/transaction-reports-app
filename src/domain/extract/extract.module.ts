import { Module } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { ExtractController } from './extract.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ExtractController],
  providers: [ExtractService, PrismaService],
})
export class ExtractModule {}
