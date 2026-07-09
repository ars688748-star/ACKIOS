import { TypeScriptConfigScanResult } from "../scanner/TypeScriptConfigScanner.js";
import { PackageScanResult } from "../scanner/PackageScanner.js";
import { ReadmeScanResult } from "../scanner/ReadmeScanner.js";
import { EslintScanResult } from "../scanner/EslintScanner.js";

export interface ProjectInfo {
    name: string;
    version: string;
    root: string;
}

export interface EnvironmentInfo {
    nodeVersion: string;
    platform: string;
    hasGit: boolean;
    hasTypeScript: boolean;
    repositoryRoot: string;
}

export interface GitInfo {
    hasRepository: boolean;
    branch: string;
    remoteUrl: string;
    commit: string;
}

export interface FrameworkInfo {
    typescript: boolean;
    react: boolean;
    electron: boolean;
    vite: boolean;
    vue: boolean;
    next: boolean;
    nest: boolean;
    express: boolean;
}

export interface DependencyInfo {
    production: string[];
    development: string[];
    peer: string[];
    optional: string[];
}

export interface ProjectStructureInfo {
    hasReadme: boolean;
    hasLicense: boolean;
    hasGitignore: boolean;
    hasEditorConfig: boolean;
}

export interface WorkspaceState {
    project: ProjectInfo;
    environment: EnvironmentInfo;
    git: GitInfo;
    framework: FrameworkInfo;
    dependencies: DependencyInfo;
    structure: ProjectStructureInfo;
    readme: ReadmeScanResult;

    eslint: EslintScanResult;
    typescript: TypeScriptConfigScanResult;
    package: PackageScanResult;
}
