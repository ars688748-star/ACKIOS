import { InspectionContext } from "../../inspector/models/InspectionContext.js";

import { IArchitectureProvider } from "./IArchitectureProvider.js";

import { RepositoryBoundaryAdapter } from "../boundary/RepositoryBoundaryAdapter.js";

export class RepositoryBoundaryProvider
implements IArchitectureProvider{

    public readonly name =
        "Repository Boundary";

    private readonly adapter =
        new RepositoryBoundaryAdapter();

    public async enrich(
        context:InspectionContext
    ):Promise<void>{

        context.repositoryBoundary =
            await this.adapter.analyze();

    }

}
