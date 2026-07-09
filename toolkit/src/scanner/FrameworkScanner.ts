import fs from "node:fs";
import path from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface FrameworkScanResult {
    typescript: boolean;
    react: boolean;
    electron: boolean;
    vite: boolean;
    vue: boolean;
    next: boolean;
    nest: boolean;
    express: boolean;
}

export class FrameworkScanner implements Scanner<FrameworkScanResult> {

    public scan(root: string): FrameworkScanResult {

        const packageFile = path.join(root, "package.json");

        if (!fs.existsSync(packageFile)) {
            throw new Error("package.json not found.");
        }

        const pkg = JSON.parse(fs.readFileSync(packageFile, "utf8"));

        const dependencies = {
            ...(pkg.dependencies ?? {}),
            ...(pkg.devDependencies ?? {})
        };

        const has = (name: string): boolean =>
            Object.prototype.hasOwnProperty.call(dependencies, name);

        return {
            typescript: has("typescript"),
            react: has("react"),
            electron: has("electron"),
            vite: has("vite"),
            vue: has("vue"),
            next: has("next"),
            nest: has("@nestjs/core"),
            express: has("express")
        };

    }

}
