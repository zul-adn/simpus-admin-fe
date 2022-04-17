  
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Store from './AppCore';
import RootApp from './Root';

function App() {
    return (
        <Provider store={Store}>
            <RootApp />
        </Provider>
    );
}

export default App;