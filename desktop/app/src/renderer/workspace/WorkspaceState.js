export class WorkspaceState{

    static project = "";

    static tree = [];

    static tabs = [];

    static activeFile = "";

    static setProject(path){

        this.project = path ?? "";

    }


    static getProject(){

        return this.project;

    }


    static setTree(tree){

        this.tree = tree ?? [];

    }


    static getTree(){

        return this.tree;

    }


    static setTabs(tabs){

        this.tabs = tabs ?? [];

    }


    static getTabs(){

        return this.tabs;

    }


    static setActiveFile(path){

        this.activeFile = path ?? "";

    }


    static getActiveFile(){

        return this.activeFile;

    }

}

