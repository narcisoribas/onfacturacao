import { Header } from "./../../components/Header/Header";
import { SectionMain } from "./SectionMain";
import{BrowserRouter} from"react-router-dom"
import "./homeStyle.css"
import { ProductRoutes } from "../../services/productsRouts";

export function Home(){
    return(
        <BrowserRouter>
             <Header/>
             <ProductRoutes/>
        </BrowserRouter>
    )
}