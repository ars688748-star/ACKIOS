export interface RepositoryBoundaryViolation{

    path:string;

    type:string;

    rule:string;

}

export interface RepositoryBoundaryResult{

    safeToPublish:boolean;

    violations:RepositoryBoundaryViolation[];

}
