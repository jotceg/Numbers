import { Dispatch } from 'react';

import State from './state';
import Action from './action';
 
import Ionicon from './ionicon';

export default interface Button {
    value: string;
    onClick?: (state: State, dispatch: Dispatch<Action>) => any;
    bold?: boolean;
    rounded?: boolean;
    standard?: boolean;
    icon?: Ionicon;
    divide?: boolean;
};