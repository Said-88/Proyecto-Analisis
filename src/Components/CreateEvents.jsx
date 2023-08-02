import { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const CreateEvents = () => {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    type: '',
    description: '',
    image: null,
    points: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(imageFile);
    } else {
      setEventData((prevData) => ({
        ...prevData,
        image: null,
      }));
    }
  };

  const handleSaveEvent = () => {
    // Implementr guardar el evento en la lista de eventos
     setEvents([...events, eventData]);
    // Limpia los campos del formulario después de guardar el evento
    setEventData({
      name: '',
      date: '',
      location: '',
      type: '',
      description: '',
      image: null,
      points: 0,
    });
  };

  const handleEditEvent = () => {
    // Implementar editar un evento existente
  };

  const handleDeleteEvent = () => {
    // Implementar para eliminar un evento existente
    };

  const handleSuspendEvent = () => {
    // Implementar para suspender un evento existente
    };

  return (
    <>
    <div className='bg-white'>
    <Navbar/>
    </div>
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={eventData.image || 'https://via.placeholder.com/150'}
              alt="Evento"
            />
          </div>
          <div className="p-8 w-full">
            <h2 className="text-xl font-semibold mb-2">Crear Evento</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Nombre de evento:</label>
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Fecha de evento:</label>
                <input
                  type="date"
                  name="date"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Lugar de evento:</label>
                <input
                  type="text"
                  name="location"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Tipo de evento:</label>
                <select
                  name="type"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.type}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un tipo de evento</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Descripción de evento:</label>
                <textarea
                  name="description"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Imagen de evento:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  className="border border-gray-300 p-2 w-full"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Puntos coprogramáticos:</label>
                <input
                  type="number"
                  name="points"
                  className="border border-gray-300 p-2 w-full"
                  value={eventData.points}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-blue-600"
                  onClick={handleSaveEvent}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-yellow-600"
                  onClick={() => handleEditEvent(index)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-red-600"
                  onClick={() => handleDeleteEvent(index)}
                >
                  Eliminar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Eventos Creados</h2>
        <div>
          {events.map((event, index) => (
            <div key={index} className="border p-4 mb-4">
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-gray-600">Fecha: {event.date}</p>
              <p className="text-gray-600">Lugar: {event.location}</p>
            
              <div className="mt-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-yellow-600"
                  onClick={() => handleEditEvent(index)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-red-600"
                  onClick={() => handleDeleteEvent(index)}
                >
                  Eliminar
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-600"
                  onClick={() => handleSuspendEvent(index)}
                >
                  Suspender
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
