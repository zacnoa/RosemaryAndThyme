import type {CloudinaryImage} from "../types/CloudinaryImage.ts";
import type {LocalImage} from "../types/LocalImage.ts";

/**
 * Represents the state of the recipe
 */
export interface RecipeState
{
    title:string;
    description:string;
    headerImage:CloudinaryImage | LocalImage
}