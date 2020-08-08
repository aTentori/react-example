import React from 'react';
import logo from './logo.svg';
import './App.css';
import BreweryProvider from './brewery/BreweryProvider'

function App() {
    return (
        <div  className = "background">
            <BreweryProvider/>
        </div >
    );
}

export default App;
