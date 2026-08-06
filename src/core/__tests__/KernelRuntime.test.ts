import { describe, expect, test } from "vitest";
import { KernelRuntime } from "../runtime/KernelRuntime.js";
import { PlatformModule } from "../modules/PlatformModule.js";


describe(
    "KernelRuntime",
    () => {

        test(
            "starts kernel with modules",
            async () => {

                const kernel =
                    new KernelRuntime();


                kernel.registerModule(
                    new PlatformModule()
                );


                const context =
                    await kernel.start();


                expect(
                    context.modules.length
                ).toBeGreaterThan(0);


                expect(
                    context.services
                ).toBeDefined();

            }
        );

    }
);


