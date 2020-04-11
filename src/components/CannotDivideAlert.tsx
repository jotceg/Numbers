import React, { useEffect } from 'react';

import { IonAlert } from '@ionic/react';

import useContextState from '../functions/useContextState';

import translations from '../constants/translations';

const CannotDivideAlert: React.FC = () => {
    const [{ shouldDisplayAlertPopup, language }, , { toggleAlertPopup }] = useContextState();

    useEffect(() => {
        window.addEventListener('languagechange', language => {
            console.log({ language });
        });

        return () => {
            window.removeEventListener('languagechange', language => {
                console.log({ language });
            });
        };
    }, []);

    return (
        <IonAlert header={translations[language].cannotDivideAlert.header} message={`<h5>${translations[language].cannotDivideAlert.message}</h5>`} isOpen={shouldDisplayAlertPopup} buttons={[
            {
              text: translations[language].cannotDivideAlert.confirmButton,
              role: 'cancel',
              handler: () => toggleAlertPopup(false)
            }
          ]} />
    );
};

export default CannotDivideAlert;