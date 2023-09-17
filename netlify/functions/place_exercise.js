const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const gyms = raittoData.filter(item => item.category === '운동 시설');
    return {
      statusCode: 200,
      body: JSON.stringify(gyms)
    };
  };
  