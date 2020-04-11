import React from 'react';

import { IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonButton, IonIcon } from '@ionic/react';

import buttons from '../constants/buttons';

import useContextState from '../functions/useContextState';

import Button from '../interfaces/button';

const ButtonsTable: React.FC = () => {
    const [state, dispatch] = useContextState();

    function handleButtonClick(button: Button) {
        if (button.onClick) {
            button.onClick(state, dispatch);
        };
    };

    function getColor(button: Button) {
        let color = 'lightwhite';
        
        if (button.bold) {
            if (button.standard) {
                color = 'standardbutton';
            } else {
                color = 'specialbutton';
            };
        };

        return color;
    };

    return (
        <IonGrid>
            <IonRow>
                {
                    buttons.map((button, index) => (
                        <IonCol key={index} size='3'>
                            {
                                button.rounded ? (
                                    <IonFab onClick={() => handleButtonClick(button)} className='equal-button' horizontal='center' vertical='center'>
                                        <IonFabButton className='buttons fab-button' color='lightblue'>
                                            {button.value}
                                        </IonFabButton>
                                    </IonFab>
                                ) : (
                                    <IonButton className={`buttons ${button.divide && 'divide'}`} onClick={() => handleButtonClick(button)} color={getColor(button)} expand='full' size='large' fill='clear'>
                                        {button.icon ? <IonIcon icon={button.icon} /> : button.value}
                                    </IonButton>
                                )
                            }
                        </IonCol>
                    ))
                }
            </IonRow>
      </IonGrid>
    )
};

export default ButtonsTable;