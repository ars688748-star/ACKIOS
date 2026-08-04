import { IInstallationStrategy } from "./IInstallationStrategy.js";
import { InstallationContext } from "../InstallationContext.js";


export class InstallationStrategySelector {


    public constructor(
        private readonly strategies:
            IInstallationStrategy[]
    ) {}



    public select(
        context: InstallationContext
    ):
        IInstallationStrategy | undefined {


        return this.strategies.find(

            strategy =>
                strategy.canHandle(context)

        );

    }


}
