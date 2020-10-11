require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));

//이것을 사용하여 노드 js 서버에있는 이미지를 클라이언트에 표시(react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
// app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static assets if in production
// 프론트엔드를 위한 코드 (헤로쿠가 바라보는 코드)
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  // 모든 자바스크립트와 css 파일 같은 static한 파일들은 이곳에서 처리가 된다.
  // 헤로쿠는 이 client/build폴더를 보게됨
  app.use(express.static('client/build'));

  // 모든 라우트를 위한 index.html을 보기 위해서 client', 'build', 'index.html'를 본다.
  // 이역시 헤로쿠는 이 코드를본다.
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
