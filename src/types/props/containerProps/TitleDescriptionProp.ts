import type {Image} from "../../../entity/Image.ts";

export type TitleDescriptionProp = {
    title:string,
    description:string
    dispatch:Function
    image: Image
}