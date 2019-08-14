import React from 'react';
import AddDate from './components/AddDate';

// Redux
import store from './store';
import { Provider } from 'react-redux';
import DatesList from './components/datesList';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <header>
                    <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
                </header>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <AddDate />
                    </div>
                    <div className="col-md-6">
                        <DatesList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
