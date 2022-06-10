import { MouseEvent as ReactMouseEvent } from "react";

export type TypeView = 'grid' | 'column';
export type GoodsGridVariantsType = {
    type: TypeView,
    icon: JSX.Element,
}
export interface GoodsFilterProps<V> {
    value: V,
    label?: string,
}
export interface GoodsListHeaderProps {}
export interface GoodsGridVariantsProps {
    activeType: string,
    types: GoodsGridVariantsType[],
    onChange: (value: string) => void,
}