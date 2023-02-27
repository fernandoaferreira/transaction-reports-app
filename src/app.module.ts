import { Module } from '@nestjs/common';
import { ExtractModule } from './domain/extract/extract.module';

@Module({
  imports: [ExtractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
