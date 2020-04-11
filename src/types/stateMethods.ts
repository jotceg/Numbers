import { Dispatch } from 'react';

import Theme from './theme';
import Language from './language';

import State from '../interfaces/state';
import Action from '../interfaces/action';

type StateMethods = [
    State,
    Dispatch<Action>, {
        toggleTheme: (theme: Theme) => void;
        updateTyped: (typed: string) => void;
        updateResult: (result: string) => void;
        toggleReset: (reset: boolean) => void;
        toggleAlertPopup: (shouldToggleAlertPopup: boolean) => void;
        updateLanguage: (language: Language) => void;
    }
];

export default StateMethods;