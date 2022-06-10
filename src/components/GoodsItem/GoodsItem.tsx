import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";
import { GoodsItemProps } from "./interfaces";

const GoodsItem: FC<GoodsItemProps> = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="/1.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    Title
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GoodsItem;