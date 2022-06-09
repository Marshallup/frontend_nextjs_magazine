import React, { FC } from 'react';
import { AccountBox, ShoppingCart, Favorite, Login } from '@mui/icons-material';
import { UserButton } from './styles';

const UserBar: FC = () => {
    return (
        <div>
            <UserButton>
                <AccountBox />
            </UserButton>
            <UserButton>
                <ShoppingCart />
            </UserButton>
            <UserButton>
                <Favorite />
            </UserButton>
        </div>
    )
}

export default UserBar;