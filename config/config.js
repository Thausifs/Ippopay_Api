require('dotenv').config();

module.exports = {

  db: {
    str: process.env.Database_url,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

};
