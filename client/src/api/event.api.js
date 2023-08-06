import axios from 'axios';

export const getEventsRequest = async (event) => {
    return await axios.get('http://localhost:4000/evento', event,
    { headers: { 'Content-Type': 'application/json' } });
}

export const getEventRequest = async (id) => {
    return await axios.get(`http://localhost:4000/evento/${id}`);
}

export const createEventRequest = async (event) => { 
    return  await axios.post('http://localhost:4000/evento', event,
    { headers: { 'Content-Type': 'application/json' } });
}

export const updateEventRequest = async (event) => {
    return await axios.patch('http://localhost:4000/evento', event,
    { headers: { 'Content-Type': 'application/json' } });
}

export const deleteEventRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/evento/${id}`);
}