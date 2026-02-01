import type {ImagePickerProp} from "../types/props/ImagePickerProp.ts";
import type {CloudinaryImage} from "../entity/CloudinaryImage.ts";
import type {LocalImage} from "../entity/LocalImage.ts";
import {type ChangeEvent, useState} from "react";
import {Paths} from "../enums/Paths.ts";
import {useStableKeys} from "../utils/stableKeys.ts";


/**
 * Component that allows the user to pick an image from their local device
 * @param image header image
 * @param dispatchFunction dispatch function to be called when the image changes
 * @constructor
 */
export default function ImagePicker({image,dispatchFunctionAddImage,dispatchFunctionDeleteImage,showPlaceholder}: Readonly<ImagePickerProp>)
{



    const keys = useStableKeys(1);
    const [addedImageFlag, setAddedImageFlag] = useState(false);
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
    const placeHolderHandle = () => {
        if (!showPlaceholder && !addedImageFlag) {
            return { width: 0, height: 0, display: "inline-block" };
        }
        return { maxHeight: "500px", maxWidth:"500px", border:"1px solid black" };
    };


    const handleChange=(event:ChangeEvent<HTMLInputElement>):void =>
    {
        setAddedImageFlag(true);
        console.log(addedImageFlag.toString())
        dispatchFunctionAddImage(event);
    }
    const handleDeleteImage=()=>
    {
        setAddedImageFlag(false);
        dispatchFunctionDeleteImage();
    }



    return(
        <div>
            <img style={placeHolderHandle()} src={correctImageUrl(image)} ></img>
            <label style={{border:"1px solid black"}} htmlFor={keys.get(0)}>{addedImageFlag ? "Change Picture" : "Add Picture"}</label>
            <button onClick={handleDeleteImage}>Delete Picture</button>
            <input style={{display: "none"}} type="file" accept="image/jpeg, image/png, image/jpg" id={keys.get(0)} onChange={handleChange} />
        </div>
    )
}