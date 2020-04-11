import React from 'react';

import { IonPage, IonContent } from '@ionic/react';

import ResultBar from '../components/ResultBar';
import ButtonsTable from '../components/ButtonsTable';
import CannotDivideAlert from '../components/CannotDivideAlert';

// TO DO:
// 1. Typed and result should shrink when there's too much text
// 4. Do something with "00" button (for example make "C" button erase everything and then the "00" will leave zero only, where "0" will just add zero)
// 6. Improve UI & UX on desktop (!) and cross-platform devices

// DONE:
// 2. Icons should be the same size - DONE
// 3. Cannot allow for evaluating if there's no expression (for example expression "1000" cannot be evaluated, because it's not a mathematical expression) - DONE
// 5. Cannot divide by zero - DONE
// 7. Delete any unnecessary console logs - DONE

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