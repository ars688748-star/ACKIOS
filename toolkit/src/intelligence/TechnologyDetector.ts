export interface TechnologyInfo {

    name: string;

    category: string;

    detected: boolean;

}


export class TechnologyDetector {


    detect(
        packageJson: Record<string, unknown>,
        files: string[]
    ): TechnologyInfo[] {


        const technologies: TechnologyInfo[] = [];


        const dependencies = {
            ...((packageJson.dependencies as Record<string, unknown>) ?? {}),
            ...((packageJson.devDependencies as Record<string, unknown>) ?? {})
        };


        technologies.push({

            name: "TypeScript",

            category: "language",

            detected:
                !!dependencies.typescript ||
                files.some(
                    file =>
                        file.endsWith(".ts")
                )

        });


        technologies.push({

            name: "React",

            category: "frontend",

            detected:
                !!dependencies.react

        });


        technologies.push({

            name: "Vue",

            category: "frontend",

            detected:
                !!dependencies.vue

        });


        technologies.push({

            name: "Angular",

            category: "frontend",

            detected:
                !!dependencies["@angular/core"]

        });


        technologies.push({

            name: "Node.js",

            category: "runtime",

            detected:
                !!packageJson

        });


        technologies.push({

            name: "Electron",

            category: "desktop",

            detected:
                !!dependencies.electron

        });


        return technologies.filter(
            technology =>
                technology.detected
        );

    }

}


