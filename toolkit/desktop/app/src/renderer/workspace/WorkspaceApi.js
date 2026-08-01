export async function openWorkspace(){

    console.log("Renderer -> openWorkspace()");

    const path =
        await window.ackios.openWorkspace();

    console.log("Renderer PATH =",path);

    return path;

}

export async function listWorkspace(path){

    console.log("Renderer listWorkspace =",path);

    const files =
        await window.ackios.listWorkspace(path);

    console.log("Renderer FILES =",files);

    return files;

}

export async function readFile(path){

    console.log("Renderer readFile =",path);

    return await window.ackios.readFile(path);

}
