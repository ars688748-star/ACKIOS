export class EditorHost{

    static fileName = "No file selected";

    static content = "";

    static setFile(path){

        if(!path){

            this.fileName = "No file selected";
            return;

        }

        const parts = path.split(/[\\/]/);

        this.fileName = parts[parts.length - 1];

    }

    static setContent(content){

        this.content = content ?? "";

    }

    render(){

        return `

<div class="editor-host">

    <div class="editor-header">

        <span class="editor-file">

            ${EditorHost.fileName}

        </span>

    </div>

    <textarea
        class="editor-content"
        spellcheck="false"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off">${EditorHost.content}</textarea>

</div>

`;

    }

}
