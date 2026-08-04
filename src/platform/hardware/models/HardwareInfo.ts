export interface HardwareInfo {

    cpu: CPUInfo;

    memory: MemoryInfo;

    architecture: string;

    gpu: GPUInfo[];

}


export interface CPUInfo {

    model: string;

    cores: number;

    threads: number;

}


export interface MemoryInfo {

    totalBytes: number;

}


export interface GPUInfo {

    model: string;

    vendor: string;

}

