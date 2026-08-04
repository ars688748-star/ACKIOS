import { ProjectTree } from "../workspace/ProjectTree.js";
import { EditorHost } from "../workspace/EditorHost.js";
import { EditorTabs } from "../workspace/EditorTabs.js";

export class WorkspaceView{

    static project = "No project opened";

    static setProject(path){

        this.project =
            path ?? "No project opened";

    }

    async mount(){

    }

    render(){

        return `

<section class="workspace-view">

<div class="workspace-toolbar">

<button id="open-project">

📂 Open Project

</button>

<button id="create-project">

📁 Create Project

</button>

</div>

<div class="workspace-info">

<div>

<strong>Project</strong>

<br>

${WorkspaceView.project}

</div>

<div>

<strong>Current File</strong>

<br>

<span class="workspace-current-file">${EditorHost.getFile()}</span>

</div>

<div>

<strong>Status</strong>

<br>

🟢 Ready

</div>

</div>

<div class="workspace-layout">

<aside class="project-sidebar">

${new ProjectTree().render()}

</aside>

<section class="editor-column">

${new EditorTabs().render()}

${new EditorHost().render()}

</section>

</div>

</section>

`;

    }

}



