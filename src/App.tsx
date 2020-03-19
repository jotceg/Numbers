import React from 'react';

import { IonApp } from '@ionic/react';

import StateContextProvider from './components/StateContextProvider';
import Router from './components/Router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <StateContextProvider>
      <Router />
    </StateContextProvider>
  </IonApp>
);

export default App;