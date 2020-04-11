import ActionType from '../types/actionType';

export default interface Action<Payload = any> {
    type: ActionType;
    payload: Payload;
};