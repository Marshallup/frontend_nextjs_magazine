import { Collapse, TextField, ToggleButton, Typography } from "@mui/material";
import React, { FC, PropsWithChildren, useMemo, useState } from "react";
import {
    ExpandMore,
    StyledBtnGroup,
    FilteItemTitleWrapper,
    FilterPanelContent,
    FilterItemContent,
    SliderStyled,
    InputSlider,
    SliderStyledContent,
    SliderStyledWrapper,
    SliderStyledSeparator,
    FilterItemBody,
} from "./styles";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { FilterItemProps, FilterSliderProps } from "./interfaces";

const FilterSlider: FC<FilterSliderProps> = ({ prices }) => {
    const [ values, setValues ] = useState(prices);

    function handleChange(event: Event, valuesSlider: number[] | number) {
        setValues(valuesSlider as number[]);
    }

    return (
        <div>
            <SliderStyledContent>
                <InputSlider
                    variant="outlined"
                    size="small"
                    value={values[0]}
                />
                <SliderStyledSeparator />
                <InputSlider
                    variant="outlined"
                    size="small"
                    value={values[1]}
                />
            </SliderStyledContent>

            <SliderStyledWrapper>
                <SliderStyled
                    value={values}
                    onChange={handleChange}
                />
            </SliderStyledWrapper>
        </div>
    )
}
const FilterMultiBtn: FC = () => {
    return (
        <div>
            <StyledBtnGroup color="primary">
                <ToggleButton size="small" value="qweqw">
                    SM
                </ToggleButton>
                <ToggleButton size="small" value="www">
                    XL
                </ToggleButton>
            </StyledBtnGroup>
        </div>
    )
}
const FilterItem: FC<PropsWithChildren<FilterItemProps>> = ({ title, children, type }) => {
    const [expand, setExpand] = useState(true);
    const currentBlock = useMemo(() => {
        switch(type) {
            case 'slider':
                return <FilterSlider prices={[10, 20]} />
            case 'toggleButton':
                return <FilterMultiBtn />
            default:
                return <></>   
        }
    }, [ type ]);

    return (
        <FilterItemContent>
            <FilteItemTitleWrapper>
                <Typography
                    variant="subtitle2"
                    component={'div'}
                >
                    { title }
                </Typography>
                <div>
                    <ExpandMore
                        expanded={expand}
                        onClick={() => setExpand(prevState => !prevState)}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </div>
            </FilteItemTitleWrapper>
            <FilterItemBody>
                <Collapse
                    in={expand}
                    timeout="auto"
                    unmountOnExit
                >
                    <div>
                        { currentBlock }
                    </div>
                </Collapse>
                { children }
            </FilterItemBody>
        </FilterItemContent>
    )
}
const FilterPanel: FC = () => {

    return (
        <FilterPanelContent>
            <FilterItem
                title={'Размер'}
                type={'toggleButton'}
            />
            <FilterItem
                title={'Цена'}
                type={'slider'}
            />
        </FilterPanelContent>
    )
}

export default FilterPanel;