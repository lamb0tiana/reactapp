/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import React from "react";
import Product from "./product";

const Products = () => {

    return        <div className="well well-small">
        <h3>New Products </h3>
        <hr className="soften"/>
        <div className="row-fluid">
            <div id="newProductCar" className="carousel slide">
                <div className="carousel-inner">
                    <div className="item active">
                        <ul className="thumbnails">
                            <li className="span3">
                                <Product isNewProduct={true}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="left carousel-control" href="#newProductCar"
                   data-slide="prev">&lsaquo;</a>
                <a className="right carousel-control" href="#newProductCar"
                   data-slide="next">&rsaquo;</a>
            </div>
        </div>
        <div className="row-fluid">
            <ul className="thumbnails">
                <li className="span4">
                    <Product/>
                </li>
            </ul>
        </div>
    </div>
}

export default Products