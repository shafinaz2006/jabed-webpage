import React from 'react';
import './Main.scss';

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Teaching from './Teaching';
import Committee from './Committee';
import Publications from './Publications';
import Awards from './Awards';
import Talks from './Talks';

function Main(){
    return(
        <section className='pageContent'>
            <Home />
            <HashRouter>
                <Switch>
                    <Redirect from='/home' to='/' />
                    <Route path='/' exact component={Home} />
                    <Route path='/teaching' exact component={Teaching} />
                    <Route path='/committee' exact component={Committee} />
                    <Route path='/publications' exact component={Publications} />
                    <Route path='/awards' exact component={Awards} />
                    <Route path='/talks' exact component={Talks} />
                </Switch>
            </HashRouter>
        </section>
    );
}
export default Main;