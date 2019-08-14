import { createStore } from 'redux';
import reducer from './redux/reducers';
import { saveStateStorage, getStateStorage } from './localstorage';

// Definir el state Inicial
// const initialState = [];

// Obtener citas de Localstorage
const storageState = getStateStorage();

const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveStateStorage({
        dates: store.getState().dates
    });
});

export default store;
