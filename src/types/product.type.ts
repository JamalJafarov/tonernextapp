export interface ProductType{
    id:number,
    name:string, 
    price:number,
    description?:string,
    photos?:string[],
    thumbnailUrl:string,
    discountPrice?:number,
    rating?:number,
    isHotSeller?:boolean,

}