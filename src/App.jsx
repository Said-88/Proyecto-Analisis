import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <EventProvider>
        <AppRouter/>
        </EventProvider>
      </AuthProvider> 
    </>
  )
}


