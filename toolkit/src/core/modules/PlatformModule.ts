import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { PlatformService } from "../../platform/PlatformService.js";

import { ToolDiscoveryService } from "../../platform/tools/ToolDiscoveryService.js";
import { GitToolProvider } from "../../platform/tools/providers/GitToolProvider.js";
import { NodeToolProvider } from "../../platform/tools/providers/NodeToolProvider.js";

import { NodePlatformDetector } from "../../platform/detection/NodePlatformDetector.js";
import { EnvironmentScanner } from "../../platform/environment/EnvironmentScanner.js";
import { EnvironmentService } from "../../platform/environment/EnvironmentService.js";

import { NodeHardwareDetector } from "../../platform/hardware/detection/NodeHardwareDetector.js";
import { HardwareCapabilityProvider } from "../../platform/capabilities/providers/HardwareCapabilityProvider.js";

import { CapabilityDiscoveryService } from "../../platform/capabilities/CapabilityDiscoveryService.js";
import { PlatformCapabilityProvider } from "../../platform/capabilities/providers/PlatformCapabilityProvider.js";
import { RuntimeCapabilityProvider } from "../../platform/capabilities/providers/RuntimeCapabilityProvider.js";
import { ToolCapabilityProvider } from "../../platform/capabilities/providers/ToolCapabilityProvider.js";
import { AdaptationEngine } from "../../platform/adaptation/AdaptationEngine.js";
import { DecisionAggregator } from "../../platform/adaptation/DecisionAggregator.js";
import { AdaptationService } from "../../platform/adaptation/AdaptationService.js";
import { PlatformAdaptationRule } from "../../platform/adaptation/rules/PlatformAdaptationRule.js";
import { HardwareAdaptationRule } from "../../platform/adaptation/rules/HardwareAdaptationRule.js";
import { AdaptationRuntime } from "../../platform/adaptation/runtime/AdaptationRuntime.js";
import { StrategyBuilder } from "../../platform/adaptation/StrategyBuilder.js";
import { FileStrategyStorage } from "../../platform/adaptation/storage/FileStrategyStorage.js";
import { StrategyLifecycleService } from "../../platform/adaptation/lifecycle/StrategyLifecycleService.js";
import { AdaptationConfigurationManager } from "../../platform/adaptation/configuration/AdaptationConfigurationManager.js";
import { AdaptationConfigurationState } from "../../platform/adaptation/configuration/AdaptationConfigurationState.js";


export class PlatformModule implements IServiceModule {

    public register(container: ServiceContainer): void {


        container.register(
            "platform",
            new PlatformService()
        );


        const discovery = new ToolDiscoveryService();

        discovery.register(new GitToolProvider());
        discovery.register(new NodeToolProvider());


        container.register(
            "toolDiscovery",
            discovery
        );


        const capabilityDiscovery =
            new CapabilityDiscoveryService();


        container.register(
            "capabilityDiscovery",
            capabilityDiscovery
        );


        const detector =
            new NodePlatformDetector();


        container.register(
            "platformDetector",
            detector
        );


        const hardwareDetector =
            new NodeHardwareDetector();


        container.register(
            "hardwareDetector",
            hardwareDetector
        );


        capabilityDiscovery.register(
            new PlatformCapabilityProvider()
        );


        capabilityDiscovery.register(
            new RuntimeCapabilityProvider()
        );


        capabilityDiscovery.register(
            new ToolCapabilityProvider(discovery)
        );


        capabilityDiscovery.register(
            new HardwareCapabilityProvider(hardwareDetector)
        );


        const environmentScanner =
            new EnvironmentScanner(
                detector,
                hardwareDetector,
                discovery,
                capabilityDiscovery
            );


        container.register(
            "environmentScanner",
            environmentScanner
        );


        container.register(
            "environmentService",
            new EnvironmentService(
                environmentScanner
            )
        );


        const adaptationEngine =
            new AdaptationEngine();


        adaptationEngine.register(
            new PlatformAdaptationRule()
        );


        container.register(
            "adaptationEngine",
            adaptationEngine
        );


        adaptationEngine.register(
            new HardwareAdaptationRule()
        );


        const decisionAggregator =
            new DecisionAggregator();


        container.register(
            "decisionAggregator",
            decisionAggregator
        );


        const adaptationService =
            new AdaptationService(
                container.resolve("environmentService"),
                adaptationEngine,
                decisionAggregator
            );


        container.register(
            "adaptationService",
            adaptationService
        );


        const strategyStorage =
            new FileStrategyStorage(
                ".work/strategy/strategy.json"
            );


        const lifecycleService =
            new StrategyLifecycleService();


        container.register(
            "adaptationConfigurationManager",
            new AdaptationConfigurationManager()
        );


        container.register(
            "adaptationConfigurationState",
            new AdaptationConfigurationState()
        );


        const adaptationRuntime =
            new AdaptationRuntime(
                adaptationService,
                new StrategyBuilder(),
                strategyStorage,
                lifecycleService,
                container.resolve("adaptationConfigurationManager"),
                container.resolve("adaptationConfigurationState")
            );




container.register(
            "adaptationRuntime",
            adaptationRuntime
        );


    }

}




















































