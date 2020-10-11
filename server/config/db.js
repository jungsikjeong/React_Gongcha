const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
const config = require('./key');

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // 실패시 프로세스 종료
    process.exit(1);
  }
};

module.exports = connectDB;
