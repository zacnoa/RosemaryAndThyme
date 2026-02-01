import type {DispatchFunctionEventless} from "../../reducer/DispatchFunction.ts";
import type {AutoResizableTextAreaProp} from "./AutoResizableTextAreaProp.ts";

export type ArrayTextAreaProp = AutoResizableTextAreaProp & {
     addItem:DispatchFunctionEventless,
     removeItem:DispatchFunctionEventless,
     index?:number,
}