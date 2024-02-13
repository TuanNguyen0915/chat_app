import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'
import { getReceiverSocketId } from '../socket/socket.js'
import { io } from '../socket/socket.js'

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const senderId = req.user._id


    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    })

    // create a new conversation between sender and receiver
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }
    const newMessage = await Message({
      senderId,
      receiverId,
      message: req.body.message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }
    await Promise.all([conversation.save(), newMessage.save()])

    //socket.io
    const receiverSocketId = getReceiverSocketId(receiverId)
    if (receiverSocketId) {
      // io.to(<socket._id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit('newMessage', newMessage)
    }

    res.status(201).json(newMessage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params
    const senderId = req.user._id
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages')
    if (!conversation) {
      res.status(200).json({ success: true, messages: [] })
    } else {
      return res.status(200).json({ success: true, messages: conversation.messages })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

export { sendMessage, getMessages }
