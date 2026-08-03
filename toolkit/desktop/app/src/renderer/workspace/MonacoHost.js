import * as monaco from "monaco-editor";
import { EditorHost } from "./EditorHost.js";
import { LanguageResolver } from "./LanguageResolver.js";
import { EditorSession } from "./EditorSession.js";

export class MonacoHost{

    static editor = null;

    static async initialize(){

        console.log("MonacoHost.initialize()");

        const container =
            document.getElementById("editor");

        console.log("editor container =",container);

        if(!container){

            return;

        }

        if(this.editor){

            return;

        }

        console.log("creating monaco editor...");

        this.editor =
            monaco.editor.create(
                container,
                {

                    value: "",

                    language: LanguageResolver.resolve(EditorHost.getPath()),

                    automaticLayout: true,

                    theme: "vs-dark",

                    minimap:{
                        enabled:true
                    },

                    fontSize:14,

                    scrollBeyondLastLine:false

                }
            );


        this.editor.focus();

        this.editor.onDidChangeModelContent(()=>{

            const content =
                this.editor.getValue();


            const path =
                EditorHost.getPath();


            EditorHost.setContent(
                content
            );


            EditorSession.setContent(
                path,
                content
            );


            EditorSession.setDirty(
                path,
                true
            );


            EditorHost.setDirty(true);

        });

    }

    static setValue(value){

        console.log("MONACO SET VALUE:", value?.length);

        if(this.editor){

            this.editor.setValue(
                value ?? ""
            );

            monaco.editor.setModelLanguage(
                this.editor.getModel(),
                LanguageResolver.resolve(
                    EditorHost.getPath()
                )
            );

            this.editor.focus();

            this.editor.layout();

        }

    }

    static getValue(){

        return this.editor
            ? this.editor.getValue()
            : "";

    }

    static clear(){

        if(this.editor){

            this.editor.setValue("");

        }

    }

}



















