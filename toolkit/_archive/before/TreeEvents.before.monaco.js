import { readFile } from "./FileApi.js";
import { EditorService } from "../editor/EditorService.js";

export async function wireProjectTree(){

    document
    .querySelectorAll("[data-file]")
    .forEach(item=>{

        item.onclick=async()=>{

            const path=item.dataset.file;

            const text=
                await readFile(path);

            EditorService.open(path,text);

            location.reload();

        };

    });

}
