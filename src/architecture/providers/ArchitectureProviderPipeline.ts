import { InspectionContext } from "../../inspector/models/InspectionContext.js";

import { ArchitectureProviderRegistry } from "./ArchitectureProviderRegistry.js";

export class ArchitectureProviderPipeline{

    private readonly providers =
        new ArchitectureProviderRegistry().build();

    public async execute(
        context:InspectionContext
    ):Promise<void>{

        for(const provider of this.providers){

            await provider.enrich(context);

        }

    }

}
