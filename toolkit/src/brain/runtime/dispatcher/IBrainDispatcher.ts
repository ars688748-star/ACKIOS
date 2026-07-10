export interface IBrainDispatcher {

    dispatch<T>(handler: () => Promise<T>): Promise<T>;

}
