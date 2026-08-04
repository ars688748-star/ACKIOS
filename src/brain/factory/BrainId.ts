export class BrainId{

    static create():string{

        return crypto.randomUUID();

    }

}
