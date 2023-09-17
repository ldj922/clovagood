const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const raittoData = []; // 데이터를 저장할 배열

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const originalFilename = file.originalname;
    const safeFilename = sanitizeFilename(originalFilename);
    cb(null, safeFilename);
  },
});

const upload = multer({ storage: storage });

const sanitizeFilename = (filename) => {
  return filename.replace(/[^a-zA-Z0-9-_\.]/g, '_');
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/save_store', upload.single('photo_url'), (req, res) => {
  const storeName = req.body.store_name; 
  const category = req.body.category;
  const phoneNumber = req.body.phone_number;
  const menu = req.body.menu;
  const photoUrl = req.body.photo_url;

  const raittoDataInfo = {
    storeName, 
    category,
    phoneNumber,
    menu,
    photoUrl,
  };

  raittoData.push(raittoDataInfo);

  console.log('데이터가 성공적으로 추가되었습니다.');

  // 추가 성공 페이지로 이동
  const successPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>추가 성공</title>
    </head>
    <body>
        <h1>추가 성공</h1>
        <p>새로운 데이터가 추가되었습니다.</p>
        <a href="/">돌아가기</a>
    </body>
    </html>
  `;
  res.send(successPage);  
});

app.get('/api/place_restaurant', (req, res) => {
  const restaurants = raittoData.filter(item => item.category === '식당');
  res.json(restaurants);
});

app.get('/api/place_drink_alcohol', (req, res) => {
  const alcoholPlaces = raittoData.filter(item => item.category === '술집');
  res.json(alcoholPlaces);
});

app.get('/api/place_drink_caffeine', (req, res) => {
  const cafePlaces = raittoData.filter(item => item.category === '카페');
  res.json(cafePlaces);
});

app.get('/api/place_play_game', (req, res) => {
  const pcPlaces = raittoData.filter(item => item.category === 'PC방');
  res.json(pcPlaces);
});

app.get('/api/place_sing', (req, res) => {
  const karaokePlaces = raittoData.filter(item => item.category === '노래방');
  res.json(karaokePlaces);
});

app.get('/api/place_exercise', (req, res) => {
  const exercisePlaces = raittoData.filter(item => item.category === '운동 시설');
  res.json(exercisePlaces);
});

app.get('/api/place_convenience', (req, res) => {
  const convenienceStores = raittoData.filter(item => item.category === '편의점');
  res.json(convenienceStores);
});

app.get('/api/place_book', (req, res) => {
  const bookStores = raittoData.filter(item => item.category === '책방');
  res.json(bookStores);
});

app.get('/api/place_laundry', (req, res) => {
  const laundries = raittoData.filter(item => item.category === '빨래방');
  res.json(laundries);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});