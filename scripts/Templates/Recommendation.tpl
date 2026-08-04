import { WorkspaceState } from "../../types/WorkspaceState.js";

import { Recommendation } from "../Recommendation.js";
import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class {{RecommendationName}}
implements RecommendationProvider {

    public provide(
        _workspace: WorkspaceState
    ): Recommendation[] {

        return [];

    }

}
