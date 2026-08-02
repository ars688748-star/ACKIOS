import { app } from "electron";
import { join, basename } from "node:path";
import { readFile, writeFile } from "node:fs/promises";

interface RecentProject {

    name:string;

    path:string;

    openedAt:string;

}


interface RecentProjectsData {

    projects:RecentProject[];

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


            return JSON.parse(content);

        }
        catch{

            return {

                projects:[]

            };

        }

    }



    async add(path:string){

        const data =
            await this.load();


        data.projects =
            data.projects.filter(
                item=>item.path !== path
            );


        data.projects.unshift({

            name:
                basename(path),

            path,

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
