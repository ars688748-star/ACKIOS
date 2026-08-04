export class FirstRunState {


    private completed: boolean = false;


    public isCompleted(): boolean {

        return this.completed;

    }


    public complete(): void {

        this.completed = true;

    }


    public reset(): void {

        this.completed = false;

    }


}
