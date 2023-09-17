const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const bars = raittoData.filter(item => item.category === '술집');
    return {
      statusCode: 200,
      body: JSON.stringify(bars)
    };
  };
  