/*
 * Copyright 2017 Tomas Machalek <tomas.machalek@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import {combineReducers, createStore, Reducer, Action} from 'redux';
import {Provider} from 'react-redux';
import * as Immutable from 'immutable';

import {GloomyPage} from "./components/main";


const initialState = Immutable.Record({
    activePane: 'home',
    ngramListData: Immutable.List<any>()
});

type AppState = Immutable.Record.Class;

const fooReducer:Reducer<AppState> = <Action>(state:AppState, action:Action) => {
    return state;
}


const store = createStore(fooReducer);


console.log('store: ', store);




ReactDOM.render(
    React.createElement(
        Provider,
        {
            store: store,
            children: React.createElement(GloomyPage, {version: '0.0.1'})
        }
    ),
    document.getElementById('react-mount')
);