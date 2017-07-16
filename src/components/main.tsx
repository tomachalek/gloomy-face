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

import * as React from 'react';
import {connect} from 'react-redux';
import * as Immutable from 'immutable';
import {Store, Dispatch} from 'redux';
import {AppState} from '../main';
import * as actions from '../actions';
import {AppAction} from '../main';

const mapStateToProps = (state:AppState, ownProps:GloomyPageProps) => {
    console.log('1: ', state, '2: ', ownProps);
    return {
        activePane: state.get('activePane')
    };
}

const mapDispatchToProps = (dispatch:Dispatch<any>, ownProps:GloomyPageProps) => {
    return {
        handleActionClick: () => dispatch({type: actions.MAIN_MENU_SWITCH_PANE, props: {}})
    };
}

// ------------------


export const ActionLink = (props:{actionId:string; label:string, onClick:()=>void}) => {
    console.log('onclick: ', props.onClick);
    return <a onClick={props.onClick}>{props.label}</a>;
}

// ------------------

export interface GloomyPageProps {
    version: string;
    handleActionClick?:()=>void;

}

/**
 *
 * @param props
 */
export const GloomyPage = (props: GloomyPageProps, activePane:any) => {
    console.log('props: ', props);

    return (
        <div>
            <h1>Gloomy web interface v. {props.version}</h1>
            <ul>
                <li>
                    <ActionLink label="foo" actionId="bar" onClick={props.handleActionClick} />
                </li>
            </ul>
        </div>
    );
};

export const GloomyPageX = connect(mapStateToProps, mapDispatchToProps)(GloomyPage);