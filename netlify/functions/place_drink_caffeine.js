const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const cafes = raittoData.filter(item => item.category === '카페');
    return {
      statusCode: 200,
      body: JSON.stringify(cafes)
    };
  };
  