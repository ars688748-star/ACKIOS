import { Scanner } from "./contracts/Scanner.js";

export interface {{ScanResult}} {

    exists: boolean;

}

export class {{ScannerName}}
    implements Scanner<{{ScanResult}}> {

    public scan(
        _root: string
    ): {{ScanResult}} {

        return {

            exists: false

        };

    }

}
