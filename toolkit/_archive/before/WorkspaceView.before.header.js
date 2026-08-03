import { ProjectTree } from "../workspace/ProjectTree.js";
import { EditorHost } from "../workspace/EditorHost.js";

export class WorkspaceView{

    static project = "No project opened";

    static setProject(path){

        this.project =
            path ?? "No project opened";

    }

    render(){

        return `

<section class="workspace-view">

<div class="workspace-toolbar">

<button
id="open-project">

Open Project

</button>

<button
id="create-project">

Create Project

</button>

<div class="project-path">

${WorkspaceView.project}

</div>

</div>

<div class="workspace-layout">

<aside class="project-sidebar">

${new ProjectTree().render()}

</aside>

<section class="editor-column">

${new EditorHost().render()}

</section>

</div>

</section>

`;

    }

}
