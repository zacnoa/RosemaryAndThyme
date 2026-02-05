import type {Ingredient} from "./Ingredient.ts";
import type {Instruction} from "./Instruction.ts";
import type {Image} from "./Image.ts";

/**
 * Represents the state of the recipe
 */
export interface RecipeState
{
    title:string;
    description:string;
    headerImage: Image
    ingredients:Ingredient[],
    instructions:Instruction[],
    aside:string[]
}