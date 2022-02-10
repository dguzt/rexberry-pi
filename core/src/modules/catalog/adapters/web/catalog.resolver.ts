import {Game} from "../../domain/game";
import {ShowNewReleasesService} from "../../application/show-new-releases.service";

export class CatalogResolver {
  private readonly showNewReleases: ShowNewReleasesService;

  constructor(showNewReleases: ShowNewReleasesService) {
    this.showNewReleases = showNewReleases;
  }

  async newReleases(): Promise<Game[]> {
    return this.showNewReleases.execute();
  }
}
