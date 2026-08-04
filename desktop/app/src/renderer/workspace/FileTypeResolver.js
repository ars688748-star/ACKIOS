export class FileTypeResolver{

    static resolve(path){

        if(!path){
            return "unknown";
        }

        const ext =
            path.split(".").pop().toLowerCase();


        const textExtensions=[

            "js",
            "ts",
            "json",
            "md",
            "txt",
            "css",
            "scss",
            "html",
            "xml",
            "yaml",
            "yml",
            "ps1",
            "py",
            "java",
            "cpp",
            "h"

        ];


        const archiveExtensions=[

            "zip",
            "tar",
            "gz",
            "rar"

        ];


        const binaryExtensions=[

            "exe",
            "dll",
            "bin",
            "iso"

        ];


        if(textExtensions.includes(ext)){
            return "text";
        }


        if(archiveExtensions.includes(ext)){
            return "archive";
        }


        if(binaryExtensions.includes(ext)){
            return "binary";
        }


        return "unknown";

    }

}
