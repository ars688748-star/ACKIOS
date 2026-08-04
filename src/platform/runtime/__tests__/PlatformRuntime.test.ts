import { describe, it, expect } from "vitest";

import { PlatformRuntime } from "../PlatformRuntime.js";


describe("PlatformRuntime", () => {


    it("starts runtime when installation exists", async () => {


        const bootstrapRuntime = {

            start: async () => true

        };


        const runtime =
            new PlatformRuntime(
                bootstrapRuntime as any
            );


        const context = {

            workspacePath: "./workspace",

            username: "developer",

            installed: true,

            ready: false

        };


        const result =
            await runtime.start(context);


        expect(result)
            .toBe(true);


        expect(context.ready)
            .toBe(true);


    });



    it("fails when platform is not installed", async () => {


        const bootstrapRuntime = {

            start: async () => true

        };


        const runtime =
            new PlatformRuntime(
                bootstrapRuntime as any
            );


        const result =
            await runtime.start({

                workspacePath: "./workspace",

                installed: false,

                ready: false

            });


        expect(result)
            .toBe(false);


    });


});
