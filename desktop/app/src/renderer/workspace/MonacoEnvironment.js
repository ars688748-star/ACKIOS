import EditorWorker from "../../../../../node_modules/monaco-editor/esm/vs/editor/editor.worker?worker";
import JsonWorker from "../../../../../node_modules/monaco-editor/esm/vs/language/json/json.worker?worker";
import TsWorker from "../../../../../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker?worker";


self.MonacoEnvironment = {

    getWorker(_, label){

        if(label === "json"){

            return new JsonWorker();

        }


        if(label === "typescript" || label === "javascript"){

            return new TsWorker();

        }


        return new EditorWorker();

    }

};

