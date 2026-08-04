import {
    readFile,
    writeFile
} from "./FileApi.js";

export async function openFile(path){

    return await readFile(path);

}

export async function saveFile(path,content){

    return await writeFile(
        path,
        content
    );

}
