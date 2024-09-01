const mongoose = require("mongoose");
//Write missing code 
mongoose.connect(
  "mongodb://localhost:27017/employee-app",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose
  .connect(
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
