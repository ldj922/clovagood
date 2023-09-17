const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const restaurants = raittoData.filter(item => item.category === '식당');
    return {
      statusCode: 200,
      body: JSON.stringify(restaurants)
    };
  };
  