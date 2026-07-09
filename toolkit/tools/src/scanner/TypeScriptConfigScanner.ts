import fs from "node:fs";
import path from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface TypeScriptConfigScanResult {

    exists: boolean;

    strict: boolean;
    noImplicitAny: boolean;
    noUnusedLocals: boolean;
    noUnusedParameters: boolean;

    forceConsistentCasingInFileNames: boolean;
    skipLibCheck: boolean;

    noUncheckedIndexedAccess: boolean;

    exactOptionalPropertyTypes: boolean;

    isolatedModules: boolean;

    verbatimModuleSyntax: boolean;

    useDefineForClassFields: boolean;

    target: string;
    module: string;
    moduleResolution: string;

    rootDir: string;
    outDir: string;

}

export class TypeScriptConfigScanner
    implements Scanner<TypeScriptConfigScanResult> {

    public scan(root: string): TypeScriptConfigScanResult {

        const file = path.join(root, "tsconfig.json");

        if (!fs.existsSync(file)) {
            return this.empty();
        }

        try {

            const json = JSON.parse(
                fs.readFileSync(file, "utf8")
            );

            const options = json.compilerOptions ?? {};

            return {

                exists: true,

                strict: options.strict ?? false,
                noImplicitAny: options.noImplicitAny ?? false,
                noUnusedLocals: options.noUnusedLocals ?? false,
                noUnusedParameters: options.noUnusedParameters ?? false,

                forceConsistentCasingInFileNames:
                    options.forceConsistentCasingInFileNames ?? false,

                skipLibCheck:
                    options.skipLibCheck ?? false,

                noUncheckedIndexedAccess:
                    options.noUncheckedIndexedAccess ?? false,

                exactOptionalPropertyTypes:
                    options.exactOptionalPropertyTypes ?? false,

                isolatedModules:
                    options.isolatedModules ?? false,

                verbatimModuleSyntax:
                    options.verbatimModuleSyntax ?? false,

                useDefineForClassFields:
                    options.useDefineForClassFields ?? false,

                target: options.target ?? "",
                module: options.module ?? "",
                moduleResolution: options.moduleResolution ?? "",

                rootDir: options.rootDir ?? "",
                outDir: options.outDir ?? ""

            };

        }
        catch {

            return this.empty();

        }

    }

    private empty(): TypeScriptConfigScanResult {

        return {

            exists: false,

            strict: false,
            noImplicitAny: false,
            noUnusedLocals: false,
            noUnusedParameters: false,

            forceConsistentCasingInFileNames: false,
            skipLibCheck: false,

            noUncheckedIndexedAccess: false,

            exactOptionalPropertyTypes: false,

            isolatedModules: false,

            verbatimModuleSyntax: false,

            useDefineForClassFields: false,

            target: "",
            module: "",
            moduleResolution: "",

            rootDir: "",
            outDir: ""

        };

    }

}
