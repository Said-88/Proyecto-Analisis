
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Formik, Form } from "formik";
import {CreatedEvents} from "./CreatedEvents";
import { useEvent } from "../context/EventContext";
import { useParams } from "react-router-dom";

export const CreateEvents = () => {
  const params = useParams();
  const { events, loadEvents, getEvent, createEvent, updateEvent } = useEvent();
  const [event, setEvent] = useState({
    nombre: "",
    fecha: "",
    lugar: "",
    tipo: 0,
    descrip: "",
    image: "",
    puntos: 0,
  })

  useEffect(() => {
    loadEvents();
  });

  useEffect(() => {
    const loadEvent = async () => {
      if(params.id){
      const event =  await getEvent(params.id);
      setEvent({
        nombre: event.nombre_evento,
        fecha: event.fecha_evento,
        lugar: event.lugar_evento,
        tipo: event.tipo_evento,
        descrip: event.descripcion_evento,
        image: event.image_evento,
        puntos: event.puntos_coprogramaticos,
      });
      }
    }
    loadEvent();
  })

  return (
    <>
      <div className="bg-white">
        <Navbar />
      </div>
      <Formik
        initialValues={event}
        enableReinitialize={true}
        onSubmit={ async (values) => {
          console.log(values);
          
          if (params.id) {
            await updateEvent(params.id, values);
          } else {
           await createEvent(values);
          }
          setEvent({ nombre: "", fecha: "", lugar: "", tipo: 0, descrip: "", image: "", puntos: 0 });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div className="max-w-xl mx-auto p-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={"https://via.placeholder.com/150"}
                    alt="Evento"
                  />
                </div>
                <div className="p-8 w-full">
                  <h2 className="text-xl font-semibold mb-2">Crear Evento</h2>
                  <Form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700">
                        Nombre de evento:
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        className="border border-gray-300 p-2 w-full"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Fecha de evento:
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        className="border border-gray-300 p-2 w-full"
                        value={values.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Lugar de evento:
                      </label>
                      <input
                        type="text"
                        name="lugar"
                        className="border border-gray-300 p-2 w-full"
                        value={values.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Tipo de evento:
                      </label>
                      <select
                        name="tipo"
                        className="border border-gray-300 p-2 w-full"
                        value={values.type}
                        onChange={handleChange}
                      >
                        <option value={0}>Selecciona un tipo de evento</option>
                        <option value={1}>Presencial</option>
                        <option value={2}>Virtual</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Descripción de evento:
                      </label>
                      <textarea
                        type="text"
                        name="descrip"
                        className="border border-gray-300 p-2 w-full"
                        value={values.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Url de evento:
                      </label>
                      <input
                        type="text"
                        name="image"
                        className="border border-gray-300 p-2 w-full"
                        value={values.image}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Puntos coprogramáticos:
                      </label>
                      <input
                        type="number"
                        name="puntos"
                        className="border border-gray-300 p-2 w-full"
                        value={values.points}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-blue-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Guardando..." : "Guardar"}
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Eventos Creados
              </h2>
              <div>
                {events.map((event) => (
                  <CreatedEvents event={event} key={event.id}/>
                ))}
              </div>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </>
  );
};
