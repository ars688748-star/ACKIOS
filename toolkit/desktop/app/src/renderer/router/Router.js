export class Router {

    #current = "workspace";

    current() {

        return this.#current;

    }

    navigate(view) {

        this.#current = view;

    }

}
