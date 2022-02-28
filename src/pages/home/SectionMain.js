import img1 from "./../../assects/images/items/1.jpg"
import img2 from "./../../assects/images/items/2.jpg"
import img3 from "./../../assects/images/items/3.jpg"
import img4 from "./../../assects/images/items/4.jpg"
import img5 from "./../../assects/images/items/5.jpg"
import img6 from "./../../assects/images/items/6.jpg"
import img7 from "./../../assects/images/items/7.jpg"

import {useState} from 'react';



export function SectionMain(){

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
                
                    <div className="col-md-8 card padding-y-sm card">

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

                
                    <div className="col-md-4">{/*products selecteds*/}               
                        <div className="card">
                            <span id="cart">

                            <table className="table table-hover shopping-cart-wrap">                            
                                    <thead className="text-muted">
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col" width="120">Qty</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-right" width="200">Delete</th>
                                        </tr>
                                    </thead>



                                    <tbody>

                                        <tr>
                                            <td>
                                                <figure className="media">
                                                    <div className="img-wrap"><img src={img1} className="img-thumbnail img-xs"/></div>
                                                    <figcaption className="media-body">
                                                        <h6 className="title text-truncate">Product name </h6>
                                                    </figcaption>
                                                </figure> 
                                            </td>

                                            <td className="text-center"> 
                                                <div className="m-btn-group m-btn-group--pill btn-group mr-2" role="group" aria-label="...">
                                                    <button type="button" className="m-btn btn btn-default" onClick={lessProduct}><i className="fa fa-minus"></i></button>
                                                    <button type="button" className="m-btn btn btn-default" disabled>{amout}</button>
                                                    <button type="button" className="m-btn btn btn-default" onClick={MoreProduct}><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>

                                            <td> 
                                                <div className="price-wrap"> 
                                                    <var className="price">$145</var> 
                                                </div> 
                                            </td>

                                            <td className="text-right"> 
                                            <a href="" className="btn btn-outline-danger"> <i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <figure className="media">
                                                    <div className="img-wrap"><img src={img5} className="img-thumbnail img-xs"/></div>
                                                    <figcaption className="media-body">
                                                        <h6 className="title text-truncate">Product name  </h6>
                                                    </figcaption>
                                                </figure> 
                                            </td>
                                            <td className="text-center"> 
                                                <div className="m-btn-group m-btn-group--pill btn-group mr-2" role="group" aria-label="...">

                                                    <button type="button" className="m-btn btn btn-default" onClick={lessProduct}><i className="fa fa-minus"></i></button>

                                                    <button type="button" className="m-btn btn btn-default" disabled>{amout}</button>

                                                    <button type="button" className="m-btn btn btn-default" onClick={MoreProduct}><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td> 
                                                <div className="price-wrap"> 
                                                    <var className="price">$35</var> 
                                                </div> 
                                            </td>
                                            <td className="text-right"> 
                                            <a href="" className="btn btn-outline-danger btn-round"> <i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>   
                                    </tbody>                                  
                                                       
                            </table>                            
                            </span> 
                        </div>  {/*Div card*/}       


                        <div className="box">

                                <dl className="dlist-align">
                                     <dt>Tax: </dt>
                                     <dd className="text-right">12%</dd>
                                </dl>

                                <dl className="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd className="text-right"><a href="#">0%</a></dd>
                                </dl>

                                <dl className="dlist-align">
                                    <dt>Sub Total:</dt>
                                    <dd className="text-right">$215</dd>
                                </dl>
                                
                                <dl className="dlist-align">
                                    <dt>Total: </dt>
                                    <dd className="text-right h4 b"> $215 </dd>
                                </dl>


                                <div className="row">
                                    <div className="col-md-6">
                                        <a href="#" className="btn  btn-default btn-danger btn-lg btn-block"><i className="fa fa-times-circle "></i> Cancel </a>
                                    </div>
                                    <div className="col-md-6" >
                                        <a href="#" className="btn  btn-primary btn-lg btn-block" ><i className="fa fa-shopping-bag"></i> Charge </a>
                                    </div>
                                </div>


                        </div>


                    </div>
                
                </div>{/*END FIRST ROW*/}
            </div>{/*End of first div*/}


            
        </section>
   )
}