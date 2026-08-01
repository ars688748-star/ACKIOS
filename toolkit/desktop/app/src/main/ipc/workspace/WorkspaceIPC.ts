import { ipcMain } from "electron";

import { ProjectDialog } from "../../dialog/ProjectDialog.js";
import { FileSystemService } from "../../filesystem/FileSystemService.js";

const dialogService =
    new ProjectDialog();

const filesystem =
    new FileSystemService();

export class WorkspaceIPC {

    register(){

        ipcMain.handle(

            "workspace:open",

            async()=>{

                return await dialogService.open();

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
