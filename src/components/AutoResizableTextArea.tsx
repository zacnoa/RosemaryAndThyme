import React, {type JSX} from "react";
import type { AutoResizableTextAreaProp} from "../types/props/AutoResizableTextAreaProp.ts";
import {autoResizeHeight} from "../utils/autoResizeHeight.ts";




/**
 *
 * Should be used when a textarea needs to be able to dynamically change its height to fit its scroll height
 * @param value of the textarea
 * @param placeHolder of the textarea
 * @param dispatch function to be called when the textarea changes
 * @param type of the action to be dispatched
 * @see  AutoResizableTextAreaProp
 * @returns JSX.Element of type AutoResizableTextAreaProp
 *
 *
 * */
export function AutoResizableTextArea({value,placeHolder,dispatch,type}: Readonly<AutoResizableTextAreaProp>) :JSX.Element
{

    function handleChange(event:React.ChangeEvent<HTMLTextAreaElement>): void
    {
        dispatch({type:type,newValue:event.target.value});
        autoResizeHeight(event);

    }



    return(
        <div>
            <textarea value={value} placeholder={placeHolder} onChange={handleChange}></textarea>
        </div>
    )

}
