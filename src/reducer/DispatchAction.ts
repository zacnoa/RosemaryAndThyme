import  {ActionType} from "../enums/ActionType.ts";


/**
 * Represents dispatch actions to be used in the recipeReducer
 * @see DispatchProp
 */
export type DispatchAction=
    |{type:typeof ActionType.editedTitle, newValue:string}
    |{type:typeof ActionType.editedDescription, newValue:string}
    |{type:typeof ActionType.editedHeaderImage, localPath:string, file?:File}