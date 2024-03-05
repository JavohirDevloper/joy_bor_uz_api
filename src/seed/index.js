const mongoose = require("mongoose");
const config = require("../shared/config");

const Admin = require("../modules/admin/Admin");

const AdminSeed = require("./admin-seed");

const seedData = async () => {
  const uri = `mongodb+srv://rahimovayubxon48:lA0l3rsOFoxddbYr@joyboruz.pvor4db.mongodb.net/`
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  const seedDB = async () => {
    // Har bitta collectionsga malumot qo'shishdan oldin
    // o'sha collecttionni o'chirish kerek
    await Admin.deleteMany({});
    await Admin.insertMany(AdminSeed);
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
};

seedData();
