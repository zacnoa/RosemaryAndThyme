import type {InstructionsProp} from "../types/props/containerProps/InstructionsProp.ts";
import {useStableKeys} from "../utils/stableKeys.ts";
import ArrayTextArea from "../components/ArrayTextArea.tsx";
import ImagePicker from "../components/ImagePicker.tsx";
import type {DispatchFunction, DispatchFunctionEventless} from "../reducer/DispatchFunction.ts";
import {ActionType} from "../enums/ActionType.ts";
import {Paths} from "../enums/Paths.ts";
import  {type ChangeEvent} from "react";

export default function Instructions({instructions,dispatch}:InstructionsProp) {

   const keys = useStableKeys(instructions.length);

   const addItem = (index:number):DispatchFunctionEventless=>()=>
   {
      dispatch(
          {
              type:ActionType.addedInstruction,
              index:index
          }
      )
   }
   const removeItem = (index:number):DispatchFunctionEventless=>()=>
   {
       if(instructions.length>1) {
           dispatch(
               {
                   type: ActionType.removedInstruction,
                   index: index
               }
           )
       }
   }
   const textDispatchFunction =(index:number)=> (event:ChangeEvent<HTMLTextAreaElement>):void =>
   {
       dispatch(
           {
               type:ActionType.editedInstruction,
               newValue:event.target.value,
               index:index
           }
       )
   }
    const imagePickerDispatchFunction =(index:number):DispatchFunction<HTMLInputElement> =>(event) =>
    {
        const file=event.target.files?.[0]
        if(file) {
            dispatch(
                {
                    type:ActionType.editedInstructionImage,
                    localPath:URL.createObjectURL(file),
                    file:file,
                    index:index

                }
            )
        }
        else{
            console.log("error when picking image")
        }
    }
    const imagePickerDeleteFunction = (index:number):DispatchFunctionEventless =>()=>
    {
        dispatch(
            {
                type:ActionType.editedInstructionImage,
                index:index,
                localPath:Paths.headerImage
            }
        )
        console.log("deleted image")
    }


    return(
        <div>
            {
                instructions.map((instruction,index)=>{
                    return(
                        <div key={keys.get(index)}>
                            <div>{index+1}</div>
                            <ArrayTextArea value={instruction.value} placeholder={"Tell me what to do"} textDispatchFunction={textDispatchFunction(index)} addItem={addItem(index)} removeItem={removeItem(index)}/>
                            <ImagePicker image={instruction.image} dispatchFunctionAddImage={imagePickerDispatchFunction(index)} dispatchFunctionDeleteImage={imagePickerDeleteFunction(index)} showPlaceholder={false}/>
                        </div>
                    )
                })
            }
        </div>
    )

}