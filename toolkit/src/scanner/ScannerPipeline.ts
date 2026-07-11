import { WorkspaceState } from "../types/WorkspaceState.js";

import { DependencyScanner } from "./DependencyScanner.js";
import { EnvironmentScanner } from "./EnvironmentScanner.js";
import { EslintScanner } from "./EslintScanner.js";
import { FrameworkScanner } from "./FrameworkScanner.js";
import { GitScanner } from "./GitScanner.js";
import { PackageScanner } from "./PackageScanner.js";
import { ProjectStructureScanner } from "./ProjectStructureScanner.js";
import { ReadmeScanner } from "./ReadmeScanner.js";
import { TypeScriptConfigScanner } from "./TypeScriptConfigScanner.js";

export class ScannerPipeline {

    constructor(
        private readonly environmentScanner: EnvironmentScanner,
        private readonly gitScanner: GitScanner,
        private readonly frameworkScanner: FrameworkScanner,
        private readonly dependencyScanner: DependencyScanner,
        private readonly structureScanner: ProjectStructureScanner,
        private readonly readmeScanner: ReadmeScanner,
        private readonly eslintScanner: EslintScanner,
        private readonly typeScriptConfigScanner: TypeScriptConfigScanner,
        private readonly packageScanner: PackageScanner
    ) {}

    public execute(root: string): Omit<WorkspaceState, "project"> {

        const environment = this.environmentScanner.scan(root);

        const git = this.gitScanner.scan(environment.repositoryRoot);

        const framework = this.frameworkScanner.scan(root);

        const dependencies = this.dependencyScanner.scan(root);

        const structure = this.structureScanner.scan(
            environment.repositoryRoot
        );

        const readme = this.readmeScanner.scan(
            environment.repositoryRoot
        );

        const eslint = this.eslintScanner.scan(root);

        const typescript = this.typeScriptConfigScanner.scan(root);

        const packageInfo = this.packageScanner.scan(root);

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
