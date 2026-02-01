import {AutoResizableTextArea} from "../components/AutoResizableTextArea.tsx";
import type {TitleDescriptionProp} from "../types/props/containerProps/TitleDescriptionProp.ts";
import type {DispatchFunction, DispatchFunctionEventless} from "../reducer/DispatchFunction.ts";
import {ActionType} from "../enums/ActionType.ts";
import type {ChangeEvent} from "react";
import ImagePicker from "../components/ImagePicker.tsx";
import {Paths} from "../enums/Paths.ts";


/**
 *  Container component that represents the title and description of a recipe
 * @param title of the recipe
 * @param description of the recipe
 * @param image header image of the recipe
 * @param dispatch dispatch function provided by the reducer
 *
 */

export function TitleDescription({title,description,image,dispatch}: Readonly<TitleDescriptionProp>) {


    const titleDispatchFunction: DispatchFunction<HTMLTextAreaElement> = (event: ChangeEvent<HTMLTextAreaElement>) =>
    {
        dispatch(
            {
                type:ActionType.editedTitle,
                newValue:event.target.value
            }
        )
    };
    const descriptionDispatchFunction: DispatchFunction<HTMLTextAreaElement> = (event:ChangeEvent<HTMLTextAreaElement>) =>
    {
        dispatch(
            {
                type:ActionType.editedDescription,
                newValue:event.target.value
            }
        )
    };
    const imagePickerDispatchFunction:DispatchFunction<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>) =>
    {
        const file=event.target.files?.[0]
        if(file) {
            dispatch(
                {
                    type:ActionType.editedHeaderImage,
                    localPath:URL.createObjectURL(file),
                    file:file
                }
            )
        }
        else{
            console.log("error when picking image")
        }
    }
    const imagePickerDeleteFunction:DispatchFunctionEventless = () =>
    {
        dispatch(
            {
                type:ActionType.editedHeaderImage,
                localPath:Paths.headerImage
            }
        )
        console.log("deleted image")
    }

    return (
        <div>
            <div>
                <AutoResizableTextArea value={title} placeholder={"Title..."} textDispatchFunction={titleDispatchFunction}></AutoResizableTextArea>
                <AutoResizableTextArea value={description} placeholder={"Description..."} textDispatchFunction={descriptionDispatchFunction}></AutoResizableTextArea>
            </div>
            <div>
            <ImagePicker image={image} dispatchFunctionAddImage={imagePickerDispatchFunction} dispatchFunctionDeleteImage={imagePickerDeleteFunction} showPlaceholder={true}></ImagePicker>
            </div>
        </div>
    )
}