/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import React from "react";

const Sidebar = () => {
        return <div id="sidebar" className="span3">
                    <div className="well well-small">
                        <ul className="nav nav-list">
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Fashion</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Watches</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Fine Jewelry</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Fashion Jewelry</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Engagement & Wedding</a>
                            </li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Men's Jewelry</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Vintage & Antique</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Loose Diamonds </a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>Loose Beads</a></li>
                            <li><a href="products.html"><span className="icon-chevron-right"></span>See All Jewelry &
                                Watches</a></li>
                            <li style={{'border': 0}}> &nbsp;</li>
                            <li><a className="totalInCart" href="cart.html"><strong>Total Amount <span
                                className="badge badge-warning pull-right" style={{lineHeight:'18px'}}>$448.42</span></strong></a>
                            </li>
                        </ul>
                    </div>
            </div>

}

export default Sidebar;