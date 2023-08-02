import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { resetPassword } = useAuth();
  const [error, setError] = useState();

  const handleChanges = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    if (!user.email) {
      setError("Email es requerido");
      return;
    }
    try {
      await resetPassword(user.email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-11/12 max-w-[600px] bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold mt-4 text-center">
          Recover Password
        </h1>
        <div className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium">
              Email
            </label>
            <input
              className="w-full border-2 border-t-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChanges}
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <div>{<Alert message={error} />}</div>
            <button
              onClick={handleResetPassword}
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-3xl bg-red-800 text-white text-lg font-bold"
            >
              Send
            </button>
            <Link to="/" className="mt-5 flex py-3 border-2 rounded-3xl border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
            <button type="button">
                Go to Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
