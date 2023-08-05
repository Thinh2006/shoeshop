//rafce
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    console.log('props: ', props)
    const { prdList, handleProductDetail} = props
    return (
        <div className="row">
            {prdList.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    handleProductDetail={handleProductDetail}
                />
            ))}
        </div>
    )
}

export default ProductList
