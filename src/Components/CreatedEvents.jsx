/* eslint-disable react/prop-types */
import {deleteEventRequest} from "../api/event.api";
import { useNavigate } from "react-router-dom";

export const CreatedEvents = ({event}) => {
    const navigate = useNavigate();

    const handleDeleteEvent = async (id) => {
        try {
         const response =  await deleteEventRequest(id);
            console.log(response);
        } catch (error) {
            console.error(error);
        }   
    }
    

  return (
    <>
        <div className="border p-4 mb-4">
              <h3 className="text-lg font-semibold">{event.nombre_evento}</h3>
              <p className="text-gray-600">Fecha: {event.fecha_evento}</p>
              <p className="text-gray-600">Lugar: {event.lugar_evento}</p>
            
              <div className="mt-2">
                <button
                  className=" bg-yellow-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-yellow-600"
                  onClick={() => navigate(`/edit/event/:${event.id}`)}
                >
                  Editar
                </button>
                <button
                  className=" bg-red-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-red-600"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  Eliminar
                </button>
      
              </div>
            </div>
    </>
  )
}
