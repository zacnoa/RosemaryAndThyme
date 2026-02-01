import {type ChangeEvent} from "react";

/**
 * Represents a function that calls the reducer dispatch function.
 * Should be implemented in the closest parent of the child that wants to change the state.
 * The reducer dispatch function should be passed to the closest parent that implements the {@link DispatchFunction}.
 * Serves to allow parents to dictate the behavior of their children
 *
 *
 *
 */
export type DispatchFunction<T extends HTMLElement> = (event: ChangeEvent<T>) => void

export type DispatchFunctionEventless = () => void;
