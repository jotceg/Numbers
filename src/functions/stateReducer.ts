import State from '../interfaces/state';
import Action from '../interfaces/action';

import initialState from '../constants/initialState';

import Theme from '../types/theme';
import Language from '../types/language';

export default function(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: (action as Action<Theme>).payload
            };
        case 'UPDATE_TYPED':
            return {
                ...state,
                typed: (action as Action<string>).payload
            };
        case 'UPDATE_RESULT':
            return {
                ...state,
                result: (action as Action<string>).payload
            };
        case 'TOGGLE_RESET':
            return {
                ...state,
                reset: (action as Action<boolean>).payload
            };
        case 'TOGGLE_ALERT_POPUP':
            return {
                ...state,
                shouldDisplayAlertPopup: (action as Action<boolean>).payload
            };
        case 'UPDATE_LANGUAGE':
            return {
                ...state,
                language: (action as Action<Language>).payload
            };
        default:
            return state;
    };
};