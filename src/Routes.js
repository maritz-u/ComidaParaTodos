import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeSumate from './Views/Sumate/HomeSumate';
import Home from './Views/Home/Home';
import SumateHuertos from '../src/Views/Sumate/SumateHuertos'

const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path='/sumate' component={HomeSumate} />
                <Route path='/Huertos' component={SumateHuertos} />
                <Route path='/' component={Home} />

            </Switch>
        </BrowserRouter>

    )
}

export default Routes;