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
        document.querySelectorAll(".tree-file");

    console.log(
        "TREE BUTTONS =",
        buttons.length
    );

    buttons.forEach(button=>{

        button.onclick = async()=>{

            const path =
                button.dataset.file;

            console.log(
                "CLICK FILE =",
                path
            );

            const text =
                await openFile(path);

            EditorHost.setFile(path);

            EditorHost.setContent(text);

            renderCurrent();

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

            <button
                class="recent-project"
                data-path="${project.path}">
                ${project.path}
            </button>

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

function renderCurrent(){

    workspace.innerHTML =
        views.render(
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






