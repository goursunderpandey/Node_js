const mongoose = require('mongoose');
const Database = process.env.DATABASE_URL
mongoose.connect(Database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then( () => {
    console.log(" Connect To databse ");
})
.catch((error) => {
    console.log("unableto connect",error);
});
