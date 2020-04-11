import Action from '../interfaces/action';

export default (payload: string): Action<string> => ({
    type: 'UPDATE_RESULT',
    payload
});