import type {DispatchProp} from "./DispatchProp.ts";


/**
 *  Prop that should be passed to AutoResizableTextArea
 *  @see AutoResizableTextArea
 *  @see DispatchProp
 */
export type AutoResizableTextAreaProp= DispatchProp &{
    value:string,
    placeHolder:string,
}