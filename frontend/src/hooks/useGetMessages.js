import toast from "react-hot-toast"

const useGetMessages = async (conversationId) => {
  try {
    const res = await fetch(`/api/messages/${conversationId}`)
    const data = await res.json()
    if(data.error) {
      toast.error(data.error)
    }
    return data
  } catch (error) {
    toast.error(error.message)
  }
}

export default useGetMessages