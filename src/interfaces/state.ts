import Theme from '../types/theme';
import Language from '../types/language';

export default interface State {
    typed: string;
    theme: Theme;
    result: string;
    reset: boolean;
    shouldDisplayAlertPopup: boolean;
    language: Language;
};