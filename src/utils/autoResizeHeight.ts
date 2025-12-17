import React from "react";

/**
 * Calculates the height of the textarea based on its scroll height and changes the corresponding textarea height
 * @param event of the textarea
 */
export  function autoResizeHeight(event:React.ChangeEvent<HTMLTextAreaElement>): void {
    if(!event) return;
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
}