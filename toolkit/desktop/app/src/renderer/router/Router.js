export class Router {

    #current = "welcome";

    current() {

        return this.#current;

    }

    navigate(view) {

        this.#current = view;

    }

}
