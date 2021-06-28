import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import{Actvities, Home, LoginForm, MyRoutines, Routines,  Header, Footer} from './components'

const App = () => {
    return (<Router><div>
                <Header/>
                 <Home/> 
              
                 <Route path='/routines' component={Routines}/>
                 <Route path='/activities' component={Actvities}/>
                
                 <MyRoutines/>
                 
                 <Footer/>
             </div></Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
