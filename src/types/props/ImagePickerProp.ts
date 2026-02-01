import type {CloudinaryImage} from "../../entity/CloudinaryImage.ts";
import type {LocalImage} from "../../entity/LocalImage.ts";
import type {DispatchFunction, DispatchFunctionEventless} from "../../reducer/DispatchFunction.ts";

export type ImagePickerProp = {
    image:CloudinaryImage | LocalImage
    dispatchFunctionAddImage:DispatchFunction<HTMLInputElement>
    dispatchFunctionDeleteImage:DispatchFunctionEventless
    showPlaceholder:boolean

}