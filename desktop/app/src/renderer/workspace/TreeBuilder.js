export class TreeBuilder{

    static hidden=new Set([

        ".git",
        ".private",
        ".agents",
        "_migration",
        "node_modules",
        "dist",
        "out",
        "coverage"

    ]);

    static build(files){

        const root={

            name:"",
            directory:true,
            children:[]

        };

        const map=new Map();

        map.set("",root);

        for(const file of files){

            const parts=file.path.split(/[\\/]/);

            const projectIndex=
                parts.findIndex(x=>x==="ACKIOS");

            if(projectIndex<0){
                continue;
            }

            const relative=
                parts.slice(projectIndex);

            let current="";
            let parent=root;

            for(let i=0;i<relative.length;i++){

                const part=relative[i];

                if(
                    i>0 &&
                    TreeBuilder.hidden.has(part)
                ){
                    parent=null;
                    break;
                }

                current=current
                    ? current+"\\"+part
                    : part;

                const last=
                    i===relative.length-1;

                if(last && !file.directory){

                    parent.children.push({

                        name:file.name,
                        path:file.path,
                        directory:false,
                        children:[]

                    });

                    break;

                }

                if(!map.has(current)){

                    const folder={

                        name:part,
                        path:current,
                        directory:true,
                        children:[]

                    };

                    map.set(current,folder);

                    parent.children.push(folder);

                }

                parent=map.get(current);

            }

        }

        TreeBuilder.sort(root.children);

        return root.children;

    }

    static sort(nodes){

        nodes.sort((a,b)=>{

            if(a.directory!==b.directory){

                return a.directory?-1:1;

            }

            return a.name.localeCompare(b.name);

        });

        for(const node of nodes){

            TreeBuilder.sort(node.children);

        }

    }

}
