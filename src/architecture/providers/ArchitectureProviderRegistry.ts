import { IArchitectureProvider } from "./IArchitectureProvider.js";

import { RuntimeProvider } from "./RuntimeProvider.js";
import { RepositoryBoundaryProvider } from "./RepositoryBoundaryProvider.js";

export class ArchitectureProviderRegistry{

    public build():IArchitectureProvider[]{

        return [

            new RuntimeProvider(),

            new RepositoryBoundaryProvider()

        ];

    }

}
