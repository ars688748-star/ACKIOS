import { StrategyProfile } from "../models/StrategyProfile.js";
import { StrategyLifecycleState } from "./StrategyLifecycleState.js";


export class StrategyLifecycleService {


    private current:
    {
        strategy: StrategyProfile;
        state: StrategyLifecycleState;
    } | null = null;



    public activate(
        strategy: StrategyProfile
    ): void {


        this.current = {

            strategy,

            state:
                StrategyLifecycleState.Active

        };


    }



    public update(
        strategy: StrategyProfile
    ): void {


        this.current = {

            strategy,

            state:
                StrategyLifecycleState.Updated

        };


    }



    public archive(): void {


        if (!this.current) {

            return;

        }


        this.current.state =
            StrategyLifecycleState.Archived;


    }



    public getCurrent():
    {
        strategy: StrategyProfile;
        state: StrategyLifecycleState;
    } | null {


        return this.current;


    }


}
