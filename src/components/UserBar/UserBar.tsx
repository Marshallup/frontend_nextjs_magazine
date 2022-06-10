import React, { FC } from 'react';
import { AccountBox, ShoppingCart, Favorite, Login } from '@mui/icons-material';
import { UserButton } from './styles';
import { Badge } from '@mui/material';

const UserBar: FC = () => {
    return (
        <div>
            <UserButton>
                <AccountBox />
            </UserButton>
            <UserButton>
                <Badge badgeContent={3} color={'error'}>
                    <ShoppingCart />
                </Badge>
            </UserButton>
            <UserButton>
                <Badge badgeContent={1} color={'error'}>
                    <Favorite />
                </Badge>
            </UserButton>
        </div>
    )
}

export default UserBar;