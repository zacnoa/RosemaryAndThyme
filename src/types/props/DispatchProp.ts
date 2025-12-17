import type {DispatchAction} from "../DispatchAction.ts";
import type {ActionType} from "../../enums/ActionType.ts";


/**
 *  Type that should be intersected with any prop that changes state provided by the reducer
 */
export type DispatchProp ={
    dispatch:(action:DispatchAction)=>void
    type:ActionType
}