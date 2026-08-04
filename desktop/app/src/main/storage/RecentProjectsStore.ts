import { app } from "electron";
import { join, basename } from "node:path";
import { readFile, writeFile } from "node:fs/promises";

interface RecentProject {

    name:string;

    type:string;

    path:string;

    openedAt:string;

    fileCount:number;

}


interface RecentProjectsData {

    projects:RecentProject[];

}


export interface WorkspaceProjectInfo {

    name:string;

    type:string;

    path:string;

    fileCount:number;

}



export class RecentProjectsStore {


    private file(){

        return join(
            app.getPath("userData"),
            "recent-projects.json"
        );

    }


    async load():Promise<RecentProjectsData>{

        try{

            const content =
                await readFile(
                    this.file(),
                    "utf8"
                );


            const data =
                JSON.parse(content);


            data.projects =
                data.projects.map(project => ({

                    name:
                        project.name ??
                        basename(project.path),

                    path:
                        project.path,

                    type:
                        project.type ?? "unknown",

                    fileCount:
                        project.fileCount ?? 0,

                    openedAt:
                        project.openedAt

                }));


            await writeFile(

                this.file(),

                JSON.stringify(
                    data,
                    null,
                    2
                ),

                "utf8"

            );


            return data;

        }
        catch{

            return {

                projects:[]

            };

        }

    }



    async add(
        info:WorkspaceProjectInfo
    ){

        const data =
            await this.load();


        data.projects =
            data.projects.filter(
                item=>item.path !== info.path
            );


        data.projects.unshift({

            name:
                info.name,

            type:
                info.type,

            path:
                info.path,

            fileCount:
                info.fileCount,

            openedAt:
                new Date().toISOString()

        });


        data.projects =
            data.projects.slice(
                0,
                10
            );


        await writeFile(

            this.file(),

            JSON.stringify(
                data,
                null,
                2
            ),

            "utf8"

        );


        return data;

    }


}





