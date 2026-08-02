import { ipcMain } from "electron";

import { ProjectDialog } from "../../dialog/ProjectDialog.js";
import { FileSystemService } from "../../filesystem/FileSystemService.js";
import { ProjectTemplateService } from "../../workspace/ProjectTemplateService.js";
import { RecentProjectsStore } from "../../storage/RecentProjectsStore.js";


const dialogService =
    new ProjectDialog();


const filesystem =
    new FileSystemService();


const templateService =
    new ProjectTemplateService();


const recentProjects =
    new RecentProjectsStore();



export class WorkspaceIPC {

    register(){


        ipcMain.handle(

            "workspace:open",

            async()=>{

                const path =
                    await dialogService.open();


                if(path){

                    await recentProjects.add(
                        path
                    );

                }


                return path;

            }

        );



        ipcMain.handle(

            "workspace:create",

            async()=>{


                const path =
                    await dialogService.create();



                if(!path){

                    return null;

                }



                await filesystem.createDirectory(

                    path

                );



                await templateService.create(

                    path

                );



                await recentProjects.add(

                    path

                );



                return path;


            }

        );



        ipcMain.handle(

            "workspace:recent",

            async()=>{

                return await recentProjects.load();

            }

        );


        ipcMain.handle(

            "workspace:list",

            async(_event,path:string)=>{

                return await filesystem.readDirectory(path);

            }

        );



        ipcMain.handle(

            "workspace:read",

            async(_event,path:string)=>{

                console.log("MAIN READ =",path);

                return await filesystem.readFile(path);

            }

        );



        ipcMain.handle(

            "workspace:write",

            async(_event,path:string,content:string)=>{

                console.log("MAIN WRITE =",path);

                return await filesystem.writeFile(
                    path,
                    content
                );

            }

        );


    }

}


