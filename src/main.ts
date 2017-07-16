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
import {createStore, Reducer, Action} from 'redux';
import {Provider} from 'react-redux';
import * as Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import * as actions from './actions';

import {GloomyPageX} from "./components/main";


export class AppState extends Immutable.Record(
    {
        activePane: 'home',
        ngramListData: Immutable.List<any>()
    }) {

    activePane:string;
    ngramListData:Immutable.List<any>
}

export interface AppAction extends Action {
    props:{[key:string]:any};
}


const rootReducer = (state:AppState, action:AppAction) => {
    return state;
}

const paneSwitchReducer:<A extends Action>(paneId:string, action: AppAction) => AppState = (paneId:string, action:AppAction) => {
    switch (action.type) {
        case actions.MAIN_MENU_SWITCH_PANE:
            return action.props['paneId'];
        default:
            return paneId;
    }
}


const store = createStore(
    combineReducers({
        rootReducer,
        paneSwitchReducer
    }),
    new AppState()
);


console.log('store: ', store);




ReactDOM.render(
    React.createElement(
        Provider,
        {
            store: store,
            children: React.createElement(GloomyPageX, {version: '0.0.1'})
        }
    ),
    document.getElementById('react-mount')
);