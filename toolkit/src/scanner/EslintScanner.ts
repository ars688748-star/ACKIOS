import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface EslintScanResult {

    exists: boolean;

    flatConfig: boolean;

    legacyConfig: boolean;

    hasTypeScriptSupport: boolean;

    usesRecommended: boolean;

    hasNoUnusedVars: boolean;

    hasNoExplicitAny: boolean;

    hasImportPlugin: boolean;

}

export class EslintScanner
    implements Scanner<EslintScanResult> {

    public scan(
        root: string
    ): EslintScanResult {

        const flatConfig =
            existsSync(join(root, "eslint.config.js")) ||
            existsSync(join(root, "eslint.config.mjs"));

        const legacyConfig =
            existsSync(join(root, ".eslintrc")) ||
            existsSync(join(root, ".eslintrc.js")) ||
            existsSync(join(root, ".eslintrc.cjs")) ||
            existsSync(join(root, ".eslintrc.json"));

        let hasTypeScriptSupport = false;
        let usesRecommended = false;
        let hasNoUnusedVars = false;
        let hasNoExplicitAny = false;
        let hasImportPlugin = false;

        const configFile = join(root, "eslint.config.js");

        if (existsSync(configFile)) {

            const text = readFileSync(
                configFile,
                "utf8"
            );

            hasTypeScriptSupport =
                text.includes("typescript-eslint") ||
                text.includes("@typescript-eslint");

            usesRecommended =
                text.includes("recommended");

            hasNoUnusedVars =
                text.includes("no-unused-vars");

            hasNoExplicitAny =
                text.includes("no-explicit-any");

            hasImportPlugin =
                text.includes("eslint-plugin-import");

        }

        return {

            exists:
                flatConfig || legacyConfig,

            flatConfig,

            legacyConfig,

            hasTypeScriptSupport,

            usesRecommended,

            hasNoUnusedVars,

            hasNoExplicitAny,

            hasImportPlugin

        };

    }

}
