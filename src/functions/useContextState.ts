import { useContext } from 'react';

import stateContext from '../constants/stateContext';

import StateMethods from '../types/stateMethods';

import toggleTheme from './toggleTheme';
import updateTyped from './updateTyped';
import updateResult from './updateResult';
import toggleReset from './toggleReset';
import toggleAlertPopup from './toggleAlertPopup';
import updateLanguage from './updateLanguage';

export default (): StateMethods => {
    const { state, dispatch } = useContext(stateContext);
    
    return [
        state,
        dispatch,
        {
            toggleTheme: theme => dispatch(toggleTheme(theme)),
            updateTyped: typed => dispatch(updateTyped(typed)),
            updateResult: result => dispatch(updateResult(result)),
            toggleReset: reset => dispatch(toggleReset(reset)),
            toggleAlertPopup: shouldToggleAlertPopup => dispatch(toggleAlertPopup(shouldToggleAlertPopup)),
            updateLanguage: language => dispatch(updateLanguage(language))
        }
    ];
};