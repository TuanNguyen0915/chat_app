import toast from "react-hot-toast";

const logOut = async () => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    toast.success(data.message);
    localStorage.removeItem("chat-user");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export default logOut;
