import { WelcomeView } from "./views/WelcomeView.js";
import { WorkspaceView } from "./views/WorkspaceView.js";
import { BrainView } from "./views/BrainView.js";
import { KnowledgeView } from "./views/KnowledgeView.js";
import { MemoryView } from "./views/MemoryView.js";
import { GalaxyView } from "./views/GalaxyView.js";
import { SettingsView } from "./views/SettingsView.js";

export class ViewHost {

    constructor() {

        this.views = {

            welcome: new WelcomeView(),
            workspace: new WorkspaceView(),
            brain: new BrainView(),
            knowledge: new KnowledgeView(),
            memory: new MemoryView(),
            galaxy: new GalaxyView(),
            settings: new SettingsView()

        };

    }

    render(name) {

        return (this.views[name] ?? this.views.welcome).render();

    }

}
