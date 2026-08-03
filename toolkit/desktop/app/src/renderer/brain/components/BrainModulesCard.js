import { getBrainRuntime } from "../BrainRuntimeApi.js";

export class BrainModulesCard{

    async render(){

        const runtime =
            await getBrainRuntime();

        return `

<div class="card">

<h2>

Modules

</h2>

<ul>

${runtime.modules.map(module=>`

<li>

${module}

</li>

`).join("")}

</ul>

</div>

`;

    }

}
