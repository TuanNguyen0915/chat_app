import toast from "react-hot-toast";

const handleInputError = (formData) => {
  const { username, password } = formData;
  if (!username || !password) {
    toast.error("please fill in all the fields");
    return true;
  }
  return false;
};

const logIn = async (formData) => {
  try {
    const hasError = handleInputError(formData);
    if (hasError) {
      return;
    }
    const res = await fetch(`api/auth/login`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("chat-user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export default logIn;
