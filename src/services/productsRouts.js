import{BrowserRouter,Route,Switch} from "react-router-dom"
import { Products } from "./../pages/home/Products";
import { SectionMain } from "./../pages/home/SectionMain";

export function ProductRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exat path="/home" component={Products}/>
                <Route exat path="/productSelecteds" component={SectionMain}/>
            </Switch>
        </BrowserRouter>
    )
}