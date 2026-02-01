import  {ActionType} from "../enums/ActionType.ts";


/**
 * Represents dispatch actions to be used in the recipeReducer
 * @see DispatchProp
 */
export type DispatchAction=
    |{type:typeof ActionType.editedTitle, newValue:string}
    |{type:typeof ActionType.editedDescription, newValue:string}
    |{type:typeof ActionType.editedHeaderImage, localPath:string, file?:File}
    |{type:typeof ActionType.editedIngredient, index:number,newValue:string}
    |{type:typeof ActionType.editedAmount, index:number,amount:number,unit:string}
    |{type:typeof ActionType.addedIngredient,index:number}
    |{type:typeof ActionType.removedIngredient, index:number}
    |{type:typeof ActionType.addedInstruction,index:number}
    |{type:typeof ActionType.removedInstruction, index:number}
    |{type:typeof ActionType.editedInstruction, index:number, newValue:string}
    |{type:typeof ActionType.editedInstructionImage,index:number,localPath:string,file?:File}


