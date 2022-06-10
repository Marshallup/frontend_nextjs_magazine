import {  Collapse } from "@mui/material";
import React, { FC, useState } from "react";
import { ExpandMore } from "./styles";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const FilterPanel: FC = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <div>
                filter panel
                <ExpandMore expanded={expand} onClick={() => setExpand(prevState => !prevState)}>
                    <ExpandMoreIcon />
                </ExpandMore>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <div>
                    qweqwe
                </div>
            </Collapse>
        </div>
    )
}

export default FilterPanel;