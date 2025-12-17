import React, {type JSX} from "react";
import type { AutoResizableTextAreaProp} from "../types/props/AutoResizableTextAreaProp.ts";
import {autoResizeHeight} from "../utils/autoResizeHeight.ts";




/**
 *
 * Should be used when a textarea needs to be able to dynamically change its height to fit its scroll height
 * @param AutoResizableTextAreaProp prop of type AutoResizableTextAreaProp
 * @see AutoResizableTextAreaProp
 * @returns JSX.Element of type AutoResizableTextAreaProp
 *
 *
 * */
export function AutoResizableTextArea({value,placeHolder,dispatch}: Readonly<AutoResizableTextAreaProp>) :JSX.Element
{

    function handleChange(event:React.ChangeEvent<HTMLTextAreaElement>): void
    {
        dispatch({type:"edited_textArea",newValue:event.target.value});
        autoResizeHeight(event);

    }



    return(
        <div>
            <textarea value={value} placeholder={placeHolder} onChange={handleChange}></textarea>
        </div>
    )

}
