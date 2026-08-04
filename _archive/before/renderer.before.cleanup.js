import "./workspace/MonacoEnvironment.js";
import { AppShell } from "./shell/AppShell.js";
import { Sidebar } from "./components/Sidebar.js";
import { StatusBar } from "./components/StatusBar.js";
import { ViewHost } from "./ViewHost.js";
import { Router } from "./router/Router.js";

import { WorkspaceView } from "./views/WorkspaceView.js";
import { ProjectTree } from "./workspace/ProjectTree.js";
import { TreeBuilder } from "./workspace/TreeBuilder.js";

import {
    openWorkspace,
    createWorkspace,
    listWorkspace,
    getRecentProjects
} from "./workspace/WorkspaceApi.js";

import { openFile } from "./workspace/EditorApi.js";
import { EditorHost } from "./workspace/EditorHost.js";
import { WorkspaceController } from "./workspace/WorkspaceController.js";

const router = new Router();
const views = new ViewHost();

document.body.innerHTML =
    new AppShell().render();

document.getElementById("sidebar").innerHTML =
    new Sidebar().render();

document.getElementById("statusbar").innerHTML =
    new StatusBar().render();

const workspace =
    document.getElementById("workspace");

function wireTree(){

    const buttons =
        document.querySelectorAll("[data-file]");

    buttons.forEach(button=>{

        button.onclick = async()=>{

            const path =
                button.dataset.file;

            const text =
                await openFile(path);

            await WorkspaceController.open(
                path,
                text
            );

        };

    });

}

function wireWorkspace(){

    const openButton =
        document.getElementById("open-project");


    if(openButton){

        openButton.onclick =
            openProject;

    }



    const createButton =
        document.getElementById("create-project");


    if(createButton){

        createButton.onclick =
            createProject;

    }



    const welcomeOpen =
        document.getElementById("welcome-open-project");


    if(welcomeOpen){

        welcomeOpen.onclick =
            openProject;

    }



    const welcomeCreate =
        document.getElementById("welcome-create-project");


    if(welcomeCreate){

        welcomeCreate.onclick =
            createProject;

    }

}


async function loadRecentProjects(){

    const data =
        await getRecentProjects();




    const container =
        document.getElementById(
            "recent-project-list"
        );


    if(!container){

        return;

    }


    if(!data.projects.length){

        container.innerHTML =
            "No recent projects";

        return;

    }


    container.innerHTML =
        data.projects.map(project => `

            <div class="recent-project-card">

                <h3>
                    📁 ${project.name ?? project.path.split("\\").pop()}
                </h3>

                <p>
                    Type:
                    ${project.type ?? "unknown"}
                </p>


                <p>
                    Files:
                    ${project.fileCount ?? 0}
                </p>


                <p>
                    Last opened:
                    ${new Date(project.openedAt).toLocaleString()}
                </p>

                <button
                    class="recent-project"
                    data-path="${project.path}">
                    Open Project
                </button>

            </div>

        `).join("");


    document
    .querySelectorAll(".recent-project")
    .forEach(button=>{

        button.onclick = async()=>{

            await loadWorkspace(
                button.dataset.path
            );

        };

    });

}

async function renderCurrent(){

    workspace.innerHTML =
        await views.render(
            router.current()
        );

    await views.mount(
        router.current()
    );

    wireWorkspace();
    wireTree();

    loadRecentProjects();

}

async function openProject(){

    const path =
        await openWorkspace();

    if(!path){
        return;
    }

    await loadWorkspace(path);

}

async function createProject(){

    const path =
        await createWorkspace();

    if(!path){

        return;

    }

    await loadWorkspace(path);

}

async function loadWorkspace(path){

    WorkspaceView.setProject(path);

    const files =
        await listWorkspace(path);

    const tree =
        TreeBuilder.build(files);

    ProjectTree.setTree(tree);

    router.navigate(
        "workspace"
    );

    renderCurrent();

}

renderCurrent();

document
.querySelectorAll("[data-view]")
.forEach(item=>{

    item.onclick=()=>{

        router.navigate(
            item.dataset.view
        );

        renderCurrent();

    };

});



















document.addEventListener("keydown", async event=>{

    if(event.ctrlKey && event.key === "s"){

        event.preventDefault();

        await WorkspaceController.save();

    }

});


