import type {RecipeState} from "../entity/RecipeState.ts";
import type {DispatchAction} from "../types/DispatchAction.ts";

/**
 * Reducer function for managing state transitions in a recipe editing workflow.
 *
 *
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