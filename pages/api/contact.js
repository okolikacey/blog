import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    const newMessage = { email, name, message };

    let client;
    try {
      client = await MongoClient.connect("mongodb://localhost:27017/my-blog");
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Something went wrong" });
    }
    client.close();

    res.status(201).json({ message: "Successfully stored message", message: newMessage });
  }
}
