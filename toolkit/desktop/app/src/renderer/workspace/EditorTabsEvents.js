import { WorkspaceController } from "./WorkspaceController.js";
import { EditorSession } from "./EditorSession.js";

export function wireEditorTabs(){

    document.onclick = async(event)=>{

        const close =
            event.target.closest("[data-close]");

        if(close){

            event.stopPropagation();

            const path =
                close.dataset.close;

            EditorSession.close(path);

            document.dispatchEvent(
                new Event("workspace-refresh")
            );

            return;

        }


        const tab =
            event.target.closest("[data-path]");


        if(!tab){

            return;

        }


        const path =
            tab.dataset.path;


        const content =
            EditorSession.getContent(path);


        EditorSession.setActive(path);


        await WorkspaceController.open(
            path,
            content
        );

    };

}
