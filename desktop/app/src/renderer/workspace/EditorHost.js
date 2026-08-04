export class EditorHost{

    static filePath = "";

    static fileName = "No file selected";

    static content = "";

    static dirty = false;

    static setDirty(value){

        this.dirty = value;

    }

    static isDirty(){

        return this.dirty;

    }

    static setFile(path){

        this.filePath = path ?? "";

        this.dirty = false;

        if(!path){

            this.fileName = "No file selected";

            return;

        }

        const parts = path.split(/[\\/]/);

        this.fileName = parts[parts.length - 1];

    }

    static getPath(){

        return this.filePath;

    }

    static getFile(){

        return this.fileName;

    }

    static getContent(){

        return this.content;

    }

    static setContent(content){

        this.content = content ?? "";

        this.dirty = false;

    }

    render(){

        return `

<div class="editor-host">

<div class="editor-header">

<span class="editor-file">

${EditorHost.fileName}${EditorHost.dirty ? " ●" : ""}

</span>

</div>

<div
id="editor"
class="editor-content">



</div>

</div>

`;

    }

}


