export class Logger {

    private timestamp(): string {
        return new Date().toISOString();
    }

    public info(message: string): void {
        console.log(`[INFO] ${this.timestamp()} ${message}`);
    }

    public warn(message: string): void {
        console.warn(`[WARN] ${this.timestamp()} ${message}`);
    }

    public error(message: string): void {
        console.error(`[ERROR] ${this.timestamp()} ${message}`);
    }

}