import { WorkspaceState } from "./WorkspaceState.js";

export class ProjectTree{

    static tree=[];

    static setTree(tree){

        this.tree=tree??[];

        WorkspaceState.setTree(this.tree);

    }

    renderNode(node){

        if(node.directory){

            return `
<li>

<details>

<summary>${node.name}</summary>

<ul>

${node.children
.map(child=>this.renderNode(child))
.join("")}

</ul>

</details>

</li>
`;

        }

        return `
<li>

<button
type="button"
class="tree-file"
data-file="${node.path}">

${node.name}

</button>

</li>
`;

    }

    render(){

        return `

<div class="project-tree">

<h3>Project</h3>

<ul>

${ProjectTree.tree
.map(node=>this.renderNode(node))
.join("")}

</ul>

</div>

`;

    }

}

