const multer = require('multer');
const path = require('path');

const raittoData = []; // 데이터를 저장할 배열

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/uploads/');
  },
  filename: function (req, file, cb) {
    const originalFilename = file.originalname;
    const safeFilename = originalFilename.replace(/[^a-zA-Z0-9-_\.]/g, '_');
    cb(null, safeFilename);
  },
});

const upload = multer({ storage: storage });

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  // 여기서 multer와 같은 미들웨어를 사용하는 부분이 조금 복잡해질 수 있습니다.
  // 이 부분은 별도로 처리해주어야 합니다.
  
  // 레코드 저장 로직 (예시)
  const storeName = event.body.store_name;
  const category = event.body.category;
  const phoneNumber = event.body.phone_number;
  const menu = event.body.menu;
  const photoUrl = event.body.photo_url;

  const raittoDataInfo = {
    storeName, 
    category,
    phoneNumber,
    menu,
    photoUrl,
  };

  raittoData.push(raittoDataInfo);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: '데이터가 성공적으로 추가되었습니다.' })
  };
};
