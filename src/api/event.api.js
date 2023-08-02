import axios from 'axios';

export const createEventRequest = async (event) => { 
    return  await axios.post('http://localhost:4000/events', event);
}