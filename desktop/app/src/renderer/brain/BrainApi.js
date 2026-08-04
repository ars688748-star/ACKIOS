export async function getBrainState(){

    console.log("Renderer -> getBrainState()");

    return await window.ackios.brain.getState();

}
