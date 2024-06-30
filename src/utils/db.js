import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://nextJsPizza:0APDzbjBcX6nGLlb@cluster0.nrtve9t.mongodb.net/nextJsPizza?retryWrites=true&w=majority&appName=Cluster0';
const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(mongoURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 90000, // 90 seconds
  });

  console.log("new connection");
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconnect };
export default db;
