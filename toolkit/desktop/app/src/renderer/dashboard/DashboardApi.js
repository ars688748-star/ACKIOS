import { getBrainState } from "../brain/BrainApi.js";

export async function getDashboardState(){

    const brain =
        await getBrainState();

    return {

        runtime: "Running",

        workspace: "Ready",

        knowledge: "Ready",

        memory: "Ready",

        galaxy: "Ready",

        brain

    };

}
