import { DashboardRegistry } from "./DashboardRegistry.js";

import { PluginDashboardWidget } from "../widgets/plugins/PluginDashboardWidget.js";

import { PluginWidgetService } from "../widgets/plugins/PluginWidgetService.js";
import { ArchitectureDashboardWidget } from "../widgets/architecture/ArchitectureDashboardWidget.js";
import { ArchitectureWidgetService } from "../widgets/architecture/ArchitectureWidgetService.js";
import { HealthDashboardWidget } from "../widgets/health/HealthDashboardWidget.js";
import { HealthWidgetService } from "../widgets/health/HealthWidgetService.js";
import { BrainDashboardWidget } from "../widgets/brain/BrainDashboardWidget.js";
import { BrainWidgetService } from "../widgets/brain/BrainWidgetService.js";
import { CognitionDashboardWidget } from "../widgets/cognition/CognitionDashboardWidget.js";
import { CognitionWidgetService } from "../widgets/cognition/CognitionWidgetService.js";
import { IntelligenceDashboardWidget } from "../widgets/intelligence/IntelligenceDashboardWidget.js";
import { IntelligenceWidgetService } from "../widgets/intelligence/IntelligenceWidgetService.js";

import type { PluginExplorerProvider } from "../../plugins/explorer/provider/PluginExplorerProvider.js";
import type { ArchitectureGraphProvider } from "../../architecture/ArchitectureGraphProvider.js";
import type { HealthEngine } from "../../health/HealthEngine.js";
import type { BrainSystem } from "../../brain/integration/BrainSystem.js";
import type { CognitiveRuntime } from "../../brain/cognition/runtime/CognitiveRuntime.js";
import type { ProjectIntelligenceEngine } from "../../intelligence/ProjectIntelligenceEngine.js";



export class DashboardBuilder {



    public build(

        pluginProvider:

            PluginExplorerProvider,


        architectureProvider:

            ArchitectureGraphProvider,


        healthEngine:

            HealthEngine,


        brainSystem:

            BrainSystem,


        cognitiveRuntime:

            CognitiveRuntime,


        projectIntelligence:

            ProjectIntelligenceEngine

    ):

        DashboardRegistry {


        const registry =

            new DashboardRegistry();



        const pluginService =

            new PluginWidgetService(

                pluginProvider

            );



        registry.register(

            new PluginDashboardWidget(

                pluginService

            )

        );



        const architectureService =

            new ArchitectureWidgetService(

                architectureProvider

            );



        registry.register(

            new ArchitectureDashboardWidget(

                architectureService

            )

        );




        const healthService =

            new HealthWidgetService(

                healthEngine

            );


        registry.register(

            new HealthDashboardWidget(

                healthService

            )

        );



        const brainService =

            new BrainWidgetService(

                brainSystem

            );


        registry.register(

            new BrainDashboardWidget(

                brainService

            )

        );



        const cognitionService =

            new CognitionWidgetService(

                cognitiveRuntime

            );


        registry.register(

            new CognitionDashboardWidget(

                cognitionService

            )

        );



        const intelligenceService =

            new IntelligenceWidgetService(

                projectIntelligence

            );


        registry.register(

            new IntelligenceDashboardWidget(

                intelligenceService

            )

        );


        return registry;


    }


}
















