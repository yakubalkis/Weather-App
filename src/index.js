import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './redux/reducers'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
                <Provider store={store} >
                    <Router>
                        <App/>
                    </Router>
                </Provider>   
                    , document.getElementById('root'))