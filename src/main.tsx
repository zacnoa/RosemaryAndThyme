
import ReactDom, {type Root} from "react-dom/client";
import {RecipeEditor} from "./pages/RecipeEditor.tsx";
import React from "react";
import "./index.css";


/**
 * Root element of the app
 */
const  rootElement:HTMLDivElement | null=document.querySelector<HTMLDivElement>("#app")
if(!rootElement)
{
    throw new Error("root element not found");
}
const root:Root= ReactDom.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <RecipeEditor></RecipeEditor>
    </React.StrictMode>
);