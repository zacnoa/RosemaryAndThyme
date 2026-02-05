import {ActionType} from "../enums/ActionType.ts";
import type {RecipeState} from "../entity/RecipeState.ts";
import type {DispatchAction} from "./DispatchAction.ts";
import {Paths} from "../enums/Paths.ts";

export function recipeReducer(state: RecipeState, action: DispatchAction): RecipeState {
    switch (action.type) {

        case ActionType.editedTitle:
            return {
                ...state,
                title: action.newValue,
            };

        case ActionType.editedDescription:
            return {
                ...state,
                description: action.newValue,
            };

        case ActionType.editedHeaderImage:
            return {
                ...state,
                headerImage: {...state.headerImage,
                    localPath: action.localPath,
                    file: action.file,
                },
            };

        case ActionType.editedIngredient: {

            let newIngredients = [...state.ingredients]
            newIngredients[action.index] = {...newIngredients[action.index], value: action.newValue}

            return {
                ...state,
                ingredients: newIngredients,
            };
        }

        case ActionType.editedAmount: {
            const newIngredients = [...state.ingredients];

            newIngredients[action.index] = {
                ...newIngredients[action.index],
                amount: action.amount,
                unit: action.unit,
            };

            return {
                ...state,
                ingredients: newIngredients,
            };
        }

        case ActionType.addedIngredient: {
            let newIngredients = [...state.ingredients];
            newIngredients.splice(action.index + 1, 0, {value: ""})
            return {
                ...state,
                ingredients: newIngredients,
            };
        }

        case ActionType.removedIngredient:{
            return {
                ...state,
                ingredients: state.ingredients.filter((_, i) => i !== action.index),
            };
        }
        case ActionType.addedInstruction:{
            let newInstructions = [...state.instructions];
            newInstructions.splice(action.index + 1, 0,{value:"",image:{localPath:Paths.headerImage}})
            return {
                ...state,
                instructions: newInstructions,
            }
        }
        case ActionType.removedInstruction:{
            return {
                ...state,
                instructions: state.instructions.filter((_, i) => i !== action.index),
            }
        }
        case ActionType.editedInstruction:{
            let newInstructions = [...state.instructions];
            newInstructions[action.index] = {...newInstructions[action.index], value:action.newValue}
            return {
                ...state,
                instructions: newInstructions,
            }
        }

        case ActionType.editedInstructionImage:{
            let newInstructions= [...state.instructions];
            newInstructions[action.index] = {...newInstructions[action.index], image:{...newInstructions[action.index].image,localPath:action.localPath,file:action.file}}
            return{
                ...state,
                instructions:newInstructions,
            }
        }
        case ActionType.addedAside:{
            let newAside = [...state.aside]
            newAside.splice(action.index+1,0,"")
            return {
                ...state,
                aside:newAside,
            }

        }
        case ActionType.removedAside:{
            return {
                ...state,
                aside:state.aside.filter((_,i)=>i!==action.index),
            }
        }
        case ActionType.editedAside:{
            let newAside = [...state.aside];
            newAside[action.index]=action.newValue;
            return {
                ...state,
                aside:newAside,
            }
        }


        default: {
            return state;
        }
    }
}
