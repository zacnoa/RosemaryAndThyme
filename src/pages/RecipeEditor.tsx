
import {recipeReducer} from "../reducer/recipeReducer.tsx";
import {initialStateOfRecipe} from "../reducer/initialStateOfRecipe.ts";
import type {DispatchFunction} from "../reducer/DispatchFunction.ts";
import {type JSX, useReducer} from "react";
import {TitleDescription} from "../containerComponents/TitleDescription.tsx";
import Ingredients from "../containerComponents/Ingredients.tsx";
import Instructions from "../containerComponents/Instructions.tsx";
import {Aside} from "../containerComponents/Aside.tsx";


/**
 * Represents the page which should be used for editing recipes
 *
 * The dispatch function should never be called directly, instead it should be called inside  {@link DispatchFunction}
 * which is passed as a prop to the child component that needs to call the dispatch function
 */
export  function RecipeEditor():JSX.Element
{

    const [currentRecipe,dispatch]=useReducer(recipeReducer,initialStateOfRecipe);



 return(
     <div>
         <TitleDescription
            title={currentRecipe.title}
            description={currentRecipe.description}
            dispatch={dispatch}
            image={currentRecipe.headerImage}>
         </TitleDescription>
         <Ingredients ingredients={currentRecipe.ingredients} dispatch={dispatch} />
         <Instructions instructions={currentRecipe.instructions} dispatch={dispatch}/>
         <Aside aside={currentRecipe.aside} dispatch={dispatch}></Aside>
     </div>
 )
}