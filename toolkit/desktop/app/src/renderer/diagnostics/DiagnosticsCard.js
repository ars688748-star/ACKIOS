import { getDiagnostics } from "./DiagnosticsApi.js";

export class DiagnosticsCard{

    async render(){

        const info =
            await getDiagnostics();

        return `

<div class="card">

<h2>

Diagnostics

</h2>

<p>

Build:
<strong>${info.build}</strong>

</p>

<p>

Tests:
<strong>${info.tests}</strong>

</p>

<p>

Runtime:
<strong>${info.runtime}</strong>

</p>

<p>

Version:
<strong>${info.version}</strong>

</p>

</div>

`;

    }

}

