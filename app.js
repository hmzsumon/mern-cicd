// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.descendants = [];
//   }
// }

// // create nodes with values
// const abe = new TreeNode('Abe');
// const homer = new TreeNode('Homer');
// const bart = new TreeNode('Bart');
// const lisa = new TreeNode('Lisa');
// const maggie = new TreeNode('Maggie');
// const tultul = new TreeNode('Tultul');
// const rafi = new TreeNode('Rafi');

// // add children to nodes
// abe.descendants.push(homer);
// homer.descendants.push(bart, lisa, maggie);
// abe.descendants.push(tultul);
// tultul.descendants.push(rafi);

// for (let i = 0; i < abe.descendants.length; i++) {
//   console.log(abe.descendants[i].value);
// }

// random number
const random = (Math.random() * 0.25).toFixed(2);
console.log(random);
