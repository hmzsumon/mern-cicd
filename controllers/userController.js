const User = require('../models/User');
const BinaryTree = require('../models/BinaryTree');

// create user
exports.create = async function (req, res) {
  const user = await User.create({
    name: 'Zakaria Sumon',
    usrName: 'zakaria',
    password: '123456',
  });
  res.status(200).json({
    message: 'User created successfully',
    user,
  });
};

// register user
exports.register = async function (req, res) {
  const sponsorId = '62bc0e364a2296d233706970';
  const place = 'e';
  const { name, userName, password } = req.body;

  try {
    const user = await User.create({
      name,
      userName,
      password,
    });

    // create new BinaryTree
    await BinaryTree.create({
      user: user._id,
      userName: user.userName,
      placements: [
        { placement: 'a', members: [] },
        { placement: 'b', members: [] },
        { placement: 'c', members: [] },
        { placement: 'd', members: [] },
        { placement: 'e', members: [] },
      ],
    });

    // find sponsor
    const sponsor = await User.findById(sponsorId);
    if (!sponsor) {
      return res.status(404).json({
        message: 'Sponsor not found',
      });
    }

    // find BinaryTree by sponsorId
    const parentNode = await BinaryTree.findOne({ userName: sponsor.userName });

    // find placement by placement
    const placementNode = parentNode.placements.find((placement) => {
      return placement.placement === place;
    });
    // update placementNode members
    placementNode.members.push(user.userName);
    await parentNode.save();

    res.status(200).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get binary tree values
exports.getBinaryTreeValueseeee = async function (req, res) {
  const { userId } = req.params;

  class TreeNode {
    constructor(user) {
      this.user = user;
      this.left = null;
      this.right = null;
    }
  }

  try {
    const a = new TreeNode({
      userName: 'user_a',
    });

    const b = new TreeNode({
      userName: 'user_B',
    });

    const c = new TreeNode({
      userName: 'user_C',
    });

    const d = new TreeNode({
      userName: 'user_D',
    });

    const e = new TreeNode({
      userName: 'user_E',
    });

    const f = new TreeNode({
      userName: 'user_F',
    });

    const g = new TreeNode({
      userName: 'user_G',
    });

    const h = new TreeNode({
      userName: 'user_H',
    });

    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.right = f;

    d.left = g;
    d.right = h;

    // get all nodes list
    const nodes = [];
    const getNodes = (node) => {
      if (node) {
        nodes.push(node);
        getNodes(node.left);
        getNodes(node.right);
      }
    };

    getNodes(a);

    // get node length
    const nodeLength = nodes.length;

    res.status(200).json({
      success: true,
      nodes,
      nodeLength,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get binary tree values
exports.getBinaryTreeValues = async function (req, res) {
  const { userId } = req.params;

  // find BinaryTree by userId
  const parentNode = await BinaryTree.findOne({ user: userId });

  if (!parentNode) {
    return res.status(404).json({
      message: 'BinaryTree not found',
    });
  }

  try {
    // get all placements
    const placements = parentNode.placements;

    // get individual placement

    res.status(200).json({
      success: true,
      placements,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get a single placement
exports.getPlacement = async function (req, res) {
  const { userId, place } = req.params;
  console.log(userId, place);

  // find BinaryTree by userId
  const parentNode = await BinaryTree.findOne({ user: userId });

  if (!parentNode) {
    return res.status(404).json({
      message: 'BinaryTree not found',
    });
  }

  try {
    // get individual placement
    const placementNode = parentNode.placements.find((placement) => {
      return placement.placement === place;
    });

    // get placement members
    const members = placementNode.members;

    //total placement members
    const totalPlacementMembers = placementNode.members.length;

    res.status(200).json({
      success: true,
      totalPlacementMembers,
      members,
      placementNode,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get all users
exports.getUsers = async function (req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
