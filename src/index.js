import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import asyncComonent from './asyncComonent'

const Home = asyncComonent(()=>(import('./home')));
const Test = asyncComonent(()=>(import('./test')));
const NoPage = asyncComonent(()=>(import('./noPage')));

const App = () => (
    <div>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/home'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/test'}>test</Link>
                    </li>
                    <li>
                        <Link to={'/test2233'}>test</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/test'} component={Test}/>
                    <Route component={NoPage}/>
                </Switch>
            </div>
        </Router>
    </div>
)

let div = document.createElement('div');
document.body.appendChild(div);
ReactDom.render(<App />, div);

