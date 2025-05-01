import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { fetchInProgress, fetchError, addContact, deleteContact, } from "./contactsSlice";

axios.defaults.baseURL = "https://681386c2129f6313e2118f2d.mockapi.io";

const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchInProgress());
        const response = await axios.get("/contacts/fetchAll")
        return response.data;
    }
    catch (error) {
        toast.error("This didn't work.");
        dispatch(fetchError(error.message));
    }
};

const addContact = () => asyns dispatch => {
    const response = await axios.post ("contacts/addContact")
    return response.data.result
};

const deleteContact = () =>  asyns dispatch => {
    const response = await axios.delete ("contacts/deleteContact")
    return response.data.result
}