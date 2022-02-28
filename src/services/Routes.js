import {BrowserRouter,Switch,Route} from "react-router-dom"
import { Home } from "./../pages/home/index"
import { Login } from "./../pages/login/Login"
import Register from "../components/Register/Register"
import{ Sigup} from "../components/Register/Sigup"
import { Products } from "./../pages/home/Products";



export function Routas(){
    return(
        
        <BrowserRouter>
        
            
            <Switch>
                <Route exact path="/sigup" component={Sigup}/>                
                <Route exact path="/register" component={Register}/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/products" component={Products}/>
            </Switch>
        </BrowserRouter>
    )
}