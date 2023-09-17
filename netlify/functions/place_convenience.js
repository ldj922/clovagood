const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const convenienceStores = raittoData.filter(item => item.category === '편의점');
    return {
      statusCode: 200,
      body: JSON.stringify(convenienceStores)
    };
  };
  