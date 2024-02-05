const User = require("../users/User");
const { chatModel } = require("./chat");

const fetchAllChats = async ({ user }) => {
  const chats = await chatModel
    .find({
      users: { $elemMatch: { $eq: user.id } },
    })
    .populate([
      { path: "users" },
      { path: "latestMessage" },
      { path: "groupAdmin" },
    ]);

  const finalChats = await User.populate(chats, [
    { path: "latestMessage.sender" },
  ]);
  return finalChats;
};

module.exports = { fetchAllChats };
