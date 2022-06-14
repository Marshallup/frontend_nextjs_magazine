import { IconButton, Slider, TextField, ToggleButtonGroup, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import styledComponents from "styled-components";
import { ExpandModeProps } from "./interfaces";

export const ExpandMore = styled(({ expanded, ...props }: ExpandModeProps) => {
    return <IconButton { ...props } />
})(( { theme, expanded } ) => ({
    transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));
export const StyledBtnGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    border: '1px solid rgba(0, 0, 0, 0.12) !important',
    borderRadius: '4px !important',
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
      marginLeft: 0,
    }
  }
}));
export const FilteItemTitleWrapper = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const FilterPanelContent = styledComponents.div`
  min-width: 200px;
  max-width: 200px;
  padding: 5px 10px 0 0;
`;
export const FilterItemContent = styledComponents.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const FilterItemBody = styledComponents.div`
  max-width: 180px;
`;
export const SliderStyled = styled(Slider)(({ theme }) => ({

}));
export const SliderStyledWrapper = styledComponents.div`
  margin-top: 15px;
  padding: 0 25px;
`;
export const SliderStyledSeparator = styledComponents.div`
  display: flex;
  align-items: center;
  margin: 0 5px;

  &:before {
    content: '';
    display: block;
    width: 11px;
    height: 2px;
    background-color: grey;
  }
`;
export const InputSlider = styled(TextField)(({ theme }) => ({
  flexBasis: '50%',
}));
export const SliderStyledContent = styledComponents.div`
  display: flex;
`;