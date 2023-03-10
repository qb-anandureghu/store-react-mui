import '../fake-db';
import React from 'react';
import {Provider} from 'react-redux';
import {useRoutes} from 'react-router-dom';
import {AuthProvider} from 'app/contexts/FirebaseAuthContext';
import {SettingsProvider} from 'app/contexts/SettingsContext';
import {AllPages} from './routes/routes';
import {MatxTheme} from './components';
import {store} from './redux/store';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/tabulator.css";
import './styles/style.scss';
import './styles/tabulator.scss';

const App = () => {
  const all_pages = useRoutes(AllPages());

  return (
    <Provider store={store}>
      <SettingsProvider>
        <MatxTheme>
          <AuthProvider>{all_pages}</AuthProvider>
        </MatxTheme>
      </SettingsProvider>
    </Provider>
  );
};

export default App;
