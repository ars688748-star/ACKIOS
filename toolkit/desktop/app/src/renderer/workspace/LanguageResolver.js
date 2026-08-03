export class LanguageResolver{

    static resolve(path){

        if(!path){
            return "plaintext";
        }

        const ext =
            path.split(".").pop().toLowerCase();


        const map={

            js:"javascript",
            mjs:"javascript",

            ts:"typescript",
            mts:"typescript",

            json:"json",

            md:"markdown",

            html:"html",

            css:"css",

            scss:"scss",

            ps1:"powershell",

            py:"python",

            java:"java",

            cpp:"cpp",
            h:"cpp",

            txt:"plaintext"

        };


        return map[ext] ?? "plaintext";

    }

}
