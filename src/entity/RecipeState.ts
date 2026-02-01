import type {CloudinaryImage} from "./CloudinaryImage.ts";
import type {LocalImage} from "./LocalImage.ts";
import type {Ingredient} from "./Ingredient.ts";
import type {Instruction} from "./Instruction.ts";

/**
 * Represents the state of the recipe
 */
export interface RecipeState
{
    title:string;
    description:string;
    headerImage:CloudinaryImage | LocalImage,
    ingredients:Ingredient[],
    instructions:Instruction[]
}