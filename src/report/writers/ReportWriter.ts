export interface ReportWriter {

    write(
        output: string,
        content: string
    ): Promise<void>;

}
