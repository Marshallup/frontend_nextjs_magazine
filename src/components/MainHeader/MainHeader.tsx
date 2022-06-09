import React, { FC } from "react";
import { AppBar, Button } from '@mui/material';
import { HeaderSubBar, HeaderSubBarContainer, HeaderToolbar, HeaderSearchInput } from "./styles";
import { Menu } from "@mui/icons-material";
import { CustomContainer } from "styles/GeneralComponents";
import LogoIcon from "components/Icons/LogoIcon";
import UserBar from "components/UserBar";

const MainHeader: FC = () => {
    return (
        <div>
            <CustomContainer>
                <AppBar position="static">
                    <HeaderToolbar>
                        <Button>
                            <LogoIcon />
                        </Button>
                        <HeaderSearchInput />
                        <UserBar />
                    </HeaderToolbar>
                </AppBar>
            </CustomContainer>
            <HeaderSubBarContainer>
                <HeaderSubBar>
                    <Button
                        startIcon={<Menu />}
                        variant="contained"
                    >
                        Каталог
                    </Button>
                </HeaderSubBar>
            </HeaderSubBarContainer>
        </div>
    )
}

export default MainHeader;