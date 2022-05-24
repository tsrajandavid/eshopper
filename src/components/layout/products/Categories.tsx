import React, { useState } from 'react'

export default function Categories(getAllProducts: any) {
    const [productsList, setProductsList] = useState(getAllProducts.getAllProducts)
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">

                    {
                        productsList &&
                        productsList.map((item: any, index: number) => (
                            <div className="col-lg-4 col-md-6 pb-1">
                                <div className="cat-item d-flex flex-column border mb-4 p-5">
                                    <p className="text-right">{item.title}</p>
                                    <span className="cat-img position-relative overflow-hidden mb-3">
                                        <img className="img-fluid" src={item.image} alt="" />
                                    </span>
                                    <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
