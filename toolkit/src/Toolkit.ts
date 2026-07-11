import { AnalysisEngineBuilder } from "./engine/AnalysisEngineBuilder.js";
import { ProjectScanner } from "./scanner/ProjectScanner.js";
import { RepositoryLocator } from "./scanner/RepositoryLocator.js";

import { DefaultWorkspaceLoader } from "./workspace/loader/DefaultWorkspaceLoader.js";
import { DefaultWorkspaceManager } from "./workspace/manager/DefaultWorkspaceManager.js";

export class Toolkit {

    private readonly workspace =
        new DefaultWorkspaceManager(
            new DefaultWorkspaceLoader(
                new ProjectScanner()
            ),
            new RepositoryLocator()
        );

    private readonly analysis =
        new AnalysisEngineBuilder().build();

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
