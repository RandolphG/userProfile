const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch(err => {
    console.log(`Error with mongoose connect`);
    console.error(err);
  });

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`connected to Atlas @${db.host}`);
});
