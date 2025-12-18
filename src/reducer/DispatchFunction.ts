import {type ChangeEvent} from "react";

/**
 * Represents a function that calls the reducer dispatch function
 * should be implemented in the parent of the component and passed as a prop to the child wants to call the dispatch function
 * serves to allow parents to dictate the behavior of their children
 * @see BaseProp
 *
 */
export type DispatchFunction<T extends HTMLElement>=(event:ChangeEvent<T>)=>void