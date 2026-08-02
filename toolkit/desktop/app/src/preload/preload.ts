import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(

    "ackios",

    {

        ping(){

            return ipcRenderer.invoke(
                "runtime:ping"
            );

        },


        openWorkspace(){

            return ipcRenderer.invoke(
                "workspace:open"
            );

        },


        createWorkspace(){

            return ipcRenderer.invoke(
                "workspace:create"
            );

        },


        getRecentProjects(){

            return ipcRenderer.invoke(
                "workspace:recent"
            );

        },


        listWorkspace(path:string){

            return ipcRenderer.invoke(
                "workspace:list",
                path
            );

        },


        readFile(path:string){

            console.log("PRELOAD READ =",path);

            return ipcRenderer.invoke(
                "workspace:read",
                path
            );

        },


        writeFile(path:string,content:string){

            console.log("PRELOAD WRITE =",path);

            return ipcRenderer.invoke(
                "workspace:write",
                path,
                content
            );

        }

    }

);

