const useSendMessage = async (message, conversationId) => {
  try {
    const res = await fetch(`/api/messages/send/${conversationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message}),
    });
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

export default useSendMessage;
