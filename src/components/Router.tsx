import React, { useEffect } from 'react';

import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';

import { Route, Redirect } from 'react-router';

import Home from '../pages/Home';

import useContextState from '../functions/useContextState';

import translations from '../constants/translations';

const Router: React.FC = () => {
    const [{ theme, language }] = useContextState();

    useEffect(() => {
        function toggleDarkMode(toggle: boolean) {
            document.body.classList.toggle('dark', toggle);
        };

        const prefersDarkColorScheme = matchMedia('(prefers-color-scheme: dark)');

        toggleDarkMode(prefersDarkColorScheme.matches);

        prefersDarkColorScheme.addListener(event => toggleDarkMode(event.matches));

        return () => {
            prefersDarkColorScheme.removeListener(event => toggleDarkMode(event.matches));
        };
    }, []);

    useEffect(() => {
        const element = document.querySelector('#theme-color-element') as HTMLMetaElement;
        
        element.content = theme === 'light' ? '#FCFCFC' : '#243244';
    }, [theme]);

    useEffect(() => {
        const noscriptElement = document.querySelector('#noscript-element') as HTMLElement;

        noscriptElement.innerHTML = translations[language].noScriptAlert;
    }, [language]);

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path='/home' component={Home} />
                <Route exact path='/' render={() => <Redirect to='/home' />} />
            </IonRouterOutlet>
        </IonReactRouter>
    )
};

export default Router;