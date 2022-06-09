import React, { FC } from "react";
import { Toolbar } from "@mui/material";
import { FooterToolBar } from "./styles";
import { CustomContainer } from "styles/GeneralComponents";

const MainFooter: FC = () => {
    return (
        <CustomContainer>
            <Toolbar>
                footer
            </Toolbar>
        </CustomContainer>
    )
}

export default MainFooter;