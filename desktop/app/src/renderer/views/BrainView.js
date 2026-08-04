import { BrainRuntimeCard } from "../brain/components/BrainRuntimeCard.js";
import { BrainDiagnosticsCard } from "../brain/components/BrainDiagnosticsCard.js";
import { BrainModulesCard } from "../brain/components/BrainModulesCard.js";
import { BrainEventsCard } from "../brain/components/BrainEventsCard.js";
import { BrainTasksCard } from "../brain/components/BrainTasksCard.js";
import { BrainHealthCard } from "../brain/components/BrainHealthCard.js";

export class BrainView {

    async render(){

        return `

<section class="dashboard">

<h1>Brain Center</h1>

<div class="dashboard-grid">

${await new BrainRuntimeCard().render()}

${await new BrainDiagnosticsCard().render()}

${await new BrainModulesCard().render()}

${await new BrainEventsCard().render()}

${await new BrainTasksCard().render()}

${await new BrainHealthCard().render()}

</div>

</section>

`;

    }

    async mount(){

        // Brain Center initialization.

    }

}
