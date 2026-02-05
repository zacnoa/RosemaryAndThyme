import type {RecipeState} from "../entity/RecipeState.ts";


/**
 * Initial state of the recipe to initialize the reducer
 */
export const initialStateOfRecipe:RecipeState = {
    title:"",
    description:"",
    headerImage:{},
    ingredients:[{value:"",amount:150, unit:"g"}],
    instructions:[{value: "", image:{}}],
    aside:[""]


}