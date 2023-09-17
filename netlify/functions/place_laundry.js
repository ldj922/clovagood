const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const laundromats = raittoData.filter(item => item.category === '빨래방');
    return {
      statusCode: 200,
      body: JSON.stringify(laundromats)
    };
  };
  