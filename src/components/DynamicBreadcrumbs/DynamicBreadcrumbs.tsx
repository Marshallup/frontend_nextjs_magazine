import React, { FC } from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Wrapper } from "./styles";

const DynamicBreadcrumbs: FC = () => {
    return (
        <Wrapper>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Link component={'span'} underline="hover" color="inherit">
                    Link1
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Link2
                </Link>
            </Breadcrumbs>
        </Wrapper>
    )
}

export default DynamicBreadcrumbs;