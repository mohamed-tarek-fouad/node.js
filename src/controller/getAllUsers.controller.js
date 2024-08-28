const createuser = require("../services/createUser.service");
const getAllUsers = require("../services/getAllUsers.service");

const { username } = req.body;
const { greatedthan } = req.query;
console.log(greatedthan);
const user = await getAllUsers(username);
res.status(200).json({ message: user });

// const createUser = async (req, res) => {
//   const { name, age, email } = req.body;
//   const user = await createuser(name, age, email);
//   res.json({ user });
// };
module.exports = { getallUsers };
