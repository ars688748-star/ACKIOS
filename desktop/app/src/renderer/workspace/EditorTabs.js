import { EditorSession } from "./EditorSession.js";

export class EditorTabs{

    render(){

        return `

<div class="editor-tabs">

${EditorSession.getTabs().map(tab=>`

<button
class="editor-tab${tab.path===EditorSession.getActive() ? " active" : ""}"
data-path="${tab.path}">

${tab.name}${tab.dirty ? " ●" : ""}

<span
class="editor-tab-close"
data-close="${tab.path}">

×

</span>

</button>

`).join("")}

</div>

`;

    }

}



