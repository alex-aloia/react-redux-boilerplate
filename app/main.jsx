import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import todoApp from './reducers/index';

// let store = createStore(todoApp);
// let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());


const characters = [
    {
        "id": 1009146,
        "name": "Abomination (Emil Blonsky)",
        "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
        "modified": "2012-03-20T12:32:12-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
            "extension": "jpg"
        }
    },
    {
        "id": 1010354,
        "name": "Adam Warlock",
        "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
        "modified": "2013-08-07T13:49:06-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            "extension": "jpg"
        }
    },
    {
        "id": 1011031,
        "name": "Agent X (Nijo)",
        "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
        }
    }
];

import App from './components/App.jsx';

ReactDOM.render(
    <App characters={characters}/>,
    document.getElementById('app')
);
