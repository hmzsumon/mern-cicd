const express = require('express');
const {
  create,
  register,
  getBinaryTreeValues,
  getPlacement,
  getUsers,
} = require('../controllers/userController');

const router = express.Router();

// test route
router.get('/test', create);
// register route
router.post('/register', register);

// get binary tree values
router.get('/binaryTree/:userId', getBinaryTreeValues);

// get placement
router.get('/placement/:userId/:place', getPlacement);

// get all all users
router.get('/users', getUsers);

module.exports = router;
