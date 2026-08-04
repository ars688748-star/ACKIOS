import { UniverseKernelFactory } from "./UniverseKernelFactory.js";
import type { Universe } from "../model/Universe.js";

export class AckiosUniverseRuntime {

    private readonly kernel =
        UniverseKernelFactory.create();

    public update(

        universe: Universe

    ) {

        return this.kernel.update(

            universe

        );

    }

}
