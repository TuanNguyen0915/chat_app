import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useAuthContext } from "../../context/AuthContext";


const SignUp = () => {
  // const {setAuthUser} = useAuthContext()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, gender: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('Click me')
    // const user = await signup(formData);
    // if (user && !user.success) {
    //   toast.error(user.message);
    // } else if (user && user.success) {
    //   setAuthUser(user)
    //   toast.success(user.message);
    //   navigate("/");
    // }
  };

  return (
    <section className="flexCenter min-w-96 flex-col rounded-lg  bg-gray-200 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-md backdrop-filter">
      <h1 className="p-4 text-center text-3xl font-semibold text-gray-300">
        SignUp
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
              {formData.fullName ? "Full Name" : ""}
            </span>
          </label>
          <input
            autoComplete="off"
            onChange={handleOnChange}
            name="fullName"
            value={formData.fullName}
            type="text"
            className="input input-bordered h-10 w-full"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="w-full">
          <label className="label h-[2rem]">
            <span className="text-lg">
              {formData.username ? "Username" : ""}
            </span>
          </label>
          <input
            autoComplete="off"
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
            autoComplete="off"
            onChange={handleOnChange}
            name="password"
            value={formData.password}
            type="password"
            className="input input-bordered h-10 w-full"
            placeholder="Enter Password"
          />
        </div>
        <div className="w-full">
          <label className="label h-[2rem]">
            <span className="text-lg">
              {formData.confirmPassword ? "Confirm Password" : ""}
            </span>
          </label>
          <input
            autoComplete="off"
            onChange={handleOnChange}
            name="confirmPassword"
            value={formData.confirmPassword}
            type="password"
            className="input input-bordered h-10 w-full"
            placeholder="Confirm Password"
          />
        </div>
        {/* GENDER CHECKBOX */}
        <div className="flex gap-10">
          <div className="flex items-center gap-4">
            <label className="label cursor-pointer text-lg">Male</label>
            <input
              name="gender"
              type="radio"
              className="radio border-slate-900"
              onChange={handleCheck}
              value="male"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="label cursor-pointer text-lg">Female</label>
            <input
              name="gender"
              type="radio"
              className="radio border-slate-900"
              onChange={handleCheck}
              value="female"
            />
          </div>
        </div>
        {/* NAVIGATE LOGIN */}
        <p
          className="group mt-4 cursor-pointer text-xl"
          onClick={() => navigate("/login")}
        >
          Have an account?{" "}
          <span className="text-gray-700 duration-300 group-hover:text-blue-700">
            Login
          </span>
        </p>
        <button className="btn btn-lg btn-block mt-2">SignUp</button>
      </form>
    </section>
  );
};

export default SignUp;
