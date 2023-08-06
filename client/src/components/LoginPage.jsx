import { LoginForm } from "./LoginForm"

export const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm/>
      </div>
      <div className="bg-[url('./assets/Usap_Cmapus-transformed.jpeg')] hidden lg:flex h-full w-1/2 bg-cover bg-no-repeat bg-right bg-gray-200">           
      </div>
    </div>
    </>
  )
}
