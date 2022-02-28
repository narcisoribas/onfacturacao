import squanchy from "./../../assects/images/logos/squanchy.jpg"
import me from "./../../assects/images/avatars/me.jpg"




export function Header() {
    return (

        <section className="header-main" style={{background:"#fff"}}>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="brand-wrap">
                                <img className="logo" src={squanchy}/>
                                <h2 className="logo-text">ONsoft</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <form action="#" class="search-wrap">
                                <div className="input-group">
                                    <input type="text" class="form-control" placeholder="Search"/>
                                    <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>{/*End from serach*/}


                        <div className="col-lg-3 col-sm-6">
                        
                            <div className="widgets-wrap d-flex justify-content-end">

                                <div className="widget-header">
                                    <a href="#" className="icontext">
                                        <a href="#" className="btn btn-primary m-btn m-btn--icon m-btn--icon-only">
                                            <i className="fa fa-home"></i>
                                        </a>
                                    </a>
                                </div>


                                    


                                <div className="widget-header dropdown">
                                    <a href="#" className="ml-3 icontext" data-toggle="dropdown" data-offset="20,10">
                                        <img src={me} class="avatar" alt=""/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href=""><i className="fa fa-sign-out-alt"></i> Logout</a>
                                    </div> 
                                </div>
                                                                    
                            </div>
                        
                        
                        </div>



                   </div>
                </div>
           
         </section>

            )
}