import { useState } from "react";
import { useAuth } from "../context/AuthContext";  
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";

export const RegisterPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChanges = ({target:{name,value}}) => {
    setUser({...user, [name]: value})
  }
 
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password); // signup es una función que viene del context
      navigate("/home");
    }
    catch(error) {
     setError(error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-11/12 max-w-[600px] bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold mt-4 text-center">Register Usap</h1>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-t-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChanges}
              />
            </div>

            <div>
            {<Alert message={error}/> }
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-t-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChanges}
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button type="submit"  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-800 text-white text-lg font-bold">
                Register
              </button>
              <Link to="/" className="flex py-3 border-2 rounded-xl border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
              <button type="button">
                Go to Sign in
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};
