import { createSlice } from "@reduxjs/toolkit";

const sliceContact = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null  
    },
    reducers: {
      fetchInProgress(state) {
        state.loading = true;
      },
        addContact(state, action) {
            state.items.push(action.payload);
            state.loading = false;
            state.error = null;
            /*return {
                ...state,
                contacts: {
                  items: [...state.contacts.items.id nanoid(),
                        name,
                        number,, action.payload]
                }
              };*/
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
            state.loading = false;
            state.error = null;
          /*  return {
                ...state,
                contacts: {
                  items: [...state.contacts.items.filter((contact) => contact.id !== contactId)]
                }
              },*/
        },
        fetchError(state, action) {
          state.loading = false;
          state.error = action.payload;
        },
    },
});
export const {addContact, deleteContact, fetchInProgress, fetchError } = sliceContact.actions;
export default sliceContact.reducer;

  