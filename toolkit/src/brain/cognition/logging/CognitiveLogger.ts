export class CognitiveLogger{

    info(message:string):void{

        console.info("[COGNITION]",message);

    }

    warn(message:string):void{

        console.warn("[COGNITION]",message);

    }

    error(message:string):void{

        console.error("[COGNITION]",message);

    }

}
