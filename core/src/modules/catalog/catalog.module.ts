import { Module } from '@nestjs/common';
import { ShowNewReleasesService } from './application/show-new-releases.service';

@Module({
  providers: [ShowNewReleasesService],
})
export class CatalogModule {}
