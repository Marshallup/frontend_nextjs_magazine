import React, {
    useMemo,
    FC,
    PropsWithChildren,
    useState,
    MouseEvent as ReactMouseEvent,
} from "react";
import {
    ToggleButton,
    ToggleButtonGroup,
    Grid,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import { ViewComfy, ViewColumn } from "@mui/icons-material";
import GoodsItem from "components/GoodsItem";
import {
    ControlForm,
    GoodsListWrapper,
    GoodsListHeaderWrapper,
} from "./styles";
import {
    GoodsFilterProps,
    GoodsGridVariantsProps,
    GoodsGridVariantsType,
    GoodsListHeaderProps,
} from "./interfaces";

const GoodsFilter = <T extends unknown>({ value, label }: Omit<PropsWithChildren<GoodsFilterProps<T>>, 'children'>) => {
    return (
        <ControlForm size="small">
            { label && <InputLabel id="demo-simple-select-label">{ label }</InputLabel> }
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                value={value}
            >
                <MenuItem value="ццц">
                    qwe
                </MenuItem>
            </Select>
        </ControlForm>
    )
}
const GoodsGridVariants: FC<GoodsGridVariantsProps> = ({ activeType, types, onChange }) => {
    function handlerOnChange(event: ReactMouseEvent<HTMLElement, MouseEvent>, value: string) {
        onChange(value);
    }

    return (
        <ToggleButtonGroup
            value={activeType}
            exclusive
            onChange={handlerOnChange}
        >
            { types.map(type => (
                <ToggleButton
                    key={type.type}
                    value={type.type}
                >
                    { type.icon }
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}
const GoodsListHeader: FC<PropsWithChildren<GoodsListHeaderProps>> = ({ children }) => {
    return (
        <GoodsListHeaderWrapper>
            <Grid
                container
                display={'flex'}
                justifyContent="space-between"
                alignItems={'center'}
            >
                { children }
            </Grid>
        </GoodsListHeaderWrapper>
    )
}

const GoodsList: FC = () => {
    const [typesView, setTypesView] = useState<GoodsGridVariantsType[]>([
        {
            type: 'grid',
            icon: <ViewComfy />,
        },
        {
            type: 'column',
            icon: <ViewColumn />,
        }
    ]);
    const [ activeType, setActiveType ] = useState('grid');

    function onChangeTypesView(value: string) {
        setActiveType(value);
    }


    return (
        <GoodsListWrapper>
            <GoodsListHeader>
                <Grid item>
                    <GoodsFilter
                        label="Сортировать по"
                        value={''}
                    />
                </Grid>

                <Grid item>
                    <GoodsGridVariants
                        activeType={activeType}
                        types={typesView}
                        onChange={onChangeTypesView}
                    />
                </Grid>
            </GoodsListHeader>
            <Grid spacing={2} container>
                <Grid xs={activeType === 'grid' ? 4 : 6} item>
                    <GoodsItem />
                </Grid>
                <Grid xs={activeType === 'grid' ? 4 : 6} item>
                    <GoodsItem isInFavorites={true} />
                </Grid>
                <Grid xs={activeType === 'grid' ? 4 : 6} item>
                    <GoodsItem />
                </Grid>
                <Grid xs={activeType === 'grid' ? 4 : 6} item>
                    <GoodsItem />
                </Grid>
            </Grid>
        </GoodsListWrapper>
    )
}

export default GoodsList;