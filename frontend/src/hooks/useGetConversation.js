const useGetConversation = async () => {
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error(error);
  }
};

export default useGetConversation;
