import { describe, it, expect } from "vitest";

import { SetupExecutor } from "../SetupExecutor.js";
import { InstallerEngine } from "../../../installer/InstallerEngine.js";


describe("SetupExecutor", () => {


    it("executes installation from setup plan", async () => {


        const validator = {

            validate: async () => true

        };


        const installer =
            new InstallerEngine(validator as any);


        const executor =
            new SetupExecutor(installer);


        const result =
            await executor.execute({

                operatingSystem: "windows",

                strategy: "FULL_INSTALL",

                components: [
                    "workspace",
                    "brain"
                ],

                warnings: []

            });


        expect(result.success)
            .toBe(true);


        expect(result.installation.context.status)
            .toBe("completed");


    });


});
