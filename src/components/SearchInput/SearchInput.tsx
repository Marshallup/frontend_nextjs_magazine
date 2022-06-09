import React, { forwardRef, FC } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from '@mui/icons-material';
import { Input, InputWrapper } from './styles';

const SearchInput = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div { ...props } ref={ref}>
            <Paper component="form">
                <InputWrapper>
                    <Input
                        placeholder="Поиск по товарам"
                    />
                    <IconButton>
                        <Search />
                    </IconButton>
                </InputWrapper>
            </Paper>
        </div>
    )
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;