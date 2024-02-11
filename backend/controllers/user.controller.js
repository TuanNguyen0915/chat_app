import User from '../models/user.model.js'

const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password') // get all User with out loggedInUser

    res.status(200).json({ success: true, users: filteredUsers })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export { getUsers }
