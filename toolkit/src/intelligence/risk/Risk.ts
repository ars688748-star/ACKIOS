import { RiskLevel } from "./RiskLevel.js";

export interface Risk {

    id: string;

    title: string;

    description: string;

    level: RiskLevel;

}
