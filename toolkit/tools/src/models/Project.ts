export interface ProjectInfo {
    name: string;
    version: string;
    root: string;

    packageManager: string;

    framework: {
        electron: boolean;
        react: boolean;
        vite: boolean;
        typescript: boolean;
    };

    scripts: Record<string, string>;

    dependencies: Record<string, string>;

    devDependencies: Record<string, string>;
}