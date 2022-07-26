// create a BinaryTree schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a BinaryTree schema
const BinaryTreeSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    userName: {
      type: String,
    },
    placements: [
      {
        placement: {
          type: String,
          enum: ['a', 'b', 'c', 'd', 'e'],
        },
        members: [],
      },
    ],
  },

  { timestamps: true }
);

const BinaryTree = mongoose.model('BinaryTree', BinaryTreeSchema);
module.exports = BinaryTree;
