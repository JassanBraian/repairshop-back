const User = require('../models/User');

exports.getUsers = (req, res) => res.status(200).json({ message: 'It is a get request' });

exports.createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });
    const savedUser = await user.save();
    return res.status(201).json({ message: 'User was created successfuly'});
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error'});
  }
}
