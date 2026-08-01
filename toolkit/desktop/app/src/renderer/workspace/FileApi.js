export async function readFile(path){

    return await window.ackios.readFile(path);

}

export async function writeFile(path,content){

    return await window.ackios.writeFile(
        path,
        content
    );

}
