import type {ImagePickerProp} from "../types/props/ImagePickerProp.ts";
import type {CloudinaryImage} from "../types/CloudinaryImage.ts";
import type {LocalImage} from "../types/LocalImage.ts";
import type {ChangeEvent} from "react";
import {Paths} from "../enums/Paths.ts";


/**
 * Component that allows the user to pick an image from their local device
 * @param image header image
 * @param dispatchFunction dispatch function to be called when the image changes
 * @constructor
 */
export function ImagePicker({image,dispatchFunction}: Readonly<ImagePickerProp>)
{


    const correctImageUrl= (image:CloudinaryImage | LocalImage):string=>
    {
        if("cloudinaryUrl" in image)
        {
            return image.cloudinaryUrl;
        }
        else if("localPath" in image)
        {
            return image.localPath;
        }

        return Paths.headerImage;
    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>):void =>
    {
        dispatchFunction(event);
    }



    return(
        <div>
            <img src={correctImageUrl(image)} alt="Header"></img>
            <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleChange} />
        </div>
    )
}