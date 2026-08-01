import { ipcMain } from "electron";

import { ProjectDialog } from "../../dialog/ProjectDialog.js";
import { FileSystemService } from "../../filesystem/FileSystemService.js";
import { ProjectTemplateService } from "../../workspace/ProjectTemplateService.js";


const dialogService =
    new ProjectDialog();


const filesystem =
    new FileSystemService();


const templateService =
    new ProjectTemplateService();



export class WorkspaceIPC {

    register(){


        ipcMain.handle(

            "workspace:open",

            async()=>{

                return await dialogService.open();

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



                return path;


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
