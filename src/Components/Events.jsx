import { Link } from "react-router-dom";

export const Events = () => {
  const handleAccessEvent = () => {
    // Aquí agregar la lógica para redirigir a la página del evento.
  };

  return (
    <div className=" bg-white rounded-lg  p-4 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <img
        className="w-full h-40 object-cover mb-4"
        src={
          "https://www.usap.edu/wp-content/uploads/2023/07/Banner-Web-Matricula-Gratis-45-aniversario-USAP.png"
        }
        style={{ width: "100%", height: "100%" }}
      />
      <h3 className="text-center text-xl font-semibold mb-2">
        Proyecto de Vinculación: Voluntariado ASJ
      </h3>
      <p className="text-gray-600">{"Fri, Aug 4, 8:30 AM + 104 more events"}</p>
      <p className="text-gray-1300 mt-1">Usap • San Pedro Sula</p>
      <div className="flex justify-center items-center">
        <Link to="/detail/event" >
        <button
          onClick={handleAccessEvent}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Acceder al Evento
        </button>
        </Link>
      </div>
    </div>
  );
};


