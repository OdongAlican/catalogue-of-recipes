import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import RecipeDetails from './RecipeDetails'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } exact/>
                <Route path="/recipe/:id" component={ RecipeDetails }/>
            </Switch> 
        </BrowserRouter>
    )
}

export default Router 