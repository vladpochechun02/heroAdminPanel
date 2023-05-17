// import { createStore } from 'redux';
// import reducer from '../reducers';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production', // Включение Redux DevTools только в режиме разработки
});

export default store;