import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logIn from "../hooks/useLogin";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const Login = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const user = await logIn(formData);
      if (!user.success) {
        toast.error(user.message);
      } else {
        setAuthUser(user);
        toast.success(user.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flexCenter min-w-96 flex-col rounded-lg  bg-gray-200 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-md backdrop-filter">
      <h1 className="p-4 text-center text-3xl font-semibold text-gray-300">
        Login
        <span className="ml-4 text-gray-700 duration-500 hover:text-blue-500">
          ChatApp
        </span>
      </h1>
      <form
        className="flexCenter w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label className="label h-[2rem]">
            <span className="text-lg">
              {formData.username ? "Username" : ""}
            </span>
          </label>
          <input
            onChange={handleOnChange}
            name="username"
            value={formData.username}
            type="text"
            className="input input-bordered h-10 w-full"
            placeholder="Enter Username"
          />
        </div>
        <div className="w-full">
          <label className="label h-[2rem]">
            <span className="text-lg">
              {formData.password ? "Password" : ""}
            </span>
          </label>
          <input
            onChange={handleOnChange}
            name="password"
            value={formData.password}
            type="password"
            className="input input-bordered h-10 w-full"
            placeholder="Enter Password"
          />
        </div>
        <p
          className="group mt-4 cursor-pointer text-xl "
          onClick={() => navigate("/sign-up")}
        >
          {"Don't"} have an account?{" "}
          <span className="text-gray-700 duration-300 group-hover:text-blue-700">
            SignUp
          </span>
        </p>
        <button
        disabled={loading}
        className={`btn btn-lg btn-block mt-2 ${loading?"cursor-not-allowed":""}`}>{loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          "Login"
        )}</button>
      </form>
    </section>
  );
};

export default Login;
