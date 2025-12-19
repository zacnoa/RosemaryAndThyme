import type {RecipeState} from "../entity/RecipeState.ts";
import type {DispatchAction} from "./DispatchAction.ts";
import {ActionType} from "../enums/ActionType.ts";

/**
 * Reducer function for managing state transitions in a recipe editing workflow.
 *
 *
 */
export function recipeReducer(state:RecipeState,action:DispatchAction):RecipeState
{
    switch(action.type)
    {
        case ActionType.editedTitle:
        {
            return {
                ...state,
                title: action.newValue
            };

        }
        case ActionType.editedDescription:
        {
            return{
                ...state,
                description:action.newValue
            }
        }
        case ActionType.editedHeaderImage:
        {
            return{
                ...state,
                headerImage:{localPath:action.localPath,file:action.file}
            }
        }
    }
}