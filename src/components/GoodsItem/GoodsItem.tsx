import React, { FC, useState } from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { GoodsItemProps } from "./interfaces";
import {
    PriceWrapper,
    ButtonWrapper,
    CardMediaWrapper,
    CardMediaControlds,
    CardMediaControl,
    CardMediaLink
} from './styles';
import { Favorite } from "@mui/icons-material";

const GoodsItem: FC<GoodsItemProps> = ({ isInCart, isInFavorites }) => {
    const [ isShowControlls, setIsShowControlls ] = useState(false);

    function showControlls() {
        setIsShowControlls(true);
    }
    function hideControlls() {
        setIsShowControlls(false);
    }

    return (
        <Card>
            <CardMediaWrapper
                onMouseEnter={showControlls}
                onMouseLeave={hideControlls}
            >
                <CardMediaControlds className={isShowControlls ? 'show' : ''}>
                    <IconButton size='small'>
                        <CardMediaControl $isInFavorites={isInFavorites}>
                            <Favorite />
                        </CardMediaControl>
                    </IconButton>
                </CardMediaControlds>
                <CardMedia
                    component="img"
                    height="140"
                    image="/1.jpg"
                    alt="green iguana"
                />
            </CardMediaWrapper>
            <CardContent>
                <PriceWrapper>
                    <Typography
                        variant="subtitle1"
                        component="div"
                    >
                        123123 ₽
                    </Typography>
                </PriceWrapper>
                <div>
                    <Link href="/goodspage" passHref>
                        <CardMediaLink
                            variant="subtitle2"
                            color="inherit"
                        >
                            Заголовок товара
                        </CardMediaLink>
                    </Link>
                </div>
                <ButtonWrapper>
                    <Button 
                        variant={'contained'}
                        fullWidth
                    >
                        В корзину
                    </Button>
                </ButtonWrapper>
            </CardContent>
        </Card>
    )
}

export default GoodsItem;