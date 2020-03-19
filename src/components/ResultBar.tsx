import React, { useMemo } from 'react';

import { IonItem, IonLabel, IonInput } from '@ionic/react';

import useContextState from '../functions/useContextState';

const ResultBar: React.FC = () => {
    const [state] = useContextState();
    const doesResultExist = useMemo(() => state.result !== '' && state.result.length > 0, [state.result]);

    return (
        <IonItem className='ion-text-right top-bar' lines='full'>
            <IonLabel color='lightwhite' position={doesResultExist ? 'floating' : 'stacked'} className={`result-text margin-top-right-0 hidden-label ${doesResultExist && 'slide visible-label'}`}>
                {state.typed}
            </IonLabel>
            <IonInput className='result-text' color='standardbutton' value={doesResultExist ? state.result : state.typed} disabled />
        </IonItem>
    );
};

export default ResultBar;