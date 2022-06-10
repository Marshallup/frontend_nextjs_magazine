import React, { FC, PropsWithChildren } from "react";
import { Container } from '@mui/material';
import { MainLayoutWrapper, MainBody } from "./styles";
import MainFooter from "components/MainFooter";
import MainHeader from "components/MainHeader";
import DynamicBreadcrumbs from "components/DynamicBreadcrumbs";

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <MainHeader />
            <MainBody>
                <Container>
                    <DynamicBreadcrumbs />
                    { children }
                </Container>
            </MainBody>
            <MainFooter />
        </MainLayoutWrapper>
    )
}

export default MainLayout;