import React from "react";

/**
 * Handles the resizing of the textarea
 * @param event of the textarea
 */
export  function autoResizeHeight(event:React.ChangeEvent<HTMLTextAreaElement>): void {
    if(!event) return;
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
}