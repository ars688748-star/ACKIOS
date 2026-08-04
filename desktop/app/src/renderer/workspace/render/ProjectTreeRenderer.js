export class ProjectTreeRenderer{

    render(model){

        if(model.entries.length===0){

            return "<div>No files</div>";

        }

        return "<ul>"+

        model.entries

        .map(x=>`<li>${x.name}</li>`)

        .join("")

        +

        "</ul>";

    }

}
