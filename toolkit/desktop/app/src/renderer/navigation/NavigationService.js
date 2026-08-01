export class NavigationService {

    #current = "workspace";

    navigate(view){

        this.#current = view;

        document.dispatchEvent(
            new CustomEvent(
                "ackios:navigate",
                {
                    detail:view
                }
            )
        );

    }

    current(){

        return this.#current;

    }

}
