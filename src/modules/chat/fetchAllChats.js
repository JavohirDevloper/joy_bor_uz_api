const { chatModel } = require("./chat");

const fetchAllChats = async ({ user }) => {
  const chats = await chatModel
    .find({
      users: { $elemMatch: { $eq: user.id } },
    })
    .populate("users")
    .populate("latestMessage")
    .populate("groupAdmin")
    .sort({ updatedAt: -1 });
  const finalChats = await user.populate(chats, {
    path: "latestMessage.sender",
    select: "name email profilePic",
  });
  return finalChats;
};

module.exports = { fetchAllChats };
