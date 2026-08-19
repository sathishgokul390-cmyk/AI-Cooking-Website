const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'change_this_secret', { expiresIn: '7d' });
}

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already in use' });

  const hashed = await bcrypt.hash(password, 8);
  const user = await User.create({ email, name: name || '', password: hashed });

  const token = generateToken(user._id);
  res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken(user._id);
  res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
};

exports.profile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password').populate('favorites');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};
