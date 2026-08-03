import { readFile } from "./FileApi.js";
import { WorkspaceController } from "./WorkspaceController.js";

export async function wireProjectTree(){

    document
    .querySelectorAll("[data-file]")
    .forEach(item=>{

        item.onclick=async()=>{

            const path =
                item.dataset.file;

            const text =
                await readFile(path);

            await WorkspaceController.open(
                path,
                text
            );

        };

    });

}
