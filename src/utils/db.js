// import mongoose from "mongoose";

// const mongoURI = process.env.DB_URL;
// const connection = {};

// async function connect() {
//   if (connection.isConnected) {
//     console.log("already connected");
//     return;
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConnected === 1) {
//       console.log("use previous connection");
//       return;
//     }
//     await mongoose.disconnect();
//   }
//   const db = await mongoose.connect(mongoURI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     connectTimeoutMS: 30000, // 30 seconds
//     socketTimeoutMS: 30000, // 30 seconds
//   });

//   console.log("new connection");
// }

// async function disconnect() {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === "production") {
//       await mongoose.disconnect();
//       connection.isConnected = false;
//     } else {
//       console.log("not disconnected");
//     }
//   }
// }

// const db = { connect, disconnect };
// export default db;

import mongoose from "mongoose";

const mongoURI = process.env.DB_URL;

const connectionOptions = {
  connectTimeoutMS: 30000, // 30 seconds timeout
  socketTimeoutMS: 30000, // 30 seconds timeout
};

async function connect() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(mongoURI, connectionOptions);
    console.log("New connection established with MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Implement error handling for retries or fallback mechanisms (optional)
  }
}

async function disconnect() {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log("Not currently connected to MongoDB");
      return;
    }

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
    // Implement error handling for reconnection attempts (optional)
  }
}

const db = { connect, disconnect };
export default db;

// ... rest of your code (PizzaData API routes)
