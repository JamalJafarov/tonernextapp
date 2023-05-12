import React, { useState } from 'react'
import { TabPanel, TabView } from 'primereact/tabview'
import { ProductType } from '@/types/product.type';
import ProductCard from '../product-card/product-card';
const ProductList = () => {

    const proList: ProductType[]=[{
        id:1,
        name: 'iPhone',
        price:2400,
        thumbnailUrl:"qweqwewer.png"
    },{
        id:2,
        name:"Samsung",
        price:2000,
        thumbnailUrl:"qweqwewer.png"
    }]

    return (
        <div className="my-5">
            <div className="mx-auto w-1/2">
                <TabView className="border-none">
                    <TabPanel header="Best Seller">
                        {
                            // proList.map(pro)=>(<ProductCard key={pro.id} product={pro}/>)
                        }
                    </TabPanel>
                    <TabPanel header="Hot Collection">
                        Lorem ipsum dolor sit.
                    </TabPanel>
                    <TabPanel header="Discount Product">
                        Lorem ipsum dolor sit.
                    </TabPanel>
                    <TabPanel header="Best Seller">
                        Lorem ipsum dolor sit.
                    </TabPanel>
                    <TabPanel header="Hot Collection">
                        Lorem ipsum dolor sit.
                    </TabPanel>
                    <TabPanel header="Discount Product">
                        Lorem ipsum dolor sit.
                    </TabPanel>
                </TabView>

            </div>

        </div>
    )
}

export default ProductList