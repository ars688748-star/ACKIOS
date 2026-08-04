export class WorkspaceService {

    #project = null;

    open(path){

        this.#project = path;

    }

    current(){

        return this.#project;

    }

}
