import Language from './language';

type Translation = {
    [language in Language]: {
        cannotDivideAlert: {
            header: string;
            message: string;
            confirmButton: string;
        };
        noScriptAlert: string;
    };
};

export default Translation;