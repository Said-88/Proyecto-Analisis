import { getEventsRequest, getEventRequest, createEventRequest, updateEventRequest } from "../api/event.api";
import {  createContext, useContext, useState} from "react";

export const eventContext = createContext(); // <-- fixed

export const useEvent = () => {
    const context = useContext(eventContext);
    if (!context) throw new Error("EventContextProvider not found");
    return context;
}

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
  
    async function loadEvents() {
      const response = await getEventsRequest();
      console.log(response.data);
      setEvents(response.data);
    }

    const getEvent = async (id) => {
      try {
       const response =  await getEventRequest(id);
        return response.data;
      } catch (error) {
        console.error(error); 
      }
    }

    const createEvent = async (event) => {
      try {
        const response = await createEventRequest(event);
        console.log(response);       
      } catch (error) {
        console.error(error);
      }
    }

    const updateEvent = async (id, newFields) => {
      try {
        const response = await updateEventRequest(id, newFields);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <eventContext.Provider value={{ events, loadEvents, getEvent, createEvent, updateEvent}}>
        {children}
      </eventContext.Provider>
    );
  }