import type {IngredientsProp} from "../types/props/containerProps/IngredientsProp.ts";
import type {ChangeEvent} from "react";
import {ActionType} from "../enums/ActionType.ts";
import type {DispatchFunction, DispatchFunctionEventless} from "../reducer/DispatchFunction.ts";
import {useStableKeys} from "../utils/stableKeys.ts";
import ArrayTextArea from "../components/ArrayTextArea.tsx";
import type {Ingredient} from "../entity/Ingredient.ts";

export default function Ingredients({ingredients,dispatch}: Readonly<IngredientsProp>)
{

    const keys= useStableKeys(ingredients.length);

    //closure -> function that returns a function

    const handleIngredientTextChange = (index:number):DispatchFunction<HTMLTextAreaElement> =>(event:ChangeEvent<HTMLTextAreaElement>):void =>
    {
        dispatch(
            {
                type:ActionType.editedIngredient,
                index:index,
                newValue:event.target.value
            }
        )

    }

    const  parseAmountInput=(input: string): { amount?: number; unit?: string }=> {
        const trimmed = input.trim();

        // permissive regex
        const match = trimmed.match(/^(\d*\.?\d*)\s*([A-Za-z]*)$/i);

        let amount: number | undefined = undefined;
        let unit: string | undefined = undefined;

        if (match) {
            const [, amt, u] = match;
            if (amt !== "") amount = parseFloat(amt);
            if (u !== "") unit = u;
        }

        return { amount, unit };
    }

    const handleAmountChange = (index: number): DispatchFunction<HTMLTextAreaElement> =>
        (event: ChangeEvent<HTMLTextAreaElement>) => {

            const {amount,unit} = parseAmountInput(event.target.value);

            dispatch({
                type: ActionType.editedAmount,
                index:index,
                amount:amount,
                unit:unit,
            });
        };

    const addItem = (index:number):DispatchFunctionEventless =>()=>
    {

        dispatch(
            {
                type:ActionType.addedIngredient,
                index:index
            }
        )
        keys.add();

    }
    const removeItem = (index:number):DispatchFunctionEventless =>()=>
    {
        if(ingredients.length>1)
        {
            dispatch(
                {
                    type:ActionType.removedIngredient,
                    index:index
                }
            )
            keys.removeAt(index);
        }
    }

    const formatAmount = ({amount, unit}: Ingredient): string => {
        if (amount === undefined && unit === undefined) return "";
        if (amount === undefined) return unit ?? "";
        if (unit === undefined) return amount.toString();
        return amount.toString() + " " + unit;
    }


    
    return(
        <div>
            {
                ingredients.map((ingredient,index)=>{
                    return(
                         <div key={keys.get(index)}>
                             <textarea   onChange={handleAmountChange(index)} value={formatAmount(ingredient)}></textarea>
                             <ArrayTextArea value={ingredient.value}
                                            placeholder={"ingredient"}
                                            textDispatchFunction={handleIngredientTextChange(index)}
                                            addItem={addItem(index)}
                                            removeItem={removeItem(index)} />
                         </div>
                    )
                    }
                )
            }
        </div>
    )
}