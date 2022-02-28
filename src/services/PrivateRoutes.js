

import {Route,Redirect} from "react-router-dom"
import{isAuthenticate} from"./Auth"

export const PrivateRoutes=({component:Componet,...rest})=>{
    <Route

        {...rest}

        render={props=>isAuthenticate()?(
        
                <Component {...props}/>
            ):(
                <Redirect 
                    to={{pathname:'/',                    
                    state:{...props.location}

                    }}/>
            )
    
    }/>


    
}