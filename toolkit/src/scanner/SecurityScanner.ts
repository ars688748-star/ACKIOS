import { Scanner } from "./contracts/Scanner.js";

export type SecurityScanResult = Record<string, never>;

export class SecurityScanner implements Scanner<SecurityScanResult> {

    public scan(_root: string): SecurityScanResult {

        return {};

    }

}
