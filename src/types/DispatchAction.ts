/**
 * represents dispatch actions to be passed to the reducer
 */
export type DispatchAction=
    |{type:"edited_textArea"; newValue:string};