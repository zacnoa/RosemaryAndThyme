import type {Instruction} from "../../../entity/Instruction.ts";

export type InstructionsProp = {

    instructions:Instruction[],
    dispatch:Function,

}