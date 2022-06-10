import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ExpandModeProps } from "./interfaces";

export const ExpandMore = styled(({ expanded, ...props }: ExpandModeProps) => {
    return <IconButton { ...props } />
})(( { theme, expanded } ) => ({
    transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}))