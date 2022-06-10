import React, { forwardRef, FC } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from '@mui/icons-material';
import { Input, InputWrapper } from './styles';
import { useForm } from "react-hook-form";
import { SearchForm } from "./interfaces";

const SearchInput = forwardRef<HTMLDivElement>((props, ref) => {
    const { register, handleSubmit } = useForm<SearchForm>();
    const onSubmit = (data: SearchForm) => console.log(data);

    return (
        <div { ...props } ref={ref}>
            <Paper component="form" onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper>
                    <Input
                        { ...register('search', { required: true }) }
                        placeholder="Поиск по товарам"
                    />
                    <IconButton type="submit">
                        <Search />
                    </IconButton>
                </InputWrapper>
            </Paper>
        </div>
    )
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;