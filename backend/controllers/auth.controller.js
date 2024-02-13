import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
  res.cookie('jwt', token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development'
  })
}

//**************SIGNUP**************/
const signup = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ success: false, message: "password doesn't match" })
    }
    let user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(404).json({ success: false, message: 'Account already exists' })
    }
    // hash password
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    user = await User.create({
      fullName: req.body.fullName,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      profilePhoto:
        req.body.gender === 'male'
          ? `https://avatar.iran.liara.run/public/boy?username=${req.body.username}`
          : `https://avatar.iran.liara.run/public/girl?username=${req.body.username}`,
    })
    // generate token
    // const token = generateToken(user._id)
    // res.cookie('token', token, {
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    //   httpOnly: true,
    //   sameSite: 'strict',
    //   secure: process.env.NODE_ENV !== 'development',
    // })
    generateToken(user._id, res)
    const { password, ...rest } = user._doc
    return res.status(201).json({ success: true, message: `Welcome ${user.fullName}`, user: rest })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

//**************LOGIN**************/
const login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(404).json({ success: false, message: "Account doesn't already exists" })
    }
    const isPasswordMatching = bcrypt.compareSync(req.body.password, user.password)
    if (!isPasswordMatching) {
      return res.status(400).json({ success: false, message: 'Password is not correct' })
    }
    // generate Token
    // const token = generateToken(user._id)
    // res.cookie('token', token, {
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    //   httpOnly: true,
    //   sameSite: 'strict',
    //   secure: process.env.NODE_ENV !== 'development',
    // })
    generateToken(user._id, res)
    const { password, ...rest } = user._doc
    return res.status(201).json({ success: true, message: `Welcome back ${user.fullName}`, user: rest })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

//**************LOGOUT**************/

const logout = async (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    return res.status(200).json({ success: true, message: 'User logout successfully' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export { signup, login, logout }
