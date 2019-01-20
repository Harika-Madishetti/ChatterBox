/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux'
import configurestore from './components/store/store';
import LoginContainer from "./components/LoginScreen/LoginContainer"
import RootReducer from "./components/store/RootReducer"

const store = configurestore(RootReducer)
if(process.env.NODE_ENV !== 'production'){
    window.myStore = store
}
const App = () => (
    <Provider store={store}>
        <LoginContainer/>
    </Provider>
)
export default App