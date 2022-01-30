import { Module } from '@nestjs/common';
import { ShowNewReleasesService } from './show-new-releases.service';

@Module({
  providers: [ShowNewReleasesService],
})
export class CatalogModule {}
