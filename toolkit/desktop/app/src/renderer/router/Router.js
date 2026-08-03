export class Router {

    #current = "dashboard";

    current() {

        return this.#current;

    }

    navigate(view) {

        this.#current = view;

    }

}

