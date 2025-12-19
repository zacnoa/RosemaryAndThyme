import type {CloudinaryImage} from "../CloudinaryImage.ts";
import type {LocalImage} from "../LocalImage.ts";
import type {DispatchFunction} from "../../reducer/DispatchFunction.ts";

export type ImagePickerProp = {
    image:CloudinaryImage | LocalImage
    dispatchFunction:DispatchFunction<HTMLInputElement>

}