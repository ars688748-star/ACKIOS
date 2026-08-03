import { getBrainState } from "../BrainApi.js";

export class BrainRuntimeCard{

    async render(){

        const state =
            await getBrainState();

        return `

<div class="card">

<h2>Runtime</h2>

<p>

Status:
<strong>

${state.running ? "🟢 Running" : "⚪ Stopped"}

</strong>

</p>

<p>

Initialized:
<strong>

${state.initialized ? "Yes" : "No"}

</strong>

</p>

</div>

`;

    }

}
