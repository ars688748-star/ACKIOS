import { DependencyScanner } from "./DependencyScanner.js";
import { EnvironmentScanner } from "./EnvironmentScanner.js";
import { EslintScanner } from "./EslintScanner.js";
import { FrameworkScanner } from "./FrameworkScanner.js";
import { GitScanner } from "./GitScanner.js";
import { PackageScanner } from "./PackageScanner.js";
import { ProjectStructureScanner } from "./ProjectStructureScanner.js";
import { ReadmeScanner } from "./ReadmeScanner.js";
import { RepositoryLocator } from "./RepositoryLocator.js";
import { ScannerPipeline } from "./ScannerPipeline.js";
import { TypeScriptConfigScanner } from "./TypeScriptConfigScanner.js";

export class ScannerBuilder {

    build(): ScannerPipeline {

        return new ScannerPipeline(
            new EnvironmentScanner(
                new RepositoryLocator()
            ),
            new GitScanner(),
            new FrameworkScanner(),
            new DependencyScanner(),
            new ProjectStructureScanner(),
            new ReadmeScanner(),
            new EslintScanner(),
            new TypeScriptConfigScanner(),
            new PackageScanner()
        );

    }

}
