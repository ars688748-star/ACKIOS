import { Rule } from "./contracts/Rule.js";

import { DependenciesRule } from "./rules/DependenciesRule.js";
import { EnginesRule } from "./rules/EnginesRule.js";
import { EslintRule } from "./rules/EslintRule.js";
import { GitignoreRule } from "./rules/GitignoreRule.js";
import { GitRepositoryRule } from "./rules/GitRepositoryRule.js";
import { HomepageRule } from "./rules/HomepageRule.js";
import { LicenseRule } from "./rules/LicenseRule.js";
import { PackageLicenseRule } from "./rules/PackageLicenseRule.js";
import { PackageManagerRule } from "./rules/PackageManagerRule.js";
import { ReadmeRule } from "./rules/ReadmeRule.js";
import { RepositoryRule } from "./rules/RepositoryRule.js";
import { ScriptsRule } from "./rules/ScriptsRule.js";
import { SecurityRule } from "./rules/SecurityRule.js";
import { TsConfigRule } from "./rules/TsConfigRule.js";
import { TypeScriptRule } from "./rules/TypeScriptRule.js";

export function createRules(): Rule[] {

    return [

        new DependenciesRule(),
        new EnginesRule(),
        new EslintRule(),
        new GitignoreRule(),
        new GitRepositoryRule(),
        new HomepageRule(),
        new LicenseRule(),
        new PackageLicenseRule(),
        new PackageManagerRule(),
        new ReadmeRule(),
        new RepositoryRule(),
        new ScriptsRule(),
        new SecurityRule(),
        new TsConfigRule(),
        new TypeScriptRule()

    ];

}