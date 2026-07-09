import { WorkspaceState } from "../types/WorkspaceState.js";

import { EnvironmentScanner } from "./EnvironmentScanner.js";
import { GitScanner } from "./GitScanner.js";
import { FrameworkScanner } from "./FrameworkScanner.js";
import { DependencyScanner } from "./DependencyScanner.js";
import { ProjectStructureScanner } from "./ProjectStructureScanner.js";
import { ReadmeScanner } from "./ReadmeScanner.js";
import { EslintScanner } from "./EslintScanner.js";
import { TypeScriptConfigScanner } from "./TypeScriptConfigScanner.js";
import { PackageScanner } from "./PackageScanner.js";

export class ScannerPipeline {

    public execute(root: string): Omit<WorkspaceState, "project"> {

        const environment = new EnvironmentScanner().scan(root);

        const git = new GitScanner().scan(environment.repositoryRoot);

        const framework = new FrameworkScanner().scan(root);

        const dependencies = new DependencyScanner().scan(root);

        const structure = new ProjectStructureScanner().scan(
            environment.repositoryRoot
        );

        const readme = new ReadmeScanner().scan(
            environment.repositoryRoot
        );

        const eslint = new EslintScanner().scan(root);

        const typescript = new TypeScriptConfigScanner().scan(root);

        const packageInfo = new PackageScanner().scan(root);

        return {
            environment,
            git,
            framework,
            dependencies,
            structure,
            readme,
            eslint,
            typescript,
            package: packageInfo
        };

    }

}
