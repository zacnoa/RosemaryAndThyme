import {type JSX, useReducer} from "react";
import {AutoResizableTextArea} from "../components/AutoResizableTextArea.tsx";
import {recipeReducer} from "../reducer/recipeReducer.tsx";
import {initialStateOfRecipe} from "../reducer/initialStateOfRecipe.ts";
import {ActionType} from "../enums/ActionType.ts";


/**
 * Represents the page which should be used for editing recipes
 *
 */
export  function RecipeEditor():JSX.Element
{

    const [currentRecipe,dispatch]=useReducer(recipeReducer,initialStateOfRecipe);




 return(
     <div>
        <AutoResizableTextArea
            value={currentRecipe.value}
            placeHolder={"kakav vam je dan"}
            dispatch={dispatch}
            type={ActionType.editedTextArea}
        >
        </AutoResizableTextArea>

     </div>
 )
}