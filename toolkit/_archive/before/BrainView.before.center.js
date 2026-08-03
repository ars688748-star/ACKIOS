import { getBrainState } from "../brain/BrainApi.js";

export class BrainView {

    async render() {

        const state =
            await getBrainState();

        return `

<section class="workspace">

<h1>Brain</h1>

<div class="card">

<h2>Brain Runtime</h2>

<p>Status:
<strong>${state.running ? "🟢 Running" : "⚪ Stopped"}</strong>
</p>

<p>Initialized:
<strong>${state.initialized ? "Yes" : "No"}</strong>
</p>

</div>

</section>

`;

    }

}
