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
import {createStore, Reducer, Action, ReducersMapObject} from 'redux';
import {Provider} from 'react-redux';
import * as Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import * as actions from './actions';
import * as state from './state';

import {GloomyPage} from "./components/main";


export interface AppAction extends Action {
    props:{[key:string]:any};
}


const rootReducer:Reducer<state.AppState> = (state:state.AppState, action:AppAction) => {
    return state;
}

const ngramList = (data:Immutable.List<any>, action:AppAction) => {
    return data;
}

const activePane = (paneId:string, action:AppAction) => {
    console.log('active pane: ', paneId, action);
    switch (action.type) {
        case actions.MAIN_MENU_SWITCH_PANE:
            return action.props['paneId'];
        default:
            return paneId;
    }
}

const store = createStore(
    combineReducers({
        activePane,
        ngramList
    }),
    new state.AppState()
);


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