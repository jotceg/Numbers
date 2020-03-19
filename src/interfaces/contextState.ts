import State from './state';
import Action from './action';

import { Dispatch } from 'react';

export default interface ContextState {
    state: State;
    dispatch: Dispatch<Action>;
};