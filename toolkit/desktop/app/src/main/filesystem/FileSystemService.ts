import { 
    readdir,
    readFile,
    writeFile,
    mkdir
} from "node:fs/promises";

import { join } from "node:path";

const ignored = new Set([

    ".git",
    "node_modules",
    "dist",
    "out",
    ".idea",
    ".vscode",
    "coverage"

]);

export class FileSystemService {

    async readDirectory(path:string){

        return await this.#walk(path);

    }


    async #walk(path:string): Promise<any[]> {

        const result:any[] = [];

        const entries = await readdir(path,{

            withFileTypes:true

        });

        for(const entry of entries){

            if(ignored.has(entry.name)){

                continue;

            }

            const full = join(path,entry.name);

            result.push({

                name:entry.name,
                path:full,
                directory:entry.isDirectory()

            });

            if(entry.isDirectory()){

                result.push(

                    ...(await this.#walk(full))

                );

            }

        }

        return result;

    }


    async readFile(path:string){

        return await readFile(

            path,

            "utf8"

        );

    }


    async writeFile(path:string, content:string){

        await writeFile(

            path,

            content ?? "",

            "utf8"

        );

        return true;

    }


    async createDirectory(path:string){

        await mkdir(

            path,

            {
                recursive:true
            }

        );

        return true;

    }

}
