import { describe, expect, it } from "vitest";

import path from "node:path";

import { DefaultWorkspaceLoader } from "../loader/DefaultWorkspaceLoader.js";
import { DefaultWorkspaceManager } from "../manager/DefaultWorkspaceManager.js";

describe("DefaultWorkspaceManager", () => {

    it("opens current toolkit workspace", async () => {

        const manager = new DefaultWorkspaceManager(
            new DefaultWorkspaceLoader()
        );

        const workspace =
            await manager.open({

                root: path.resolve(process.cwd())

            });

        expect(manager.isOpen()).toBe(true);

        expect(
            workspace.getState().project.root.length
        ).toBeGreaterThan(0);

        expect(
            workspace.getState().project.name.length
        ).toBeGreaterThan(0);

    });

    it("closes workspace", async () => {

        const manager = new DefaultWorkspaceManager(
            new DefaultWorkspaceLoader()
        );

        await manager.close();

        expect(
            manager.isOpen()
        ).toBe(false);

    });

});
