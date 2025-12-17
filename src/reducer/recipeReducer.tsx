import type {RecipeState} from "../entity/RecipeState.ts";
import type {DispatchAction} from "../types/DispatchAction.ts";

/**
 * Handles changes to the recipe state
 * @param state current state of the recipe
 * @param action action to be performed
 */
export function recipeReducer(state:RecipeState,action:DispatchAction):RecipeState
{
    switch(action.type)
    {
        case "edited_textArea":
        {
            return {
                ...state,
                value: action.newValue
            };

        }
    }
}