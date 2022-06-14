import { Link } from "@mui/material";
import styled from "styled-components";
import { styled as MUIStyled } from "@mui/system";
import { CardMediaControlProps } from "./interfaces";

export const PriceWrapper = styled.div`
    margin-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
    margin-top: 15px;
`;
export const CardMediaWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;
export const CardMediaControlds = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: columns;
    transform: translateX(101%);
    transition: transform .3s ease;

    &.show {
        transform: translateX(0);
    }
`;
export const CardMediaControl = styled.div<CardMediaControlProps>`
    color: ${({ $isInFavorites }) => $isInFavorites ? '#ff1744' : 'white'};
`;
export const CardMediaLink = MUIStyled(Link)(() => ({
    textDecoration: 'none',
    transition: 'color .3s ease',
    '&:hover': {
        color: '#1976d2',
        textDecoration: 'underline',
    }
}));