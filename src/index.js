import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './redux/reducers'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

const rootElement =  document.getElementById('root')
const root = createRoot(rootElement)
const store = createStore(reducer, applyMiddleware(thunk))

root.render(
                <Provider store={store} >
                    <Router>
                        <App/>
                    </Router>
                </Provider>   
            )