import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'

function App() {
    return (
        (<Switch>
            <Route exact path="/" component={Airlines}/>
            <Route exact path="/airlines/:slug" component={Airline}/>
        </Switch>)
    )
}

export default App
