import React, { useState } from 'react'
import prdList from './data.json'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

const BTShoeShop = () => {
    console.log({ prdList })
    const [productDetail, setProductDetail] = useState(prdList[0])

    const handleProductDetail = (product) => {
        setProductDetail(product)
    }

    return (
        <div className="container mt-5">
            
            <h1>Shoe Shop</h1>

            <ProductList
                prdList={prdList}
                handleProductDetail={handleProductDetail}
            />

            <ProductDetail productDetail={productDetail} />

        </div>
    )
}

export default BTShoeShop
