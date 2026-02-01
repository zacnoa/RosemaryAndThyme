import type {ArrayTextAreaProp} from "../types/props/ArrayTextAreaProp.ts";
import {AutoResizableTextArea} from "./AutoResizableTextArea.tsx";

export default function ArrayTextArea({addItem,removeItem,value,textDispatchFunction,placeholder}:ArrayTextAreaProp)
{


    return(
        <div>
            <AutoResizableTextArea value={value} placeholder={placeholder} textDispatchFunction={textDispatchFunction} />
            <button onClick={addItem}>Add</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}