/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import React from "react";
import MainSlider from "./MainSlider";
import Products from "../Products";
const Content = () => {
    return <div className="span9">
                <div className="well np">
                    <MainSlider/>
                </div>
                <Products/>
            </div>
}

export default Content;