import Translation from '../types/translation';

export default {
    polish: {
        cannotDivideAlert: {
            header: 'Uwaga!',
            message: 'Nie można dzielić przez 0!',
            confirmButton: 'Okej'
        },
        noScriptAlert: 'Twoja przeglądarka nie wspiera JavaScript'
    },
    english: {
        cannotDivideAlert: {
            header: 'Warning!',
            message: 'You can\'t divide by zero!',
            confirmButton: 'Ok'
        },
        noScriptAlert: 'Your browser does not support JavaScript'
    },
    german: {
        cannotDivideAlert: {
            header: 'Warnung!',
            message: 'Sie können nicht durch Null teilen!',
            confirmButton: 'Ok'
        },
        noScriptAlert: 'Ihr Browser unterstützt Javascript nicht'
    }
} as Translation;