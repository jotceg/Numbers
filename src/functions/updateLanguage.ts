import Language from '../types/language';

import Action from '../interfaces/action';

export default (payload: Language): Action<Language> => ({
    type: 'UPDATE_LANGUAGE',
    payload
});