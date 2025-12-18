import {type ChangeEvent, type JSX, useReducer} from "react";
import {AutoResizableTextArea} from "../components/AutoResizableTextArea.tsx";
import {recipeReducer} from "../reducer/recipeReducer.tsx";
import {initialStateOfRecipe} from "../reducer/initialStateOfRecipe.ts";
import {ActionType} from "../enums/ActionType.ts";
import type {DispatchFunction} from "../reducer/DispatchFunction.ts";


/**
 * Represents the page which should be used for editing recipes
 *
 */
export  function RecipeEditor():JSX.Element
{

    const [currentRecipe,dispatch]=useReducer(recipeReducer,initialStateOfRecipe);


    let dispatchfunction:DispatchFunction<HTMLTextAreaElement>=(event:ChangeEvent<HTMLTextAreaElement>) =>
        dispatch({type:ActionType.editedTextArea,newValue:event.target.value});

 return(
     <div>
        <AutoResizableTextArea
            value={currentRecipe.value}
            placeHolder={"kakav vam je dan"}
            dispatchFunction={dispatchfunction}
        >
        </AutoResizableTextArea>

     </div>
 )
}