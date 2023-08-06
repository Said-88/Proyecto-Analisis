import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventsRequest } from "../api/event.api";

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await getEventsRequest();
      console.log(response.data);
      setEvents(response.data);
    }
    loadEvents();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
      {events.map((event) => (
        <div className=" bg-white rounded-lg  p-4 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg mx-4 my-16 " key={event.id}>
          <img
            className="w-full h-40 object-cover mb-4"
            src={
              "https://www.usap.edu/wp-content/uploads/2023/07/Banner-Web-Matricula-Gratis-45-aniversario-USAP.png"
            }
            style={{ width: "100%", height: "100%" }}
            alt="Event Banner"
          />
          <h3 className="text-center text-xl font-semibold mb-2">
            {event.nombre_evento}
          </h3>
          <p className="text-gray-600">
            {event.fecha_evento}
          </p>
          <p className="text-gray-1300 mt-1">{event.lugar_evento}</p>
          <div className="flex justify-center items-center">
            <Link to={`/detail/event`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Acceder al Evento
              </button>
            </Link>
          </div>
        </div>
        
      ))}
      </div>
    </>
  );
  
};
