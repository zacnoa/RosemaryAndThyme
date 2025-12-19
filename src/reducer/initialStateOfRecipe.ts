import type {RecipeState} from "../entity/RecipeState.ts";
import {Paths} from "../enums/Paths.ts";


/**
 * Initial state of the recipe to initialize the reducer
 */
export const initialStateOfRecipe:RecipeState = {
    title:"",
    description:"",
    headerImage:{localPath:Paths.headerImage}

}