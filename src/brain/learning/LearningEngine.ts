export class LearningEngine {

    private iterations = 0;

    learn(): void {

        this.iterations++;

    }

    getIterations(): number {

        return this.iterations;

    }

    reset(): void {

        this.iterations = 0;

    }

}
