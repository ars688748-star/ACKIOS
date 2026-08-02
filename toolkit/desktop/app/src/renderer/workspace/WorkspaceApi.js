export async function openWorkspace(){

    console.log("Renderer -> openWorkspace()");

    const path =
        await window.ackios.openWorkspace();

    console.log("Renderer PATH =",path);

    return path;

}


export async function createWorkspace(){

    console.log("Renderer -> createWorkspace()");

    const path =
        await window.ackios.createWorkspace();

    console.log("Renderer CREATE PATH =",path);

    return path;

}


export async function listWorkspace(path){

    console.log("Renderer listWorkspace =",path);

    const files =
        await window.ackios.listWorkspace(path);

    console.log("Renderer FILES =",files);

    return files;

}


export async function getRecentProjects(){

    console.log("Renderer getRecentProjects");

    return await window.ackios.getRecentProjects();

}


export async function readFile(path){

    console.log("Renderer readFile =",path);

    return await window.ackios.readFile(path);

}

