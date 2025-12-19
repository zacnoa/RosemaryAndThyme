import type {CloudinaryImage} from "../../CloudinaryImage.ts";
import type {LocalImage} from "../../LocalImage.ts";

export type TitleDescriptionProp = {
    title:string,
    description:string
    dispatch:Function
    image:CloudinaryImage | LocalImage
}