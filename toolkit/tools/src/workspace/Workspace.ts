export interface WorkspaceProject {

    name: string;

    version: string;

    root: string;

}

export interface WorkspaceState {

    project: WorkspaceProject;

    createdAt: string;

    updatedAt: string;

}

export class Workspace {

    private state: WorkspaceState;

    constructor() {

        const now = new Date().toISOString();

        this.state = {

            project: {

                name: "",

                version: "",

                root: ""

            },

            createdAt: now,

            updatedAt: now

        };

    }

    public getState(): WorkspaceState {

        return this.state;

    }

    public updateProject(project: WorkspaceProject): void {

        this.state.project = project;

        this.state.updatedAt = new Date().toISOString();

    }

}