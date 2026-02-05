import type {DispatchFunction, DispatchFunctionEventless} from "../../reducer/DispatchFunction.ts";
import type {Image} from "../../entity/Image.ts";

export type ImagePickerProp = {
    image: Image,
    dispatchFunctionAddImage:DispatchFunction<HTMLInputElement>
    dispatchFunctionDeleteImage:DispatchFunctionEventless
    showPlaceholder:boolean

}