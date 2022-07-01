import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs';

export default function configStore() {
    return configureStore({reducer: reducer});
};
