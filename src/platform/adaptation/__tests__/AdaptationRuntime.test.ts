import { describe, expect, test } from "vitest";

import { AdaptationRuntime } from "../runtime/AdaptationRuntime.js";
import { StrategyBuilder } from "../StrategyBuilder.js";
import { MemoryStrategyStorage } from "../storage/MemoryStrategyStorage.js";
import { StrategyLifecycleService } from "../lifecycle/StrategyLifecycleService.js";
import { AdaptationService } from "../AdaptationService.js";
import { AdaptationEngine } from "../AdaptationEngine.js";
import { DecisionAggregator } from "../DecisionAggregator.js";
import { PlatformAdaptationRule } from "../rules/PlatformAdaptationRule.js";
import { HardwareAdaptationRule } from "../rules/HardwareAdaptationRule.js";
import { EnvironmentService } from "../../environment/EnvironmentService.js";
import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { AdaptationConfigurationManager } from "../configuration/AdaptationConfigurationManager.js";
import { AdaptationConfigurationState } from "../configuration/AdaptationConfigurationState.js";
import { AdaptationConfigurationStorage } from "../configuration/AdaptationConfigurationStorage.js";
describe(
    "AdaptationRuntime",
    () => {
        test(
            "returns adaptation strategy",
            async () => {
                const environmentService =
                    new EnvironmentService(
                        {
                            scan: async (): Promise<EnvironmentProfile> =>
                            ({
                                platform: {
                                    platform: "win32"
                                },
                                hardware: {
                                    memory: {
                                        totalBytes:
                                            16 * 1024 * 1024 * 1024
                                    }
                                },
                                tools: [],
                                capabilities: []
                            } as EnvironmentProfile)
                        }
                    );
                const engine =
                    new AdaptationEngine();
                engine.register(
                    new PlatformAdaptationRule()
                );
                engine.register(
                    new HardwareAdaptationRule()
                );
                const aggregator =
                    new DecisionAggregator();
                const service =
                    new AdaptationService(
                        environmentService,
                        engine,
                        aggregator
                    );

                const runtime =
                    new AdaptationRuntime(
                          service,
                          new StrategyBuilder(),
                          new MemoryStrategyStorage(),
                          new StrategyLifecycleService(),
                          new AdaptationConfigurationManager(),
                          new AdaptationConfigurationState(
                              new AdaptationConfigurationStorage(
                                  ".work/test-adaptation-config.json"
                              )
                          )
                      );
                const result =
                    await runtime.getStrategy();
                expect(result).not.toBeNull();
                expect(result?.mode)
                    .toContain("-");
                expect(result?.confidence)
                    .toBeGreaterThan(0);
            }
        );
    }
);

















