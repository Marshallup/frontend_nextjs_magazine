import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import SearchInput from "components/SearchInput";
import styled from "styled-components";

export const HeaderSubBar = styled.div`
    padding: 10px 0;
    width: 100%;
`;
export const HeaderToolbar = styled(Toolbar)`
    justify-content: space-between;
`;
export const HeaderSubBarContainer = styled(Container)`
    background-color: #f5f5f5;
`;
export const HeaderSearchInput = styled(SearchInput)`
    padding: 0 10px;
    flex-grow: 1;
`;