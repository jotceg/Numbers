import { Dispatch } from 'react';

import State from '../interfaces/state';
import Action from '../interfaces/action';

import updateResult from './updateResult';
import updateTyped from './updateTyped';

// temporary solution
export default (state: State, dispatch: Dispatch<Action>, symbolFn: ((text: string) => string) | string) => {
    if (state.typed !== '' && state.typed.length > 0) {
        if (state.result !== '' && state.result.length > 0) {
            dispatch(updateResult(typeof symbolFn === 'function' ? symbolFn(state.result) : symbolFn));
        } else {
            dispatch(updateTyped(typeof symbolFn === 'function' ? symbolFn(state.typed) : symbolFn));
        };
    };
};