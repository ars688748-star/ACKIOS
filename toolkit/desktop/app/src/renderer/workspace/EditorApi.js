import { readFile } from "./WorkspaceApi.js";

export async function openFile(path){

    return await readFile(path);

}

