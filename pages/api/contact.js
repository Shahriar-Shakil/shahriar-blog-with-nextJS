import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://shahriar:ni23BVn9j9pXJbn@cluster0.3lxyq7x.mongodb.net/my-blog-site?retryWrites=true&w=majority";

async function handler(req, res) {
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
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "storing message failed" });
      return;
    }

    res.status(201).json({ message: "Successfully stored message" });
    client.close();
  }
}
export default handler;
