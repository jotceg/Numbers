import Theme from '../types/theme';

import Action from '../interfaces/action';

export default (payload: Theme): Action<Theme> => ({
    type: 'TOGGLE_THEME',
    payload
});