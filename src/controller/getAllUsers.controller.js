const getallUsers = async (req, res) => {
  const { username } = req.body;
  res.status(200).json({ message: username });
};
module.exports = { getallUsers };
