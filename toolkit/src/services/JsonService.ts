import { readFileSync } from "node:fs";

export class JsonService {

    public read<T>(
        path: string
    ): T {

        const json =
            readFileSync(path, "utf8")
                .replace(/^\uFEFF/, "");

        return JSON.parse(json) as T;

    }

}
