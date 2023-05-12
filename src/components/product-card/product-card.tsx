import { ProductType } from '@/types/product.type';
import React from 'react'

type ProductCardType={
    product:ProductType;
}
const ProductCard = (props:ProductType) => {
    const{name,description,photos,price,thumbnailUrl,discountPrice,rating,isHotSeller}=props;
  return (
    <div>{name}</div>
  )
}

export default ProductCard