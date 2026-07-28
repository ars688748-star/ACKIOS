import { IRuntimeLifecycle } from "./IRuntimeLifecycle.js";

export class RuntimeLifecycleCoordinator {

    private readonly components: IRuntimeLifecycle[] = [];

    public register(
        component: IRuntimeLifecycle
    ): void {

        this.components.push(component);

    }

    public async initialize(): Promise<void> {

        for (const component of this.components) {
            await component.initialize();
        }

    }

    public async start(): Promise<void> {

        for (const component of this.components) {
            await component.start();
        }

    }

    public async stop(): Promise<void> {

        for (const component of [...this.components].reverse()) {
            await component.stop();
        }

    }

}
