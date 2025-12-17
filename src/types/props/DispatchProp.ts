import type {DispatchAction} from "../DispatchAction.ts";

/**
 *  type that should be intersected with any prop that changes the global state of the recipe state
 */
export type DispatchProp ={
    dispatch:(action:DispatchAction)=>void
}