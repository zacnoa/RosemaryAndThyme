import type {DispatchFunction} from "../../reducer/DispatchFunction.ts";


/**
 *  Prop that should be passed to AutoResizableTextArea
 *  @see AutoResizableTextArea
 *  @see DispatchProp
 */
export type AutoResizableTextAreaProp={
    value:string,
    placeHolder:string,
    dispatchFunction:DispatchFunction<HTMLTextAreaElement>
    
}