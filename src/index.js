import React from 'react';
import ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {createStore} from 'redux'
import { connect, Provider } from 'react-redux'
import {combineReducers} from 'redux'
import * as reducer from './redux/reducer'
import asyncComonent from './asyncComonent'
import {Button} from 'antd-mobile';

const store = createStore(combineReducers(reducer));
const Home = asyncComonent(()=>(import('./home')));
const Test = asyncComonent(()=>(import('./test')));
const NoPage = asyncComonent(()=>(import('./noPage')));


@connect(state=>(state))
class App extends React.Component{
    render(){
        return <div>
            <Router>
                <div>
                    <Button>111111</Button>
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
    }
}

let div = document.createElement('div');
document.body.appendChild(div);
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, div);

