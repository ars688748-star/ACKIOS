import { IRuntimeLifecycle } from "./IRuntimeLifecycle.js";

export class RuntimeLifecycleCoordinator {

    private readonly components: IRuntimeLifecycle[] = [];

    public register(
        component: IRuntimeLifecycle
    ): void {

        if (this.components.includes(component))
            return;

        this.components.push(component);

    }

    public unregister(
        component: IRuntimeLifecycle
    ): boolean {

        const index = this.components.indexOf(component);

        if (index < 0)
            return false;

        this.components.splice(index, 1);

        return true;

    }

    public getComponents(): readonly IRuntimeLifecycle[] {

        return this.components;

    }

    public async initialize(): Promise<void> {

        for (const component of this.components)
            await component.initialize();

    }

    public async start(): Promise<void> {

        for (const component of this.components)
            await component.start();

    }

    public async stop(): Promise<void> {

        for (const component of [...this.components].reverse())
            await component.stop();

    }

}
