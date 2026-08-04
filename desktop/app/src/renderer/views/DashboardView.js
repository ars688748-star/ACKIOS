import { getDashboardState } from "../dashboard/DashboardApi.js";
import { QuickActions } from "../dashboard/components/QuickActions.js";
import { RecentProjectsCard } from "../dashboard/components/RecentProjectsCard.js";
import { DiagnosticsCard } from "../diagnostics/DiagnosticsCard.js";

export class DashboardView {

    async render(){

        const state =
            await getDashboardState();

        return `

<section class="dashboard">

<h1>ACKIOS Dashboard</h1>

<div class="dashboard-grid">

<div class="card">
<h2>Brain</h2>
<p>${state.brain.running ? "🟢 Running" : "⚪ Stopped"}</p>
</div>

<div class="card">
<h2>Runtime</h2>
<p>${state.runtime}</p>
</div>

<div class="card">
<h2>Workspace</h2>
<p>${state.workspace}</p>
</div>

<div class="card">
<h2>Knowledge</h2>
<p>${state.knowledge}</p>
</div>

<div class="card">
<h2>Memory</h2>
<p>${state.memory}</p>
</div>

<div class="card">
<h2>Galaxy</h2>
<p>${state.galaxy}</p>
</div>

${new QuickActions().render()}

${new RecentProjectsCard().render()}

${await new DiagnosticsCard().render()}

</div>

</section>

`;

    }

    async mount(){

        // Dashboard initialization.
        // Recent projects and diagnostics
        // will be moved here gradually.

    }

}



