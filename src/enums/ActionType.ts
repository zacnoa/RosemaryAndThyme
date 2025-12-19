/**
 * Represents the different actions that can be performed on the recipe state
 */
export const ActionType={
    editedTitle:"edited_title",
    editedDescription:"edited_description",
    editedHeaderImage:"edited_headerImage"
} as const;
//  as const turns the object into a readonly type and makes it so that all string values are interpreted as string
//  literal type and not strings
