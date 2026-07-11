import { AnalysisEngine } from "./engine/AnalysisEngine.js";
import { RepositoryLocator } from "./scanner/RepositoryLocator.js";

import { DefaultWorkspaceLoader } from "./workspace/loader/DefaultWorkspaceLoader.js";
import { DefaultWorkspaceManager } from "./workspace/manager/DefaultWorkspaceManager.js";

export class Toolkit {

    private readonly workspace =
        new DefaultWorkspaceManager(
            new DefaultWorkspaceLoader(),
            new RepositoryLocator()
        );

    private readonly analysis =
        new AnalysisEngine();

    public async analyze(
        root: string
    ) {

        const workspace =
            await this.workspace.open({
                root
            });

        return this.analysis.analyze(
            workspace
        );

    }

}
