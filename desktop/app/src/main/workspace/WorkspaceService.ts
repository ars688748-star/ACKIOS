import { readdir, access } from "node:fs/promises";
import { join, basename } from "node:path";


export interface WorkspaceInfo {

    name:string;

    type:string;

    path:string;

    fileCount:number;

}



export class WorkspaceService {


    public async initialize(): Promise<void> {

    }



    public async loadWorkspace(): Promise<void> {

    }



    public async getWorkspaceInfo(
        path:string
    ):Promise<WorkspaceInfo>{


        const files =
            await this.countFiles(path);


        const type =
            await this.detectType(path);


        return {

            name:
                basename(path),

            type,

            path,

            fileCount:
                files

        };

    }




    private async detectType(
        path:string
    ):Promise<string>{


        try{

            await access(
                join(
                    path,
                    "tsconfig.json"
                )
            );

            return "typescript";

        }
        catch{}


        try{

            await access(
                join(
                    path,
                    "package.json"
                )
            );

            return "node";

        }
        catch{}


        return "unknown";

    }

    private async countFiles(
        path:string
    ):Promise<number>{


        let count = 0;


        const entries =
            await readdir(
                path,
                {
                    withFileTypes:true
                }
            );


        for(const entry of entries){


            const full =
                join(
                    path,
                    entry.name
                );


            if(entry.isDirectory()){

                count +=
                    await this.countFiles(
                        full
                    );

            }
            else{

                count++;

            }

        }


        return count;

    }


}






