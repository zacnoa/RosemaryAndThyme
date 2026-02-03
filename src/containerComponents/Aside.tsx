import type {AsideProp} from "../types/props/containerProps/AsideProp.ts";
import ArrayTextArea from "../components/ArrayTextArea.tsx";
import {useStableKeys} from "../utils/stableKeys.ts";
import type {DispatchFunctionEventless} from "../reducer/DispatchFunction.ts";
import {ActionType} from "../enums/ActionType.ts";
import type {ChangeEvent} from "react";

export function Aside({dispatch,aside}:AsideProp)
{

    const keys = useStableKeys(aside.length);

    const addItem = (index:number) :DispatchFunctionEventless =>()=>{

        dispatch(
            {
                type:ActionType.addedAside,
                index:index
            }
        )
        keys.add();
    }
    const removeItem = (index:number):DispatchFunctionEventless =>()=>{

        if(aside.length>1)
        {
            dispatch(
                {
                    type:ActionType.removedAside,
                    index:index
                }
            )
            keys.removeAt(index);
        }
    }

    const textDispatchFunction =(index:number)=> (event:ChangeEvent<HTMLTextAreaElement>):void =>
    {
        dispatch(
            {
                type:ActionType.editedAside,
                newValue:event.target.value,
                index:index
            }
        )
    }




    return (
        <div>
            {
                aside.map((item,index)=>
                {
                    return(
                        <div key={keys.get(index)}>
                        <ArrayTextArea value={item} placeholder={"With a side of "} textDispatchFunction={textDispatchFunction(index)} addItem={addItem(index)} removeItem={removeItem(index)} />
                        </div>
                    )
                })
            }
        </div>
    )
}