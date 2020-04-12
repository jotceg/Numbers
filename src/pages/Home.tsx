import React from 'react';

import { IonPage, IonContent } from '@ionic/react';

import ResultBar from '../components/ResultBar';
import ButtonsTable from '../components/ButtonsTable';
import CannotDivideAlert from '../components/CannotDivideAlert';

const Home: React.FC = () => (
  <IonPage>
    <IonContent color='background'>
      <CannotDivideAlert />
      <ResultBar />
      <ButtonsTable />
    </IonContent>
  </IonPage>
);

export default Home;