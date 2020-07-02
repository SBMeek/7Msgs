import React from 'react';
import ReactDOM from 'react-dom';
import InitProvider from './global/InitContext';
import App from './App';
var DEBUG = false;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}
ReactDOM.render(
    <React.StrictMode>
        <InitProvider>
            <App />
        </InitProvider>
    </React.StrictMode>
    , document.querySelector('#react-root')
);