import type {ActionType} from "../enums/ActionType.ts";


/**
 * Represents dispatch actions to be passed to the dispatch function with a discriminated union
 * @see DispatchProp
 */
export type DispatchAction=
    |{type:ActionType; newValue:string};