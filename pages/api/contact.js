import { connectDataBase, insertDocuments } from "../../helpers/db-util";

/**
 * It tries to connect to the database, then tries to insert the new message into the database, and if
 * either of those fail, it returns a 500 error
 * @param req - The request object.
 * @param res - The response object.
 * @returns a promise.
 */
async function handler(req, res) {

  if (req.method === "POST") {
    
    const { email, name, message } = req.body;
    
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    /* Creating a new object with the properties email, name, and message. */
    const newMessage = {
      email: email,
      name: name,
      message: message,
    };

    let client;
    
    /* Trying to connect to the database. If it fails, it will return a 500 error. */
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    let result;
    
    /* Trying to insert the new message into the database. If it fails, it will return a 500 error. */
    try {
      result = await insertDocuments(client, "messages", newMessage);
      res.status(201).json({
        message: "successfully stored message!",
        storedMessage: newMessage,
      });
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close()
  }
}

export default handler;
