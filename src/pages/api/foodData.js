// import PizzaData from "@/models/PizzaData";
// import db from "@/utils/db";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     await db.connect();
//     for (let i = 0; i < req.body.length; i++) {
//       let pizza = new PizzaData({
//         name: req.body[i].name,
//         category: req.body[i].category,
//         foodType: req.body[i].foodType,
//         price: req.body[i].price,
//         description: req.body[i].description,
//         img: req.body[i].img,
//       });
//       await pizza.save();
//     }
//     res.status(200).json({ Data: "Done hai" });
//   }

//   if (req.method === "GET") {
//     await db.connect();
//     let data = await PizzaData.find();
//     res.status(200).json({ data });
//   }
//   db.disconnect();
// }
import PizzaData from "@/models/PizzaData";
import db from "@/utils/db"; // Assuming `db` exports `connect` and `disconnect`

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await db.connect();
      for (let i = 0; i < req.body.length; i++) {
        let pizza = new PizzaData({
          name: req.body[i].name,
          category: req.body[i].category,
          foodType: req.body[i].foodType,
          price: req.body[i].price,
          description: req.body[i].description,
          img: req.body[i].img,
        });
        await pizza.save();
      }
      res.status(200).json({ Data: "Done hai" });
    } catch (error) {
      console.error("Error saving pizzas:", error);
      res.status(500).json({ error: "Failed to save pizzas" }); // Send a detailed error message to the client
    } finally {
      await db.disconnect(); // Ensure disconnection even if errors occur
    }
  }

  if (req.method === "GET") {
    try {
      await db.connect();
      let data = await PizzaData.find();
      res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      res.status(500).json({ error: "Failed to fetch pizzas" }); // Send a detailed error message to the client
    } finally {
      await db.disconnect(); // Ensure disconnection even if errors occur
    }
  }
}
