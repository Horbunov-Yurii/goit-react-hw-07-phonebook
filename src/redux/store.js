import { configureStore } from '@reduxjs/toolkit';
import {contactReduser} from './contactsSlice';
import {filterredReduser} from './filterSlice';



export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterredReduser,
  },
});

