import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/Banner-Moodle-45-aniversario-USAP.png';

export const EventDetail = () => {

  return (
    <> 
    <div className='bg-white relative'>
    <Navbar />
    </div>
    <div className="m-2">
      {/* Div de arriba con una imagen */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <img src={logo} alt="Imagen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>

      {/* Div de abajo con dos div internos */}
      <div className="flex flex-col md:flex-row mt-3"  style={{ display: 'flex' }}>
        {/* Div izquierdo con 70% de ancho */}
        <div className="w-full md:w-65p" style={{ flex: '65%', backgroundColor: 'white', padding: '20px' }}>
          <h1 className="mt-1 my-5 text-lg md:text-xl lg:text-xl xl:text-4xl text-blue-800 font-bold	">Digital Week “El poder de las comunidades”</h1>
          <hr />
          <h2 className="mt-1 text-base md:text-base lg:text-lg xl:text-2xl my-3 font-medium">Descripción:</h2>
          <p className="mt-1 my-3 text-sm md:text-base lg:text-base">La Escuela de Ciencias Informáticas USAP te invita al Digital Week “El poder de las comunidades”</p>
          <h2 className="mt-1 text-base md:text-base lg:text-lg xl:text-2xl font-medium" >Speaker:</h2>
          <p className="my-3 text-sm md:text-base lg:text-base">Christian Sánche - <br />Microsoft MVP, AuthO Ambassador y Postman Supernova, Google Developer Group Organizer</p>
          <hr />
          <div className="mt-4">
            <a href="#" className="inline-block text-xs md:text-base lg:text-lg font-bold px-4 py-2 leading-none border rounded bg-blue-600 text-white border-white hover:border-transparent hover:bg-blue-800 mt-4 lg:mt-0">Organizar</a>
          </div>
        </div>

        {/* Div derecho con 30% de ancho */}
        <div className="w-full md:w-35p border-solid border-2 border-indigo-600 rounded-lg mr-3 mb-3" style={{ flex: '35%', backgroundColor: '', padding: '20px' }}>
            <h1 className="mt-1 my-5 text-lg md:text-base lg:text-lg xl:text-3xl font-bold">Información general</h1>
            <h2 className="mt-1 text-base md:text-base lg:text-lg font-medium" >Direccion:</h2>
            <p className="text-sm md:text-base lg:text-base">Coworking Space HDC-USAP</p>
            <h2 className="mt-4 text-base md:text-base lg:text-lg font-medium" >Fecha:</h2>
            <p className="text-sm md:text-base lg:text-base">31 de julio al 01 de agosto</p>
            <h2 className="mt-4 text-base md:text-base lg:text-lg font-medium" >Hora:</h2>
            <p className="text-sm md:text-base lg:text-base">6:10 pm</p>
            <h2 className="mt-4 text-base md:text-base lg:text-lg font-medium" >EVENTO PRESENCIAL - GRATIS</h2>
            <p className="mt-1 text-sm font-medium">25 puntos coprogramáticos para estudiantes USAP (*5 por día)</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row mt-3"  style={{ display: 'flex' }}>
        <div className="w-full md:w-65p" style={{ flex: '65%', backgroundColor: 'white', padding: '20px' }}>
          <h1 className="mt-1 my-5 text-lg md:text-xl lg:text-xl xl:text-4xl text-blue-800 font-bold	">SCANNER</h1>
          <hr />
          <h2 className="mt-1 text-base md:text-base lg:text-lg xl:text-2xl my-3 font-medium">Aqui podras escanear:</h2>
          <hr />
          <div className="mt-4">
            <Link to="barcode" className="inline-block text-xs md:text-base lg:text-lg font-bold px-4 py-2 leading-none border rounded bg-blue-600 text-white border-white hover:border-transparent hover:bg-blue-800 mt-4 lg:mt-0">
            <button>
                Scan
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-35p border-solid border-2 border-indigo-600 rounded-lg mr-3" style={{ flex: '35%', backgroundColor: '', padding: '20px' }}>
            <h1 className="mt-1 my-5 text-lg md:text-base lg:text-lg xl:text-3xl font-bold">Información del Alumno</h1>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

