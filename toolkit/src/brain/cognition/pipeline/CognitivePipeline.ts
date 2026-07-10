export class CognitivePipeline {

    private readonly modules: any[] = [];

    register(module: any): void {

        this.modules.push(module);

    }

    add(module: any): void {

        this.register(module);

    }

    async execute(context: unknown): Promise<void> {

        for (const module of this.modules) {

            if (typeof module.process === "function") {

                await module.process(context);

            }
            else if (typeof module.execute === "function") {

                await module.execute(context);

            }

        }

    }

}
