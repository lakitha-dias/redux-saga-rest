import React, {Component, Fragment} from 'react';


// provider component to facilitate all the child components
import {Provider} from 'react-redux';


import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configureStore from "./store";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
