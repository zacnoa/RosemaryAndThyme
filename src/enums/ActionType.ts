/**
 * Represents the different actions that can be performed on the recipe state
 */
export const ActionType={
    editedTextArea:"edited_textArea"
} as const;

/**
 * Type of ActionType to be used as an enum for props that require an ActionType value
 */
export type ActionType=typeof ActionType[keyof typeof ActionType];