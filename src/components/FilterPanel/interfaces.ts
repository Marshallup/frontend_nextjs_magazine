import { IconButtonProps } from "@mui/material";

export type FilterBlockType = 'toggleButton' | 'slider';
export interface ExpandModeProps extends IconButtonProps {
    expanded: boolean,
}
export interface FilterItemProps {
    title: string,
    type: FilterBlockType,
}
export interface FilterSliderProps {
    prices: number[],
}