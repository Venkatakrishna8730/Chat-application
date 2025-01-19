import message from "../models/messageSchema.js";
import conversation from "../models/conversationSchema.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async (req, res) => {
  try {
    const messageToSend = req.body.message;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let Conversation = await conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!Conversation) {
      Conversation = await conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await message.create({
      sender: senderId,
      receiver: receiverId,
      message: messageToSend,
    });

    if (newMessage) {
      Conversation.messages.push(newMessage._id);
    }

    await Conversation.save();

    //All save at a time
    // await Promise.save([conversation.save(),...,....,....]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message controllers:", error.message);
    res.status(500).json({ error: "Invalid server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    const Conversation = await conversation
      .findOne({
        participants: { $all: [senderId, receiverId] },
      })
      .populate("messages");

    if (!Conversation) {
      return res.status(200).json([]);
    }
    const messages = Conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get message controllers:", error.message);
    res.status(500).json({ error: "Invalid server error" });
  }
};

export { sendMessage, getMessages };
