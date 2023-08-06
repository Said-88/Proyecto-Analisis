import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const About = () => {
  return (
    <>
    <div className='bg-white'>
    <Navbar />
    </div>
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md ">
      <h1 className="text-5xl font-bold mb-2 text-center">Creadores</h1>
      <div className='text-3xl'>
      <p>Said Leon</p>
      <p>Christopher</p>
      <p>Kenneth</p>
      <p>Franklin</p>
      <p>Saul</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
