const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require('axios');

const githubCallback = async (req,res) => {
  const {code} = req.query;

  if(!code){
    return res.redirect(`${process.env.FRONTEND_URL.replace(/\/$/, '')}/login?error=no code`)
  }
  try {
    const tokenResponse = await axios.post(
       'https://github.com/login/oauth/access_token',
       {
        client_id:process.env.GITHUB_CLIENT_ID,
        client_secret:process.env.GITHUB_CLIENT_SECRET,
        code:code
       },
       {
        headers:{Accept:'application/json'}
       }
    )
    const {access_token} = tokenResponse.data;
    console.log('Got access token:',access_token);

    const userResponse = await axios.get('https://api.github.com/user',{
      headers:{
        Authorization:`Bearer ${access_token}`
      }
    })

    const githubUser = userResponse.data;

    console.log('Github User', githubUser);

    let user = await User.findOne({githubId:githubUser.id})

    if(!user){
      user = new User({
        githubId:githubUser.id,
        name:githubUser.name || githubUser.login,
        email:githubUser.email || null,
        avatar:githubUser.avatar_url
      })
      await user.save()
      console.log('New user created', user)
    } else {
       console.log('User already exists:', user)
    }

      const jwtToken = jwt.sign(
        {userId:user._id, email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
      )

      console.log('Generated JWT:',jwtToken)

      res.redirect(`${process.env.FRONTEND_URL.replace(/\/$/, '')}/dashboard?token=${jwtToken}`)



  }catch (error){
     console.error('OAuth error:', error.message)
    res.redirect(`${process.env.FRONTEND_URL.replace(/\/$/, '')}/login?error=auth_failed`)
  }
}

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Use already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "User created successfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(200).json({ token, name:user.name });
};

module.exports = { signUp, login, githubCallback }; 
