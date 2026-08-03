import { WorkspaceState } from "./WorkspaceState.js";

export class EditorSession{

    static tabs = [];

    static active = "";


    static sync(){

        WorkspaceState.setTabs(
            this.tabs
        );

        WorkspaceState.setActiveFile(
            this.active
        );

    }

    static open(path){

        if(!path){

            return;

        }

        const exists =
            this.tabs.find(
                tab=>tab.path===path
            );

        if(!exists){

            const parts =
                path.split(/[\\/]/);

            this.tabs.push({

                path,

                name: parts[parts.length-1],

                dirty: false,

                content: ""


            });

        }

        this.active = path;

        this.sync();

    }

    static close(path){

        this.tabs =
            this.tabs.filter(
                tab=>tab.path!==path
            );

        if(this.active===path){

            this.active =
                this.tabs.length
                    ? this.tabs[this.tabs.length-1].path
                    : "";

        }

        this.sync();

    }

    static setDirty(path,value){

        const tab =
            this.tabs.find(
                t=>t.path===path
            );

        if(tab){

            tab.dirty = value;

        }

    }

    static setContent(path,content){

        const tab =
            this.tabs.find(
                t=>t.path===path
            );

        if(tab){

            tab.content = content;

        }

    }

    static getContent(path){

        return this.tabs.find(
            t=>t.path===path
        )?.content ?? "";

    }

    static getTabs(){

        return this.tabs;

    }


    static setActive(path){

        this.active = path ?? "";

        this.sync();

    }

    static restore(){

        this.tabs =
            WorkspaceState.getTabs() ?? [];

        this.active =
            WorkspaceState.getActiveFile() ?? "";

    }


    static getActive(){

        return this.active;

    }

}








