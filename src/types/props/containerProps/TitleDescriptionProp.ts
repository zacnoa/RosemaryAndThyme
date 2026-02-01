import type {CloudinaryImage} from "../../../entity/CloudinaryImage.ts";
import type {LocalImage} from "../../../entity/LocalImage.ts";

export type TitleDescriptionProp = {
    title:string,
    description:string
    dispatch:Function
    image:CloudinaryImage | LocalImage
}