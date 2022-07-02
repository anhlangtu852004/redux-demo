import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import reducer from './bugs';
import reducer from './reducer';
import toastNoti from './middleware/toast';

export default function configStore() {
    return configureStore({
        reducer: reducer,
        middleware: [
            ...getDefaultMiddleware(),
            toastNoti
        ]
    });
};
