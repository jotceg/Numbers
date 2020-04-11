import Action from '../interfaces/action';

export default (payload: boolean): Action<boolean> => ({
    type: 'TOGGLE_ALERT_POPUP',
    payload
});