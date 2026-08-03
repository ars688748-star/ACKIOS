import { MonacoHost } from "./MonacoHost.js";
import { EditorHost } from "./EditorHost.js";
import { EditorSession } from "./EditorSession.js";
import { saveFile } from "./EditorApi.js";
import { FileTypeResolver } from "./FileTypeResolver.js";

export class WorkspaceController{

    static initialized = false;

    static async initialize(){

        if(this.initialized){

            return;

        }

        await MonacoHost.initialize();

        this.initialized = true;

    }

    static async open(path,text){

        console.log("WorkspaceController.open",path);

        console.log("OPEN TEXT:", typeof text, text?.length);

        const type =
            FileTypeResolver.resolve(path);

        if(type !== "text"){

            console.log(
                "Non text file:",
                type,
                path
            );

            return;

        }

        await this.initialize();

        EditorSession.open(path);

        EditorSession.setActive(path);

        EditorSession.setContent(path,text);

        EditorHost.setFile(path);

        EditorHost.setContent(text);

        this.refreshEditor();

    }
    static refreshEditor(){

        MonacoHost.setValue(
            EditorHost.getContent()
        );

        const title =
            document.querySelector(".editor-file");


        const currentFile =
            document.querySelector(".workspace-current-file");

        if(currentFile){

            currentFile.textContent =
                EditorHost.getFile();

        }

        if(title){

            title.textContent =
                EditorHost.getFile();

        }

    }

    static async save(){

        const path =
            EditorHost.getPath();

        if(!path){

            return;

        }

        await saveFile(
            path,
            EditorHost.getContent()
        );

        EditorHost.setDirty(false);

    }

    static clear(){

        EditorHost.setFile("");

        EditorHost.setContent("");

        MonacoHost.clear();

        const title =
            document.querySelector(".editor-file");


        const currentFile =
            document.querySelector(".workspace-current-file");

        if(currentFile){

            currentFile.textContent =
                EditorHost.getFile();

        }

        if(title){

            title.textContent =
                "No file selected";

        }

    }

}

















