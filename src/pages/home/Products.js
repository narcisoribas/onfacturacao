import img1 from "./../../assects/images/items/1.jpg"
import img2 from "./../../assects/images/items/2.jpg"
import img3 from "./../../assects/images/items/3.jpg"
import img4 from "./../../assects/images/items/4.jpg"
import img5 from "./../../assects/images/items/5.jpg"
import img6 from "./../../assects/images/items/6.jpg"
import img7 from "./../../assects/images/items/7.jpg"

import {useState} from 'react';
import { Header } from "./../../components/Header/Header";
import{Link} from "react-router-dom"
import Button from '@mui/material/Button';


export function Products(){

    let[amout,setAmount]=useState(0)


    function MoreProduct(){
        setAmount(amout+1)
    }

    function lessProduct(){

        if(amout>0) { setAmount(amout-1)}
      
    }


   return(
       
       
       <section className="section-content padding-y-sm bg-default">
            <div className="container-fluid">
                <div className="row">
                
                    <div className="col-md-12 card padding-y-sm card">

                            <ul className="nav bg radius nav-pills nav-fill mb-3 bg" role="tablist">  
                                                      
                                <li className="nav-item">
                                <a className="nav-link active show" data-toggle="pill" href="#nav-tab-card">
                                <i className="fa fa-tags"></i> All</a></li>
                                <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                                <i className="fa fa-tags "></i>  Category 1</a></li>
                                <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                <i className="fa fa-tags "></i>  Category 2</a></li>
                                <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                <i className="fa fa-tags "></i>  Category 3</a></li>
                                <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                <i className="fa fa-tags "></i>  Category 4</a></li>
                                <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                <i className="fa fa-tags "></i>  Category 5</a></li>
                            
                            </ul>
                            <span   id="items"/>

                            <div className="row">

                                    <div className="col-md-3">
                                        <figure className="card card-product">

                                                <span className="badge-new"> NEW </span>
                                                <div className="img-wrap"> 
                                                    <img src={img3}/>
                                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                                </div>
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title">Good item name</a>
                                                    <div className="action-wrap">
                                                        <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                        <div className="price-wrap h5">
                                                            <span className="price-new">$1280</span>
                                                        </div>
                                                    </div> 
                                                </figcaption>
                                        </figure>
                                    </div>{/**first product line end*/}


                                    <div className="col-md-3">
                                        <figure className="card card-product">
                                            <span className="badge-new"> NEW </span>
                                            <div className="img-wrap"> <img src={img4}/>
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title">The name of product</a>
                                                <div className="action-wrap">
                                                    <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                    <div className="price-wrap h5">
                                                        <span className="price-new">$280</span>
                                                    </div> 
                                                </div> 
                                            </figcaption>
                                        </figure> 
                                    </div> {/**SECUND PRODUCT LINE END*/}


                                    <div className="col-md-3">
                                        <figure className="card card-product">
                                            <span className="badge-new"> NEW </span>
                                            <div className="img-wrap"> <img src={img5}/>
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title">Name of product</a>
                                                <div className="action-wrap">
                                                    <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                    <div className="price-wrap h5">
                                                        <span className="price-new">$280</span>
                                                        <del className="price-old">$1980</del>
                                                    </div> 
                                                </div> 
                                            </figcaption>
                                        </figure> 
                                    </div>



                                    <div className="col-md-3">
                                        <figure className="card card-product">
                                            <span className="badge-new"> NEW </span>
                                            <div className="img-wrap"> <img src={img6}/>
                                                <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title">The name of product</a>
                                                <div className="action-wrap">
                                                    <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                    <div className="price-wrap h5">
                                                        <span className="price-new">$280</span>
                                                    </div> 
                                                </div> 
                                            </figcaption>
                                        </figure> 
                                    </div> 
                            </div>{/*End of the first row*/}



                            <div className="row">{/*secund row start*/}

                                <div className="col-md-3">
                                    <figure className="card card-product">

                                            <span className="badge-new"> NEW </span>
                                            <div className="img-wrap"> 
                                                <img src={img1}/>
                                                <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title">Good item name</a>
                                                <div className="action-wrap">
                                                    <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                    <div className="price-wrap h5">
                                                        <span className="price-new">$1280</span>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                    </figure>
                                </div>{/**first product od secund row line end*/}


                                <div className="col-md-3">
                                    <figure className="card card-product">
                                        <span className="badge-new"> NEW </span>
                                        <div className="img-wrap"> <img src={img2}/>
                                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title">The name of product</a>
                                            <div className="action-wrap">
                                                <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                                <div className="price-wrap h5">
                                                    <span className="price-new">$280</span>
                                                </div> 
                                            </div> 
                                        </figcaption>
                                    </figure> 
                                </div> {/**SECUND PRODUCT LINE END*/}


                            <div className="col-md-3">
                                <figure className="card card-product">
                                    <span className="badge-new"> NEW </span>
                                    <div className="img-wrap"> <img src={img6}/>
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption className="info-wrap">
                                        <a href="#" className="title">Name of product</a>
                                        <div className="action-wrap">
                                            <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                            <div className="price-wrap h5">
                                                <span className="price-new">$280</span>
                                                <del className="price-old">$1980</del>
                                            </div> 
                                        </div> 
                                    </figcaption>
                                </figure> 
                            </div>


                            <div className="col-md-3">
                                <figure className="card card-product">
                                    <span className="badge-new"> NEW </span>
                                    <div className="img-wrap"> <img src={img7}/>
                                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption className="info-wrap">
                                        <a href="#" className="title">The name of product</a>
                                        <div className="action-wrap">
                                            <a href="#" className="btn btn-primary btn-sm float-right"> <i className="fa fa-cart-plus"></i> Add </a>
                                            <div className="price-wrap h5">
                                                <span className="price-new">$280</span>
                                            </div> 
                                        </div> 
                                    </figcaption>
                                </figure> 
                            </div> 
                            </div>{/*End of the secund row*/}

                    </div>

                
                    
                
                </div>{/*END FIRST ROW*/}


                
            </div>{/*End of first div*/}

                <Link className="btn btn-primary col-12 p-3"
                to="/productSelecteds">Concluir</Link>
            
        </section>
        
   )
}