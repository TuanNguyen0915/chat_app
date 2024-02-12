import toast from "react-hot-toast";


const handleInputErrors = (formData) => {
  const { fullName, username, password, confirmPassword, gender } = formData;
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill in all the fields");
    return true;
  }
  if (password.length < 7) {
    toast.error("Password needed more than 6 character");
    return true;
  }
  if (password !== confirmPassword) {
    toast.error("Password does not match");
    return true;
  }
  return false;
};

const signUp = async (formData) => {
  try {
    const hasError = handleInputErrors(formData);
    if (hasError) return;
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    //localStorage
    localStorage.setItem("chat-user", JSON.stringify(data));    
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export default signUp;
