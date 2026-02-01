import type {CloudinaryImage} from "./CloudinaryImage.ts";
import type {LocalImage} from "./LocalImage.ts";
export interface Instruction {

    value:string,
    image: LocalImage | CloudinaryImage,


}