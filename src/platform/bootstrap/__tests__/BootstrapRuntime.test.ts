import { describe, it, expect } from "vitest";

import { BootstrapRuntime } from "../services/BootstrapRuntime.js";


describe("BootstrapRuntime", () => {


    it("starts first run when installation is completed", async () => {


        const firstRunCoordinator = {

            run: async () => true

        };


        const runtime =
            new BootstrapRuntime(
                firstRunCoordinator as any
            );


        const context = {

            workspacePath: "./workspace",

            username: "user",

            installed: true,

            initialized: false

        };


        const result =
            await runtime.start(context);


        expect(result)
            .toBe(true);


        expect(context.initialized)
            .toBe(true);


    });


    it("fails when installation is missing", async () => {


        const firstRunCoordinator = {

            run: async () => true

        };


        const runtime =
            new BootstrapRuntime(
                firstRunCoordinator as any
            );


        const result =
            await runtime.start({

                workspacePath: "./workspace",

                installed: false,

                initialized: false

            });


        expect(result)
            .toBe(false);


    });


});
