import { WorkspaceState } from "../../../types/WorkspaceState.js";

export function createWorkspace(): WorkspaceState {

    return {

        project: {
            name: "demo",
            version: "1.0.0",
            root: "."
        },

        environment: {
            nodeVersion: "22.0.0",
            platform: "win32",
            hasGit: true,
            hasTypeScript: true,
            repositoryRoot: "."
        },

        git: {
            hasRepository: true,
            branch: "main",
            remoteUrl: "",
            commit: ""
        },

        framework: {
            typescript: true,
            react: false,
            electron: false,
            vite: false,
            vue: false,
            next: false,
            nest: false,
            express: false
        },

        dependencies: {
            production: [],
            development: [],
            peer: [],
            optional: []
        },

        structure: {
            hasReadme: true,
            hasLicense: true,
            hasGitignore: true,
            hasEditorConfig: true
        },

        readme: {
            exists: true,
            length: 1000,
            hasInstallation: true,
            hasUsage: true,
            hasLicense: true,
            hasContributing: true
        },

        eslint: {
            exists: true,
            flatConfig: true,
            legacyConfig: false,
            hasTypeScriptSupport: true,
            usesRecommended: true,
            hasNoUnusedVars: true,
            hasNoExplicitAny: true,
            hasImportPlugin: true
        },

        typescript: {

            exists: true,

            strict: true,

            noImplicitAny: true,

            noUnusedLocals: true,

            noUnusedParameters: true,

            forceConsistentCasingInFileNames: true,

            skipLibCheck: true,

            noUncheckedIndexedAccess: true,

            exactOptionalPropertyTypes: true,

            isolatedModules: true,

            verbatimModuleSyntax: true,

            useDefineForClassFields: true,

            target: "ES2022",

            module: "NodeNext",

            moduleResolution: "NodeNext",

            rootDir: "src",

            outDir: "dist"

        },

        package: {
            exists: true,
            name: "demo",
            version: "1.0.0",
            private: false,
            license: "MIT",
            repository: "",
            homepage: "",
            packageManager: "",
            engines: {},
            scripts: {},
            keywords: []
        }

    };

}
