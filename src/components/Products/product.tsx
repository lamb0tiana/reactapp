/**
 * @author("tiana.randrianarivony@gmail.com")
 */

import React from "react";
type iProduct = {
    isNewProduct? : boolean
}
const Product = ({ isNewProduct} : iProduct) => {

    const template = isNewProduct ? <>
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
            <a href="#" className="tag"></a>
            <a href="product_details.html"><img src="assets/img/s.png" alt="" /></a>
                                        </>
        :
        <>
            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
            <a href="product_details.html"><img src="assets/img/b.jpg" alt=""/></a>
            <div className="caption cntr">
                <p>Manicure & Pedicure</p>
                <p><strong> $22.00</strong></p>
                <h4><a className="shopBtn" href="#" title="add to cart"> Add to cart </a></h4>
                <div className="actionList">
                    <a className="pull-left" href="#">Add to Wish List </a>
                    <a className="pull-left" href="#"> Add to Compare </a>
                </div>
                <br className="clr" />
            </div>
        </>

    return <div className="thumbnail">{template}</div>
}

export default Product;