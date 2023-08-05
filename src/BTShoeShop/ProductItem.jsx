import React from 'react'

const ProductItem = (props) => {
    const { product, handleProductDetail, handleCarts } = props
    return (
        <div className="col-3 mt-3">
            <div className="card">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <p className="fw-bold">{product.name}</p>
                    <p className="mt-3">{product.price}$</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                handleCarts(product)
                            }}
                        >
                            Add To Cart
                        </button>
                        <button
                            className="btn btn-info text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                                handleProductDetail(product)
                            }}
                        >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
