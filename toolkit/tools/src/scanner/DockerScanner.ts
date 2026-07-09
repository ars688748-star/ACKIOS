import { Scanner } from "./contracts/Scanner.js";

export type DockerScanResult = Record<string, never>;

export class DockerScanner implements Scanner<DockerScanResult> {

    public scan(_root: string): DockerScanResult {

        return {

        };

    }

}

