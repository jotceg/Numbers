import State from '../interfaces/state';

export default {
    theme: new Date().getHours() > 18 ? 'dark' : 'light',
    typed: '0',
    result: '',
    reset: false,
    shouldDisplayAlertPopup: false,
    language: navigator.language.includes('pl') ? 'polish' : navigator.language.includes('de') ? 'german' : 'english' || 'english'
} as State;