export interface PlatformCapabilities {

    readonly isWindows: boolean;

    readonly isLinux: boolean;

    readonly isMacOS: boolean;

    readonly is64Bit: boolean;

    readonly supportsSymlinks: boolean;

    readonly supportsProcesses: boolean;

}
