import { promises as fs } from "node:fs";
import path from "node:path";

export class SourceScanner {

    public async scan(
        root:string
    ):Promise<string[]>{

        const result:string[]=[];

        await this.walk(root,result);

        return result;

    }

    private async walk(
        dir:string,
        result:string[]
    ):Promise<void>{

        const entries=
            await fs.readdir(
                dir,
                {
                    withFileTypes:true
                }
            );

        for(const entry of entries){

            const full=
                path.join(
                    dir,
                    entry.name
                );

            if(entry.isDirectory()){

                await this.walk(
                    full,
                    result
                );

                continue;

            }

            if(full.endsWith(".ts")){

                result.push(full);

            }

        }

    }

}
