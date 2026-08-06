import { promises as fs } from "node:fs";
import path from "node:path";

export class PublicationScanner {

    private readonly excluded = new Set([
        "node_modules",
        ".git",
        "dist",
        ".work",
        "_archive"
    ]);

    public async execute(): Promise<string[]> {

        const root = process.cwd();

        const files = await this.scan(root);

        console.log(`[Guardian] Files: ${files.length}`);

        return files;

    }

    private async scan(directory: string): Promise<string[]> {

        const result: string[] = [];

        const entries = await fs.readdir(directory,{withFileTypes:true});

        for(const entry of entries){

            const full = path.join(directory,entry.name);

            if(entry.isDirectory()){

                if(this.excluded.has(entry.name)){
                    continue;
                }

                result.push(...await this.scan(full));

                continue;

            }

            result.push(full);

        }

        return result;

    }

}
