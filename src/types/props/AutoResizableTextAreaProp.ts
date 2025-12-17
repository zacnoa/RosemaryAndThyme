import type {DispatchProp} from "./DispatchProp.ts";


/**
 *  prop that should be passed to AutoResizableTextArea
 *  @see AutoResizableTextArea
 */
export type AutoResizableTextAreaProp= DispatchProp &{
    value:string,
    placeHolder:string,
}